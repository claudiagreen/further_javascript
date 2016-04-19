toDoApp.controller("ToDoController", ["ToDoFactory", function(ToDoFactory) {
  var list = this;

  list.todos = [
    
  ];

  list.addToDo = function(toDoText) {
    list.todos.push(new ToDoFactory(toDoText));
  }

  list.removeToDo = function() {
    list.todos.pop();
  }
}]);
