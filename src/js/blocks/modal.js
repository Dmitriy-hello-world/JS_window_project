import getScrollSize from './scroll';

const modal = () => {

    function bindModal(modalTriggerSelector,modalSelector, closeCroseSelector, notCalc = true, check = false) {
        const triggers = document.querySelectorAll(modalTriggerSelector),
              modal = document.querySelector(modalSelector),
              crose = document.querySelector(closeCroseSelector),
              popups = document.querySelectorAll('[data-popup]'),
              scroll = getScrollSize();

        function showModal(e) {
            if (e.target) {
                    
                e.preventDefault();

                popups.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;

                clearTimeout(timer);
            }
        }
        
        triggers.forEach(item => {
            item.addEventListener('click', e => {

                if(check) {
                    if (document.querySelector('#width').value != '' &&
                     document.querySelector('#height').value != '' &&
                     triggers[0].classList.contains('popup_calc_button')) {
                        showModal(e);
                    } else if ((document.querySelectorAll('.checkbox')[0].checked != false ||
                               document.querySelectorAll('.checkbox')[1].checked != false) &&
                               triggers[0].classList.contains('popup_calc_profile_button')) {
                        showModal(e);
                    } else {
                        const errorDiv = document.createElement('div');
                        errorDiv.classList.add('status');
                        errorDiv.textContent = 'Пожалуйста заполните все поля!';
                        
                        if(window.getComputedStyle(document.querySelector('.popup_calc')).display == 'block') {
                            document.querySelector('.popup_calc_content').appendChild(errorDiv);
                        } else {
                            document.querySelector('.popup_calc_profile_content').appendChild(errorDiv);
                        }
                        setTimeout(() => {errorDiv.remove();}, 2000);
                    }
                } else {
                    showModal(e);
                }
            });
        });

        crose.addEventListener('click', () => {

            popups.forEach(item => {
                item.style.display = 'none';
            });
            document.body.style.overflow = '';
            document.body.style.marginRight = '0';

        });

        modal.addEventListener('click', e => {
            if(e.target == modal && notCalc) {
                popups.forEach(item => {
                    item.style.display = 'none';
                });
                document.body.style.overflow = '';
                document.body.style.marginRight = '0';
            }
        });
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, true);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, true);

    const timer = setTimeout(() => {

        document.querySelector('.popup').style.display = 'block';
        document.body.style.overflow = 'hidden';

    }, 1000 * 60);

};

export default modal;