
const overlay = document.querySelector('.contacts__overlay')
console.log(overlay)

const onClickRemoveOverlay = () => {
    overlay.style.display = 'none'
}

overlay.addEventListener('click', onClickRemoveOverlay)


console.log('overlay')