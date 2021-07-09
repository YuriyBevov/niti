const adaptiveIntroBlock = () => {
    const headerHeight = document.querySelector('header').offsetHeight
    const introImg = document.querySelectorAll('.swiper-slide img')
    introImg.forEach(img => {
        img.style.height = 'calc(100vh - ' + (headerHeight) +  'px)';
    })
    document.querySelector('main').style.marginTop = headerHeight + 'px';
}

export { adaptiveIntroBlock };