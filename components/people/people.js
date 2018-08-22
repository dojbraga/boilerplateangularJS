angular.module('main').component('people', {
  bindings: { people: '<' },

  template: '<h3>Some people:</h3>' +
    '<ul>' +
    '  <li ng-repeat="person in $ctrl.people">' +
    '    <a ui-sref="person({ personId: person.id })">' +
    '      {{person.name}}' +
    '    </a>' +
    '  </li>' +
    '</ul>'
})
  .config(function ($stateProvider) {
    $stateProvider.state(
      {
        name: 'people',
        url: '/people',
        component: 'people',
        // This state defines a 'people' resolve
        // It delegates to the PeopleService to HTTP fetch (async)
        // The people component receives this via its `bindings: `
        resolve: {
          people: function (PeopleService) {
            return PeopleService.getAllPeople();
          }
        }
      });
  });