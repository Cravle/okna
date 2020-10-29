const modals = () => {
    function showModal(modal) {

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function closeModal(modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                    showModal(modal);
                }

                //document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', (e) => {
            closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });

    }

    function showModalByTime(selector, time) {
        const modal = document.querySelector(selector);
        setTimeout(() => {
            showModal(modal);
        }, time);
    }

    //showModalByTime('.popup', 60000);
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');

};

export default modals;