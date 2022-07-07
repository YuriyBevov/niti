let title = document.querySelector('.sidebar__title');
let list = document.querySelector('.sidebar__categories-list');

if(title && list) {
    let expandCategoryTitle = () => {
        !title.classList.contains('opened') ?
        title.classList.add('opened') : null;

        !list.classList.contains('expanded') ?
        list.classList.add('expanded') : null;
    }

    let collapseCategoryTitle = () => {
        title.classList.contains('opened') ?
        title.classList.remove('opened') : null;

        list.classList.contains('expanded') ?
        list.classList.remove('expanded') : null;
    }

    /*let onResizeCollapseCategory = () => {
        if(window.innerWidth > 660) {
			expandCategoryTitle();
        } else {
            collapseCategoryTitle();
        }
    }*/

    window.innerWidth > 660 ?
    expandCategoryTitle() : collapseCategoryTitle() ;

    //window.addEventListener('resize', onResizeCollapseCategory);

    let active = document.querySelector('.sidebar__categories-item > a.active'); 

    if(active) {
        let innerList = active.nextElementSibling;
        if(innerList) {
            innerList.classList.add('expanded')
        }
        let inners = document.querySelectorAll('.sidebar__categories-inner');
        inners.forEach(inner => {
            inner.contains(active) ?
            inner.classList.add('expanded') : null;
        })
    }
}