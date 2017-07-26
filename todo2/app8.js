var suka = angular.module('controllerExample', []);

suka.controller('SettingsController2', SettingsController2);

function SettingsController2() {

this.EditMode = false;

  this.todos = [
  "sssd111", 
  "sssd2",
  "sssd3",
  "sssd4",
  "sssd5",
  "dfgfhgh"
  ];


this.AddnewTodo = function (){
this.todos.push(this.newTodo);
this.newTodo = "";


}

this.trigerEditMode = function () {
this.EditMode = !this.EditMode;

}

this.deleteTodo = function(index){
this.todos.splice(index, 1);
}

this.consolelogg = function (){
console.log("done");


}
}
