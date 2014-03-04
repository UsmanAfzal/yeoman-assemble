/*global $:false */

$(document).ready(function(){

    // -----------------------------------------
    // Grid
    // -----------------------------------------

    'use strict';
    var container = document.querySelector('#container');
    var msnry = new Masonry( container, {
        // options
        columnWidth: 5,
        itemSelector: '.item',
        gutter: 20
    });


    // -----------------------------------------
    // Box hovers
    // -----------------------------------------

    $('.item').hover(function(){
        $('.itemcaption', this).stop().animate({top:'65%'},{queue:false,duration:160});
    }, function() {
        $('.itemcaption', this).stop().animate({top:'100%'},{queue:false,duration:160});
    });


    // -----------------------------------------
    // Primary nav arrow
    // -----------------------------------------
    /*
     $('.navbar-collapse .navbar-nav > li').click(function() {
     $('span', this).toggle();
     });*/
});