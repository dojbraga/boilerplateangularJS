angular.module('main')
.component('about', {
  template:  '<h3>Its the UI-Router<br>Hello Solar System app!</h3>'
})
.config(function($stateProvider) {
    $stateProvider.state(    
      { 
        name: 'about', 
        url: '/about', 
        component: 'about'
      });
});