function getPosY(el) {
    return el.getBoundingClientRect().top;
}
  
function getElCurHeight(el) {
    return el.clientHeight;
}

export { getPosY, getElCurHeight };
