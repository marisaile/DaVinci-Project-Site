var $ = require('jquery');

window.$ = $;
require('jquery.easing');

import landingPage from 'templates/landingPage.html';

var app = {
  init: function(){
    $('.portfolio-main').html(landingPage);
    app.render();
  },
  render: function(){   
    app.bindClickEvents();
  },  
  // scrollBio: function(){
  //   $('.bio').click(function(){
  //     $('html, body').animate({
  //       scrollTop: $('.portfolio-bio').offset().top
  //     }, 1000, 'easeInOutExpo');
  //   });
  // },
  goToWork: function(){
    $('.projects').click(function(){
      $('html, body').animate({
        scrollTop: $('.portfolio-work').offset().top
      }, 1000, 'easeInOutExpo');
    });
  }, 
  scrollToTop: function(){
    $('.back-to-top').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('.portfolio-landing').offset().top
      }, 1000, 'easeInOutExpo');
    });
  },
  bindClickEvents: function(){
    // app.scrollBio();
    app.goToWork();
    app.scrollToTop();
  }
};

module.exports = app;
