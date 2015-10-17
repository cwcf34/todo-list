angular.module('todo', [])

.controller('ToDoCtrl', ['$scope', function($scope) {
    $scope.tasklist = []; //Array to hold all the tasks
    $scope.priority = 'normal'; //Sets priority default
    $scope.count = 0;

    //Used to add a task
    $scope.addTask = function() {
    if(event.keyCode == 13 && $scope.taskName) {
        $scope.tasklist.push({"name": $scope.taskName, "completed": false, "priority": $scope.priority});
        $scope.taskName = "";
        $scope.priority = 'normal';
        $scope.count++;
    }
    }

    //Used to delete a task
    $scope.deleteTask = function(index) {
      $scope.tasklist.splice(index, 1);
      $scope.count--;
    }

}]);
