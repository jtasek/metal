import test from 'tape';

//`equal`, `deepEqual`, `pass` & `fail` are my primary go-to assertions
test('A passing test 1', (assert) => {

  assert.pass('This test will pass.');

  assert.end();
});

test('A passing test 2', (assert) => {

  assert.fail('This test will fail.');

  assert.end();
});

test('A passing test 3', (assert) => {
    const expected = 'something to test';
    const actual = 'sonething to test';

    assert.equal(actual, expected,
    'Given two mismatched values, .equal() should produce a nice bug report');

    assert.end();
});

test('A passing test 4', (assert) => {

  assert.deepEqual('This test will fail.');

  assert.end();
});