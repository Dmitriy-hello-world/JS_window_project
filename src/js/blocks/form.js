const forms = () => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          numberInputs = document.querySelectorAll('input[name="user_phone"]'),
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
    
    numberInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    forms.forEach( item => {
        item.addEventListener('submit', e => {

            e.preventDefault();

            const messageBlock = document.createElement('div');
            messageBlock.classList.add('status');
            item.appendChild(messageBlock);

            const formData = new FormData(item);

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

                setTimeout(() => {messageBlock.remove();},4000);
            });
        });
    });      
};

export default forms;