
import $ from 'jQuery';
import _ from 'underscore';
import Handlebars from 'handlebars';
import rawTemplate from 'templates/funnySquare.html';

var template;

var app = {
  init: function(){
    template = Handlebars.compile(rawTemplate);
    app.render();
  },

  render: function() {
    // display 6 squares  
    var numberOfSquares = 6;
    var renderedHtml = '';
    _.times(numberOfSquares, function(index){
      renderedHtml += template({ id: index });
    });
    $('h1').after(renderedHtml);
  }
};
module.exports = app;
