const btns = document.querySelectorAll('.js-expanded-btn');

const onClickExpandItem = (evt) => {
    const expItem = evt.target.parentNode.nextElementSibling;
    evt.target.parentNode.classList.toggle('opened');
    expItem.classList.toggle('expanded');
}

btns.forEach(btn => btn.addEventListener('click', onClickExpandItem))