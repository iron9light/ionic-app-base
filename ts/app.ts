/// <reference path="../typings/tsd.d.ts" />

// Ionic Starter App
module Starter {
  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  const starter = angular.module("starter", ["ionic"]);

  starter.controller([
    "$ionicPlatform",
    ($ionicPlatform: ionic.platform.IonicPlatformService) => {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        window.StatusBar.styleDefault();
      }
    }
  ]);
}