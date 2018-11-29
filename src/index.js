import createSearch from './createSearch';
import createSlider from './createSlider';


const CLOSED_SLIDE = 'rgb(161, 17, 17)';
const OPENED_SLIDE = 'blue';
let countSlider = 0;
let countPage = 1;
const apiKey = 'AIzaSyDE5BjzRdmgFAJFRAzjnXdoXRqKj3SBFiQ';
const htmlImport = document.querySelector('link[rel="import"]');
const htmlDoc = htmlImport.import;
let countNewPage = 0;
let nextPage = 0;
function getColorSlider(arg) {
  document.getElementById(`slide${+arg}`).style.backgroundColor = OPENED_SLIDE;
  document.getElementById(`slide${+arg}`).innerText = countPage;
}

function changeSlideRight() {
  const allValue = window.outerWidth;
  const w = window.outerWidth;
  if ((allValue < 751 && (countPage % 15 === 0)) || ((allValue >= 751 && allValue <= 1365)
    && (countPage % 8 === 0)) || (allValue > 1365 && (countPage % 4 === 0))) {
    // eslint-disable-next-line no-use-before-define
    searchFuncNext();
  }
  countPage += 1;
  if (w >= 1365) {
    document.getElementsByClassName('container-scroll')[0].scrollLeft += 1288;
  }
  if (w < 1365 && w > 750) {
    document.getElementsByClassName('container-scroll')[0].scrollLeft += 644;
  }
  if (w <= 750) {
    document.getElementsByClassName('container-scroll')[0].scrollLeft += 322;
  }

  if (countSlider !== 3) {
    countSlider += 1;
    getColorSlider(countSlider);
    document.getElementById(`slide${countSlider - 1}`).style.backgroundColor = CLOSED_SLIDE;
    document.getElementById(`slide${countSlider - 1}`).innerText = '';
  } else {
    countSlider = 0;
    getColorSlider(countSlider);
    document.getElementById(`slide${3}`).style.backgroundColor = CLOSED_SLIDE;
    document.getElementById(`slide${3}`).innerText = '';
  }
}

function changeSlideLeft() {
  const w = window.outerWidth;
  if (document.getElementsByClassName('container-scroll')[0].scrollLeft !== 0) {
    countPage -= 1;
    if (w >= 1365) {
      document.getElementsByClassName('container-scroll')[0].scrollLeft -= 1288;
    }
    if (w < 1365 && w > 750) {
      document.getElementsByClassName('container-scroll')[0].scrollLeft -= 644;
    }
    if (w <= 750) {
      document.getElementsByClassName('container-scroll')[0].scrollLeft -= 322;
    }

    if (countSlider !== 0) {
      countSlider -= 1;
      getColorSlider(countSlider);
      document.getElementById(`slide${countSlider + 1}`).style.backgroundColor = CLOSED_SLIDE;
      document.getElementById(`slide${countSlider + 1}`).innerText = '';
    } else {
      countSlider = 3;
      getColorSlider(countSlider);
      document.getElementById(`slide${0}`).style.backgroundColor = CLOSED_SLIDE;
      document.getElementById(`slide${0}`).innerText = '';
    }
  }
}

function changeSize() {
  document.getElementsByClassName('container-scroll')[0].scrollLeft = 0;
  if (document.getElementById('slider')) {
    document.getElementById('slider').remove();
  }
  createSlider();
  countPage = 1;
  getColorSlider(0);
  document.getElementsByClassName('left')[0].addEventListener('click', changeSlideLeft);
  document.getElementsByClassName('right')[0].addEventListener('click', changeSlideRight);
}


function createCards(id, title, description, author, date, countCard, imageCard, number) {
  document.getElementById(`title${number}`).innerText = title;
  document.getElementById(`title${number}`).href = `https://www.youtube.com/embed/${id}`;
  document.getElementById(`description${number}`).innerText = description;
  document.getElementById(`author${number}`).innerText = author;
  document.getElementById(`publication${number}`).innerText = date;
  document.getElementById(`count${number}`).innerText = countCard;
  document.getElementById(`image${number}`).src = imageCard;
  if (number === 14) {
    changeSize();
  }
}

function getInformationCard(id, number) {
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}&part=snippet,contentDetails,statistics,status`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.onreadystatechange = function getInformation() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const countCard = data.items[0].statistics.viewCount;
        const imageCard = data.items[0].snippet.thumbnails.medium.url;
        const titleCard = data.items[0].snippet.title;
        const descrCard = data.items[0].snippet.description.substring(0, 100);
        const authorCard = data.items[0].snippet.channelTitle;
        const dataCard = data.items[0].snippet.publishedAt.substring(0, 10);
        createCards(id, titleCard, descrCard, authorCard, dataCard, countCard, imageCard, number);
      }
    }
  };
  xhr.send();
}

function getAllCards(arrIdVideo, firstNum) {
  for (let i = 0; i < 15; i += 1) {
    setTimeout(getInformationCard, 500, arrIdVideo[i], i + (15 * firstNum));
  }
}

function getCountCards(firstNum) {
  if (!document.getElementsByClassName('container-scroll')[0]) {
    const containerScroll = document.createElement('div');
    containerScroll.className = 'container-scroll';
    document.body.appendChild(containerScroll);
  }
  for (let i = 0; i < 15; i += 1) {
    const htmlCard = htmlDoc.querySelector('.cards-container');
    document.getElementsByClassName('container-scroll')[0].appendChild(htmlCard.cloneNode(true));
    document.getElementById('cards-container').id = `cards-container${i + (15 * firstNum)}`;
    document.getElementById('title').id = `title${i + (15 * firstNum)}`;
    document.getElementById('description').id = `description${i + (15 * firstNum)}`;
    document.getElementById('author').id = `author${i + (15 * firstNum)}`;
    document.getElementById('publication').id = `publication${i + (15 * firstNum)}`;
    document.getElementById('count').id = `count${i + (15 * firstNum)}`;
    document.getElementById('image').id = `image${i + (15 * firstNum)}`;
  }
}

function searchFuncNext() {
  countNewPage += 1;
  const searchingValue = document.getElementById('search_input').value;
  if (searchingValue !== 'Search' || searchingValue === '') {
    const q = searchingValue;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=15&pageToken=${nextPage}&q=${q}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.onreadystatechange = function getArray() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          nextPage = data.nextPageToken;
          const arrayIdVideo = [];
          for (let i = 0; i < 15; i += 1) {
            arrayIdVideo.push(data.items[i].id.videoId);
          }
          getAllCards(arrayIdVideo, countNewPage);
          getCountCards(countNewPage);
        }
      }
    };
    xhr.send();
  }
}

function searchFunc() {
  if (document.getElementsByClassName('container-scroll')[0]) {
    document.body.removeChild(document.getElementsByClassName('container-scroll')[0]);
  }
  const searchingValue = document.getElementById('search_input').value;
  if (searchingValue !== 'Search' || searchingValue === '') {
    const q = searchingValue;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=15&pageToken&q=${q}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.onreadystatechange = function getArray() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          const arrayIdVideo = [];
          nextPage = data.nextPageToken;
          for (let i = 0; i < 15; i += 1) {
            arrayIdVideo.push(data.items[i].id.videoId);
          }
          getAllCards(arrayIdVideo, 0);
          getCountCards(0);
        }
      }
    };
    xhr.send();
  }
}

function connectKeyboard(e) {
  const searchingVal = document.getElementById('search_input').value;
  if (e.keyCode === 13 && searchingVal !== '') {
    searchFunc();
  }
}

function onWheel(arg) {
  let e = arg;
  e = e || window.event;
  const delta = e.deltaX || e.detail || e.wheelDelta;
  if (delta > 0) {
    changeSlideRight();
  }
  if (delta < 0) {
    changeSlideLeft();
  }
}


window.onload = function getMainPage() {
  window.addEventListener('resize', changeSize);
  createSearch();
  const buttonPress = document.getElementById('button');
  buttonPress.addEventListener('click', searchFunc);
  document.getElementById('search_input').addEventListener('keydown', connectKeyboard);
  if (document.body.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+, Ch31+
      document.body.addEventListener('wheel', onWheel);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      document.body.addEventListener('mousewheel', onWheel);
    } else {
      // Firefox < 17
      document.body.addEventListener('MozMousePixelScroll', onWheel);
    }
  }
};

exports.changeSize = changeSize;
exports.countPage = countPage;
exports.changeSlideRight = changeSlideRight;
exports.changeSlideLeft = changeSlideLeft;
