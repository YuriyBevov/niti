const btn = document.querySelector('.js-form-submit');
const agreement = document.querySelector('#agreement');

const onClickTurnOnBtn = (evt) => {
    evt.target.checked ?
    btn.removeAttribute('disabled') :
    btn.setAttribute('disabled', true)
}

agreement ?
agreement.addEventListener('change', onClickTurnOnBtn) : null