function createSearch() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  document.body.appendChild(wrapper);

  const topSearch = document.createElement('div');
  topSearch.className = 'top_search';
  wrapper.appendChild(topSearch);

  const buttonSearch = document.createElement('div');
  buttonSearch.className = 'button';
  buttonSearch.id = 'button';
  topSearch.appendChild(buttonSearch);

  const iconSearch = document.createElement('i');
  iconSearch.className = 'fas fa-search fa-lg';
  buttonSearch.appendChild(iconSearch);

  const formSearch = document.createElement('form');
  formSearch.className = 'search_input';
  formSearch.method = 'get';
  formSearch.onsubmit = () => false;
  topSearch.appendChild(formSearch);

  const inputForm = document.createElement('input');
  inputForm.className = 'search_input';
  inputForm.id = 'search_input';
  inputForm.value = 'Search';
  inputForm.name = 'q';
  inputForm.type = 'text';
  inputForm.minlength = '3';
  inputForm.required = '';
  inputForm.onfocus = () => {
    if (inputForm.value === 'Search') {
      inputForm.value = '';
    }
  };
  inputForm.onblur = () => {
    if (inputForm.value === '') {
      inputForm.value = 'Search';
    }
  };
  formSearch.appendChild(inputForm);
}

export default createSearch;
