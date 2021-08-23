const fields = document.querySelectorAll('[data-val="required"]')
const btn = document.querySelector('.js-form-submit');
const form = document.querySelector('#msOrder');

const onClickCheckValidity = (evt) => {
    evt.preventDefault()
    let isValid = []
    fields.forEach(field => {
        if(!field.value) {
            isValid.push('false')
        }
    })

    isValid.length ?
    console.log('not valid') : 
    form.submit();
}

btn.addEventListener('click', onClickCheckValidity)