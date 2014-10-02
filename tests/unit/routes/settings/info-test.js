import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:settings/info', 'SettingsInfoRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});
