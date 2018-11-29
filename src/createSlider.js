function createSlider() {
  const containerSlide = document.createElement('div');
  containerSlide.className = 'slider';
  containerSlide.id = 'slider';
  document.body.appendChild(containerSlide);
  const slideLeft = document.createElement('div');
  slideLeft.className = 'left';
  slideLeft.id = 'left';
  slideLeft.innerText = '⇦';
  containerSlide.appendChild(slideLeft);
  const slideRight = document.createElement('div');
  slideRight.className = 'right';
  slideRight.id = 'right';
  slideRight.innerText = '⇨';
  containerSlide.appendChild(slideRight);
  for (let i = 0; i < 4; i += 1) {
    const newSlide = document.createElement('div');
    newSlide.className = 'slide';
    newSlide.id = `slide${i}`;
    document.getElementById('slider').insertBefore(newSlide, document.getElementById('right'));
  }
}

export default createSlider;
