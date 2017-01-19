
import $ from 'jquery';
import _ from 'lodash';

var interval; 
var splitCount = 0;
var cumCount = 0;
var timerRunning = false; 
var splitTimes = [];
var points;
var pointsArray = [];

var app = {
  init: function(){
    app.render();
  }, 
  render: function(){
    app.bindClickEvents(); 
  },
  startTimer: function(){
    var $startStop = $('.start-stop-button');
    $startStop.on('click', function(){
      if ($startStop.html() === 'Start') {
        if (timerRunning === false) {
          timerRunning = true;
        }
        interval = setInterval(function(){
          splitCount++;
          var splitCountText = splitCount.toString();
          if (splitCountText.length < 2) {
            splitCountText = '.0' + splitCount;
          } else if (splitCountText.length > 2) {
            splitCountText = splitCountText.slice(0, 1) + '.' + splitCountText.slice(1, 3);
          } else {
            splitCountText = '.' + splitCount;
          }
          $('.split-counter').html('Individual Time: ' + splitCountText);
          cumCount++;
          var cumText = cumCount.toString();
          if (cumText.length < 2) {
            cumText = '.0' + cumText;
          } else if (cumText.length > 2) {
            cumText = cumText.slice(0, 1) + '.' + cumText.slice(1, 3);
          } else {
            cumText = '.' + cumText;
          }
          $('.cum-counter').html('Cumulative Time: ' + cumText);
        }, 600);
        $startStop.html('Stop');
        $startStop.css({'background-color': '#19284B'});
      } else {
        app.stopTimer();
        $startStop.html('Start');
        $startStop.css({'background-color': '#17B20A'});
      }
    });   
  },
  stopTimer: function(){
    interval = clearInterval(interval);
    if (timerRunning === true) {
      timerRunning = false;
    }
    splitTimes.push(splitCount);
    splitCount = 0;
  },
  splitTimer: function(){  
    var $split = $('.misc-button');
    $split.on('click', function(){
      splitTimes.push(splitCount);
      splitCount = 0;
    });     
  },
  resetTimer: function(){
    var $reset = $('.reset-button');
    $reset.on('click', function(){
      if (timerRunning === false) {
        app.clearEverything(); 
      } 
    });   
  },
  clearEverything: function(){
    splitTimes = [];
    pointsArray = [];
    splitCount = 0;
    cumCount = 0;

    $('.time-col').html('<h1>Times</h1');
    $('.points-col').html('<h1>Points</h1>');
    $('.split-counter').html('Individual Time: ' + '.0' + splitCount);
    $('.cum-counter').html('Cumulative Time: ' + '.0' + cumCount);
    $('.score').html('');
  },
  bindClickEvents: function(){
    app.startTimer();
    app.splitTimer();
    app.resetTimer();
  }
};
module.exports = app;


// var startTime; 
// var interval; 
// var minutes;
// var hundredths;
// var endTime;
// var timeDifference;  
// var splitTimes = [0];

// var app = {
//   init: function(){
//     app.render();
//   },
//   render: function(){
//     var updateTimer = function() {
//       endTime = new Date();
//       timeDifference = (endTime - startTime) / 1000;
//       minutes = Math.floor(timeDifference / 60);
//       hundredths = Math.floor(timeDifference / 0.6) % 100;
//       if (minutes < 10) {
//         minutes = '0' + minutes; //converting to a string
//       }
//       if (hundredths < 10) { 
//         hundredths = '0' + hundredths; //converting to a string
//       }
//       endTime = (minutes + '.' + hundredths);
//       $('.counter').html(endTime);
//     };
//     var startTimer = function(){
//       startTime = new Date();
//       interval = setInterval(updateTimer, 100);
//     };
//     var stopTimer = function(){
//       interval = clearInterval(interval);
//     };
//     var splitTimer = function(){
//       var cumTime = Math.round(endTime * 100);
//       $('.timer-container .cum-time').append('<br />' + cumTime);      
//       splitTimes.push(cumTime); 
//       var indTime = Math.round(splitTimes[1] - splitTimes[0]);
//       $('.timer-container .ind-time').append('<br />' + indTime);   
//       splitTimes.splice(0, 1);
//     };
//     var resetTimer = function(){
//       $('.counter').html('00' + '.' + '00' );
//       $('.timer-container .cum-time').html( 'Cumulative Time' + ' ' );
//       $('.timer-container .ind-time').html( 'Individual Time' + ' ' );
//     };
//     $('.timer-container .start-stop-button').on('click', function(){
//       if ($('.start-stop-button').html() === 'start') {
//         startTimer();
//         $('.start-stop-button').html('stop');
//       } else {
//         stopTimer();
//         $('.start-stop-button').html('start');
//       }
//       splitTimes = [0];
//     }); 
//     $('.timer-container .split-button').on('click', splitTimer);
//     $('.timer-container .reset-button').on('click', resetTimer);
//   }
// };

// module.exports = app;


     