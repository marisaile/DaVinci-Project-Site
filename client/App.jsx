
import $ from 'jquery';
import 'styles/main.scss';

import mainPage from 'pages/mainPage';
import writingPrompts from 'pages/writingPrompts';
import jocPage from 'pages/jocPage';
import TodoListView from 'pages/todoReact/todoListView';
import funnySquares from 'pages/funnySquares';
import photoSearch from 'pages/photoSearch';
import game from 'pages/breakout';
import scattergories from 'pages/scattergoriesGame';
import d3aptitude from 'pages/D3aptitudeResult';
import sampleTests from 'pages/jocSampleTests';
import d3 from 'pages/d3';

$(function() {

  mainPage.init();

  var url = window.location.pathname;

  switch (url) {
    
    case '/pages/writingPrompts.html':
      writingPrompts.init();
    break; 
    case '/pages/breakout.html':
      game.init();
    break;
    case '/pages/jocPage.html':
      jocPage.init();
    break;
    case '/pages/todo.html':
      var todoListView = new TodoListView(); 
    break;
    // case '/pages/genericTimer.html':
    //   timer.init();
    // break;
    case '/pages/photoSearch.html':
      photoSearch.init(); 
    break;
    case '/pages/jocSampleTests.html':
      sampleTests.init();
    break;
    case '/pages/scattergoriesGame.html':
      scattergories.init();
    break;
    case '/pages/d3aptitudeResult.html':
      d3aptitude.init();
    break;
    case '/pages/d3.html': 
      d3.init();
    break;
    default: break;
  }
});
