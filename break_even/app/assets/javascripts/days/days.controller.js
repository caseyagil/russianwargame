"use strict";

(function(){
  angular
  .module("days")
  .controller("DayIndexController", [
    DayIndexControllerFunction
  ]);

  function DayIndexControllerFunction(){
    this.days = [
    ]
  }
}());
