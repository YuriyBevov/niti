
const overlay = document.querySelector('.contacts__overlay')

const onClickRemoveOverlay = () => {
    overlay.style.display = 'none'
}

overlay ?
overlay.addEventListener('click', onClickRemoveOverlay) : null