const modal = () => {

    function bindModal(modalTriggerSelector,modalSelector, closeCroseSelector) {
        const triggers = document.querySelectorAll(modalTriggerSelector),
              modal = document.querySelector(modalSelector),
              crose = document.querySelector(closeCroseSelector);

        triggers.forEach(item => {
            item.addEventListener('click', e => {

                if (e.target) {
                    
                    e.preventDefault();

                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }

            });
        });

        crose.addEventListener('click', () => {

            modal.style.display = 'none';
            document.body.style.overflow = '';

        });

        modal.addEventListener('click', e => {
            if(e.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    function showModalInTime() {
        setTimeout(() => {

            document.querySelector('.popup').style.display = 'block';
            document.body.style.overflow = 'hidden';
        
        }, 1000 * 60);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalInTime();

};

export default modal;