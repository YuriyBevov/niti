
const overlay = document.querySelector('.contacts__overlay')
const btn = document.querySelector('.contacts__btn')

const onClickRemoveOverlay = () => {
    overlay.classList.toggle('closed');
    btn.classList.toggle('opened');
}

overlay ?
btn.addEventListener('click', onClickRemoveOverlay) : null