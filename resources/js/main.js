"use strict";
(function ($) {
    $('.sidebar-button svg').click((e) => {
        e.target.closest('.wrapper').classList.toggle('sidebar-open');
    });

    $('.sidebar-toggle').click((e) => {
        e.target.closest('.wrapper').classList.toggle('sidebar-open');
    });

    $('.sidebar-dropdown-toggle').click((e) => {
        e.preventDefault();
        e.target.closest('li').classList.toggle('opened');
    });
})(window.jQuery)
