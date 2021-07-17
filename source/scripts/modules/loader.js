const showPage = () => {
    document.removeEventListener("DOMContentLoaded", showPage);

    

    const hideLoader = function () {
        setTimeout(() => {
            loader.classList.add('ended')
        }, 1200)

        setTimeout(() => {
            loader.style.display ='none';
        }, 2200)
    }();
};

const loader = document.querySelector('.loader');

document.addEventListener("DOMContentLoaded", showPage);