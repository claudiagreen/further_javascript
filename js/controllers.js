toDoApp.controller("ToDoController", function() {
  var list = this;

  list.todos = [
    { text: "Todo1", completed: false },
    { text: "Todo2", completed: true }
  ];

  list.addToDo = function(toDoText) {
    list.todos.push({ text: toDoText, completed: false });
  }

  list.removeToDo = function() {
    list.todos.pop();
  }
});
