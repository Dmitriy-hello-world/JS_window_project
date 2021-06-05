import './slider';
import modal from './blocks/modal';
import tabs from './blocks/tabs';
import form from './blocks/form';
import modalState from './blocks/modalState';
import timer from './blocks/timer';

window.addEventListener('DOMContentLoaded', () => {

    let state = {
        form: 0,
        type: 'tree'
    }; 

    const deadline = '2021-06-06';

    modalState(state);
    modal();
    tabs({
        display: 'block',
        tabsSelector: '.glazing_block',
        contentsSelector: '.glazing_content',
        headerSelector: '.glazing_slider',
        activeClass: 'active', 
        linkSelector: '.glazing_block a'
    });
    tabs({
        display: 'block',
        tabsSelector: '.no_click',
        contentsSelector: '.decoration_content > div > div',
        headerSelector: '.decoration_slider',
        activeClass: 'after_click', 
        linkSelector: false
    });
    tabs({
        display: 'inline',
        tabsSelector: '.balcon_icons_img',
        contentsSelector: '.big_img > img',
        headerSelector: '.balcon_icons',
        activeClass: 'do_image_more', 
        linkSelector: false
    });
    form(state);
    timer('#timer', deadline);
});