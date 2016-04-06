"use strict";

(function(){
  angular
  .module("exercises")
  .controller("ExerciseIndexController", [
    ExerciseIndexControllerFunction
  ]);

  function ExerciseIndexControllerFunction(){
    this.exercises = [
    ]
  }
}());
