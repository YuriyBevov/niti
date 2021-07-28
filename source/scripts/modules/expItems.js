const btns = document.querySelectorAll('.js-expanded-btn');

const expItems = document.querySelectorAll('.js-expanded-list');

const onClickExpandItem = (evt) => {
    const expItem = evt.target.nextElementSibling;
    evt.target.classList.toggle('opened');
    expItem.classList.toggle('expanded');
}

btns.forEach(btn => btn.addEventListener('click', onClickExpandItem))