
const overlay = document.querySelector('.contacts__overlay')
const btn = document.querySelector('.contacts__btn')

const onClickRemoveOverlay = () => {
    //overlay.style.display = 'none'

    overlay.classList.toggle('closed');
}

overlay ?
btn.addEventListener('click', onClickRemoveOverlay) : null