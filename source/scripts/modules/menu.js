const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const header = document.querySelector('.header');

const onClickOpenMenu = () => {
    header.classList.toggle('js-mobile-opened')

    if(header.classList.contains('js-mobile-opened')) {
        const links = menu.querySelectorAll('a[href*="#"]')

        const onClickCloseMenu = () => {

            header.classList.remove('js-mobile-opened');
            // menu.style.display = 'none';

            links.forEach(link => {
                link.addEventListener('click', onClickCloseMenu) 
            })       
        }
        
        //menu.style.display = 'flex'

        links.forEach(link => {
            link.addEventListener('click', onClickCloseMenu)
        })
    } else {
        // menu.style.display = 'none'
    }
}

burger.addEventListener('click', onClickOpenMenu);


