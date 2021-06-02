import './slider';
import modal from './blocks/modal';
import tabs from './blocks/tabs';
import form from './blocks/form';

window.addEventListener('DOMContentLoaded', () => {
    modal();
    tabs({
        tabsSelector: '.glazing_block',
        contentsSelector: '.glazing_content',
        headerSelector: '.glazing_slider',
        activeClass: 'active', 
        linkSelector: '.glazing_block a'
    });
    tabs({
        tabsSelector: '.no_click',
        contentsSelector: '.decoration_content > div > div',
        headerSelector: '.decoration_slider',
        activeClass: 'after_click', 
        linkSelector: false
    });
    form();
});