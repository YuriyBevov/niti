const colorpickerSelect = document.querySelector('#colorpicker');

if(colorpickerSelect) {
    const options = document.querySelectorAll('#colorpicker option');
    const colorpicker = document.querySelector('.colorpicker');
    const colorsContainer = document.querySelector('.colorpicker__wrapper');
    const currentColor = document.querySelector('.js-colorpicker-opener');
    let colors = [];

    options.forEach(option => {
        colors.push(option.value);
    })

    currentColor.style.background = colors[0];

    colors.forEach((clr,i) => {
        let colorpickerItem = document.createElement('div');
        colorpickerItem.classList.add('colorpicker__item');
        colorpickerItem.setAttribute('style', 'background-color:' + clr);
        colorpickerItem.setAttribute('data-color', i);
        colorsContainer.appendChild(colorpickerItem)
    })

    colorpickerItems = document.querySelectorAll('.colorpicker__item');

    const onClickSetColor = (evt) => {    
        const index  = evt.target.getAttribute('data-color');
        colorpickerSelect.value = colors[index];
        currentColor.style.background = colors[index];

        colorpicker.classList.add('js-closed')

        colorpickerItems.forEach(item => {
            item.removeEventListener('click', onClickSetColor);
        })

        colorpickerOpener.addEventListener('click', onClickOpenColorpicker);
    }

    const onClickOpenColorpicker = (evt) => {
        evt.preventDefault();
        colorpicker.classList.remove('js-closed');
        colorpickerOpener.removeEventListener('click', onClickOpenColorpicker);

        colorpickerItems.forEach(item => {
            item.addEventListener('click', onClickSetColor);
        })

    }

    const colorpickerOpener = document.querySelector('.js-colorpicker-opener');

    colorpickerOpener.addEventListener('click', onClickOpenColorpicker);
}



