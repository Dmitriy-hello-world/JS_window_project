import inputValidNum from './inputValidNum';

const forms = (state) => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          message = {
              loading: 'Отправка..',
              succes: 'Все готово, ваши данные отправлены!',
              fail: 'Упс.. попробуйте еще раз'
          };

    const postData = async (url,data) => {

        const result = await fetch(url, {
            method: 'POST',
            body: data
        });

        document.querySelector('.status').textContent = message.loading;

        return await result.text();  
    }; 
    
    inputValidNum('input[name="user_phone"]');

    let isState = false;

    forms.forEach( item => {
        item.addEventListener('submit', e => {

            e.preventDefault();

            const messageBlock = document.createElement('div');
            messageBlock.classList.add('status');
            item.appendChild(messageBlock);

            let formData = new FormData(item);

            if(item.getAttribute('data-calc') == 'end') {
                isState = true;
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
            .then(res => {
                console.log(res);

                messageBlock.textContent = message.succes;
            })
            .catch(() => {messageBlock.textContent = message.fail;})
            .finally(() => {
                inputs.forEach(item => {
                    item.value = '';
                });

                if (isState) {
                    document.querySelector('#height').value = '';
                    document.querySelector('#width').value = '';
                    document.querySelectorAll('.checkbox').forEach( item => {
                        item.checked = false;
                    });

                    setTimeout(() => {
                        document.querySelector('.popup_calc_end').style.display = 'none';
                        document.body.style.overflow = '';
                    }, 2000);
                }

                setTimeout(() => {messageBlock.remove();},4000);
                console.log(state);
            });
        });
    });    
};

export default forms;