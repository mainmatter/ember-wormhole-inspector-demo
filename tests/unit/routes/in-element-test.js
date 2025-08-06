import { module, test } from 'qunit';
import { setupTest } from 'ember-wormhole-inspector-demo/tests/helpers';

module('Unit | Route | in-element', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:in-element');
    assert.ok(route);
  });
});
