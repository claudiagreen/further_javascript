toDoApp.controller("ToDoController", function() {
  var list = this;

  list.todos = [
    { text: "Todo1", completed: false },
    { text: "Todo2", completed: true }
  ];
});
