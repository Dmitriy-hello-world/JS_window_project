import getScrollSize from './scroll';

const images = () => {
    const wrapper = document.querySelector('.works'),
          popupDiv = document.createElement('div'),
          popupImg = document.createElement('img'),
          scroll = getScrollSize();


    popupDiv.classList.add('popup_img');
    wrapper.appendChild(popupDiv);
    
    popupDiv.style.justifyContent = 'center';
    popupDiv.style.alignItems = 'center';
    popupDiv.style.display = 'none';
    popupImg.style.maxWidth = '90%';

    popupDiv.appendChild(popupImg);

    wrapper.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;
        
        if(target && target.classList.contains('preview')) {
            popupDiv.style.display = 'flex';
            const link = target.parentNode.getAttribute('href');
            popupImg.setAttribute('src', link); 
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }

        if (target && target.matches('div.popup_img')) {
            popupDiv.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0`;
        }
    });
};

export default images;