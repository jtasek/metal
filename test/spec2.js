import test from 'tape';

//`equal`, `deepEqual`, `pass` & `fail` are my primary go-to assertions
test('A passing test from second file', (assert) => {

  assert.pass('This test will pass.');

  assert.end();
});