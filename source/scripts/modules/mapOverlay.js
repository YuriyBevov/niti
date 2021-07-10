
const overlay = document.querySelector('.contacts__overlay')

const onClickRemoveOverlay = () => {
    overlay.style.display = 'none'
}

overlay.addEventListener('click', onClickRemoveOverlay)