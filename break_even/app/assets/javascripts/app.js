
"use strict";

(function(){
  angular
  .module("breakEven", [
    "ui.router",
    "ngResource",
    "exercises",
    "days"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  function RouterFunction($stateProvider){
    $stateProvider
    .state("welcome",{
      url: "/",
      templateUrl: "ngviews/home.html",
    })
    .state("exerciseIndex", {
      url: "/exercises",
      templateUrl: "ngviews/exercises.html",
      controller: "ExerciseIndexController",
      controllerAs: "ExerciseIndexViewModel"
    })

    .state("daysIndex", {
      url: "/days",
      templateUrl: "ngviews/myWeek.html",
      controller: "DayIndexController",
      controllerAs: "DayIndexViewModel"
    })

    .state("dayShow", {
      url: "/day/:id",
      templateUrl: "ngviews/day.html",
      controller: "DayShowController",
      controllerAs: "DayShowViewModel"
    })
    .state("dayEdit", {
      url: "/day/:id/edit",
      templateUrl: "ngviews/day/edit.html",
      controller: "DayEditController",
      controllerAs: "DayEditViewModel"
    })
  } // closes Router Function
}());
