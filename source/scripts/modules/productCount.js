const addBtns = document.querySelectorAll('.js-add-item');
const removeBtns = document.querySelectorAll('.js-remove-item');

const onClickAddItem = (evt) => {
    const input = evt.currentTarget.parentNode.querySelector('input');
    let value = Number(input.value);

    value !== 100 ?
    value +=  1 : value = 100;

    input.value = value;
}

const onClickRemoveItem = (evt) => {
    const input = evt.currentTarget.parentNode.querySelector('input');

    let value = Number(input.value);

    value !== 1 ?
    value -= 1 : value = 1;

    input.value = value;
}

addBtns.forEach(btn => {
    btn.addEventListener('click', onClickAddItem);
})

removeBtns.forEach(btn => {
    btn.addEventListener('click', onClickRemoveItem);
})