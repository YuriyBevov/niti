const btns = document.querySelectorAll('.js-open-modal-btn');
const modals = document.querySelectorAll('modal');

const onClickOpenModal = (evt) => {
    evt.stopPropagation();
    let currentModal = document.querySelector("." + evt.target.getAttribute("data-id"));
    currentModal.classList.add('opened');
    const modalContent = currentModal.querySelector('.modal__wrapper');

    btns.forEach(btn => {
        btn.removeEventListener('click', onClickOpenModal)
    })

    let closeBtn = currentModal.querySelector('.js-modal__close');

    const onClickCloseModal = () => {
        currentModal.classList.remove('opened');
        removeEventListeners();
    }

    const onTouchCloseModal = (evt) => {
        if(!modalContent.contains( evt.target )) {
            currentModal.classList.remove('opened')
            removeEventListeners();
        }
    }

    const onEscCloseModal = (evt) => {
        console.log('qwer',evt.key)

        if(evt.key === 'Escape') {
            currentModal.classList.remove('opened')
            removeEventListeners();
        }
    }

    const removeEventListeners = () => {
        closeBtn.removeEventListener('click', onClickCloseModal)
        document.removeEventListener('click', onTouchCloseModal)
        document.removeEventListener('keydown', onEscCloseModal)

        btns.forEach(btn => {
            btn.addEventListener('click', onClickOpenModal)
        })
    };

    closeBtn.addEventListener('click', onClickCloseModal)
    document.addEventListener('click', onTouchCloseModal)
    document.addEventListener('keydown', onEscCloseModal)
}

btns.forEach(btn => {
    btn.addEventListener('click', onClickOpenModal)
})