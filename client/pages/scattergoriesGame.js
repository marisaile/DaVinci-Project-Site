var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import moment from 'moment';

var letters = 'ABCDEFGHIJKLMNOPRSTW';
var startsWith = letters[Math.floor(Math.random() * letters.length)];
var points = 0;
var secondsRemaining = 60;
var letter = startsWith.toString();
var regex = new RegExp('\\b(' + letter + ')\\w+', 'gi');

var app = {
  init: function(){
    $('#gameInstructions').modal();
    app.render();
  },
  render: function(){
    $('#scattergoriesTimer').html(secondsRemaining);
    $('.roll-die').click(function(){
      $('.letter-is').html('Your letter is' + '&nbsp &nbsp' + startsWith);
      var countdown = setInterval(function(){
        secondsRemaining--;
        var secondsRemainingText = secondsRemaining.toString();
        if (secondsRemaining >= 0) {
          $('#scattergoriesTimer').html('Time Remaining' + ' ' + secondsRemainingText);
        } else {
          clearInterval(countdown);
          $('#scattergoriesTimer').html('Time\'s Up!');
          app.scoreGame();
        }
      }, 1000);
    });
  },
  scoreGame: function(){
    $('input[class=answer').each(function(){
      var $answer = $(this).val();
      $answer = $answer.toUpperCase();
      if ($answer.match(regex)) {
        points++;
      }
    });
    $('#scattergoriesTimer').html('You got' + ' ' + points + ' ' + 'points!');
  }
};

module.exports = app; 
