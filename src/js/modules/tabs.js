const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block';

        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (
            target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;
















// const tabs = () => {
//     function bindTabs(btnSelector) {
//         const btns = document.querySelectorAll(btnSelector);
//         const contents = document.querySelectorAll('[data-tab]');


//         btns.forEach(btn => {
//             const id = `.${btn.id}`;
//             const content = document.querySelector(id);


//             btn.addEventListener('click', (e) => {
//                 e.preventDefault();

//                 const btns = document.querySelectorAll(btnSelector);


//                 contents.forEach(item => {
//                     item.style.display = 'none';
//                 });

//                 btns.forEach(item => {
//                     item.classList.remove('after_click');
//                 });

//                 btn.classList.add('after_click');


//                 content.style.display = "block";
//             });

//         });

//     }

//     bindTabs('.no_click');
// };

// export default tabs;