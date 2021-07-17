const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const header = document.querySelector('.header');
const main = document.querySelector('main');

const onClickOpenMenu = () => {
    header.classList.toggle('js-mobile-opened')
    burger.classList.toggle('opened')

    if(header.classList.contains('js-mobile-opened')) {
        const headerHeight = document.querySelector('header').offsetHeight
        // main.style.marginTop = headerHeight + 'px';
        const links = menu.querySelectorAll('a[href*="#"]')

        const onClickCloseMenu = () => {
            header.classList.remove('js-mobile-opened');
            burger.classList.remove('opened')

            links.forEach(link => {
                link.addEventListener('click', onClickCloseMenu) 
            })       
        }

        links.forEach(link => {
            link.addEventListener('click', onClickCloseMenu)
        })
    } else {
        // main.style.marginTop = 0 + 'px';
    }
}

burger.addEventListener('click', onClickOpenMenu);

/*window.addEventListener('resize', () => {
    if(window.innerWidth > 767) {
        main.style.marginTop = 0 + 'px'
        if(header.classList.contains('js-mobile-opened')) {
            header.classList.remove('js-mobile-opened');
        }
    }
}) */


