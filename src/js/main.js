import modals from './modules/modals';
import slider from './modules/slider';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';


    modals();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms();

});