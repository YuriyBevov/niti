/* const adaptiveIntroBlock = () => {
    const headerHeight = document.querySelector('header').offsetHeight
    const intro = document.querySelector('.intro')
    const introHeight = intro.offsetHeight
    console.log(introHeight - headerHeight)
    
    intro.style.height = 'calc(var(--vh, 1vh) * 100) -' + (headerHeight) +  'px';
    //intro.style.height = introHeight - headerHeight + 'px';
    document.querySelector('main').style.marginTop = headerHeight + 'px';
}

export { adaptiveIntroBlock };*/