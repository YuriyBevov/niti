const searchBtns = document.querySelectorAll('.search button');

const onClickHandler = (evt) => {
    const searchField = evt.currentTarget.parentNode;
    const input = searchField.querySelector('input')
    if(input.value.trim() === '') {
        evt.preventDefault();
        input.focus();
    }
}

if(searchBtns) {
    searchBtns.forEach(btn => {
        btn.addEventListener('click', onClickHandler) 
    });
}