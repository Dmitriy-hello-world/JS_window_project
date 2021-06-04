import inputValidNum from './inputValidNum';

const modalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img > img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    inputValidNum('#width');
    inputValidNum('#height');

    function bindGetInputValue(event, element, prop) {
        element.forEach( (item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'IMG' : 
                        state[prop] = i;
                        console.log(state);
                    break;   
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            state[prop] = i == 0 ? 'Холодное' : 'Теплое';
                            element.forEach((box,j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                            console.log(state);
                        } else {
                            state[prop] = item.value;
                            console.log(state);
                        }
                    break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        console.log(state);
                    break;    
                }
            });
        });
    }

    bindGetInputValue('click', windowForm, 'form');
    bindGetInputValue('input', windowWidth, 'width');
    bindGetInputValue('input', windowHeight, 'height');
    bindGetInputValue('change', windowType, 'type');
    bindGetInputValue('change', windowProfile, 'profile');
};

export default modalState;