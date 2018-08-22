angular.module('main').controller('helloCtrl', function () {
    this.greeting = 'hello';

    this.toggleGreeting = function () {
        this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    }
});