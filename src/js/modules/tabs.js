const tabs = () => {
    function bindTabs(btnSelector) {
        const btns = document.querySelectorAll(btnSelector);
        const contents = document.querySelectorAll('[data-tab]');


        btns.forEach(btn => {
            const id = `.${btn.id}`;
            const content = document.querySelector(id);


            btn.addEventListener('click', (e) => {
                e.preventDefault();

                const btns = document.querySelectorAll(btnSelector);


                contents.forEach(item => {
                    item.style.display = 'none';
                });

                btns.forEach(item => {
                    item.classList.remove('after_click');
                });

                btn.classList.add('after_click');


                content.style.display = "block";
            });

        });

    }

    bindTabs('.no_click');
};

export default tabs;