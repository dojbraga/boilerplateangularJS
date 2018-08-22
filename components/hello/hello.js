angular.module('main')
.component('hello', {
  template:  '<h3>{{$ctrl.greeting}} solar sytem!</h3>' +
             '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',
             
  controller: 'helloCtrl'
})
.config(function($stateProvider) {
  $stateProvider.state(    
    { 
      name: 'hello', 
      url: '/hello', 
      component: 'hello'
    });
});