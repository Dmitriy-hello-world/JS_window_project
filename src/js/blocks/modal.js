const modal = () => {

    function bindModal(modalTriggerSelector,modalSelector, closeCroseSelector, notCalc = true) {
        const triggers = document.querySelectorAll(modalTriggerSelector),
              modal = document.querySelector(modalSelector),
              crose = document.querySelector(closeCroseSelector),
              popups = document.querySelectorAll('[data-popup]');

        triggers.forEach(item => {
            item.addEventListener('click', e => {

                if (e.target) {
                    
                    e.preventDefault();

                    popups.forEach(item => {
                        item.style.display = 'none';
                    });

                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';

                    clearTimeout(timer);
                }

            });
        });

        crose.addEventListener('click', () => {

            popups.forEach(item => {
                item.style.display = 'none';
            });
            document.body.style.overflow = '';

        });

        modal.addEventListener('click', e => {
            if(e.target == modal && notCalc) {
                popups.forEach(item => {
                    item.style.display = 'none';
                });
                document.body.style.overflow = '';
            }
        });
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    const timer = setTimeout(() => {

        document.querySelector('.popup').style.display = 'block';
        document.body.style.overflow = 'hidden';

    }, 1000 * 60);

};

export default modal;