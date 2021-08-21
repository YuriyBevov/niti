const minicartLink = document.querySelector('.js-show-minicart');
const minicart = document.querySelector('.minicart');

const onMouseOutHideMiniCart = () => {
    minicartLink.removeEventListener('mouseout', onMouseOutHideMiniCart);
    minicart.classList.remove('js-minicart-showed');
    minicartLink.addEventListener('mouseover', onMouseOverShowMiniCart);
}

const onMouseOverShowMiniCart = () => {
    minicartLink.removeEventListener('mouseover', onMouseOverShowMiniCart);
    minicart.classList.add('js-minicart-showed');
    minicartLink.addEventListener('mouseout', onMouseOutHideMiniCart);
}

minicartLink.addEventListener('mouseover', onMouseOverShowMiniCart);