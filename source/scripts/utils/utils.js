const changeLastItemWidth = (arr) => {
    window.innerWidth < 768 ? 
    arr[arr.length - 1].style.width = 100 + '%' : null
    
    const onResizeHandler = () => {
        if(window.innerWidth < 768 && arr.length % 2 === 1) {
            arr[arr.length - 1].style.width !== 100 + '%' ?
            arr[arr.length - 1].style.width = 100 + '%' : null
        } else {
            arr[arr.length - 1].style.width === 100 + '%' ?
            arr[arr.length - 1].style.width = 'calc(100% / 3 - 1rem)' : null
        }
    }
    
    window.addEventListener('resize', onResizeHandler);
}

export { changeLastItemWidth }