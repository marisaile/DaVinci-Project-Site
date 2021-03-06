
var $ = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import todoModel from 'pages/todoReact/todoModel';
import TodoItemView from 'pages/todoReact/todoView';
import dispatcher from 'pages/todoReact/todoDispatcher';


// Controller
var TodoControllerView = Backbone.View.extend({
  el: '.todo-container',
  model: todoModel,
  events: {
    'click .btn-add-todo': 'addTodoItem',
    'keypress .add-todo-container': 'addTodoEnter'
  },
  initialize: function(){
    this.model.fetch();
    this.model.on('change', this.render, this);
  },
  render: function(){
    // render the todo items
    var todos = this.model.get('todos');
    var $ul = this.$el.find('ul');
    $ul.html('');
    // var controller = this;
    todos.forEach(function(todo) {
      var $li = $('<li class="list-group-item row"></li>');
      $ul.append($li);
      ReactDOM.render(
        <TodoItemView data={todo} />,
        $li[0] // get original DOM node from jquery object
      );
    }); 
  },
  addTodoItem: function() {
    var $input = this.$el.find('.input-name');
    var newTitle = $input.val();
    dispatcher.addTodo(newTitle);
    $input.val('');
  },
  addTodoEnter: function(event) {
    if (event.which === 13) {
      var $input = this.$el.find('.input-name');
      var newTitle = $input.val();
      dispatcher.addTodo(newTitle);
      $input.val('');
    }
  }
});

module.exports = TodoControllerView;
