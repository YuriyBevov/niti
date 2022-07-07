const addBtns = document.querySelectorAll('.js-add-item');
const removeBtns = document.querySelectorAll('.js-remove-item');
const counter = document.querySelector('.js-product-card-count');
if(counter) {
    counter.innerHTML = 1;
}

const onClickAddItem = (evt) => {
    const input = evt.currentTarget.parentNode.querySelector('input');
    let value = Number(input.value);

    value !== 99 ?
    value +=  1 : value = 99;

    counter ?
    counter.innerHTML = value : null;

    input.value = value;
}

const onClickRemoveItem = (evt) => {
    const input = evt.currentTarget.parentNode.querySelector('input');

    let value = Number(input.value);

    value !== 1 ?
    value -= 1 : value = 1;

    counter ?
    counter.innerHTML = value : null;

    input.value = value;
}

addBtns.forEach(btn => {
    btn.addEventListener('click', onClickAddItem);
})

removeBtns.forEach(btn => {
    btn.addEventListener('click', onClickRemoveItem);
})