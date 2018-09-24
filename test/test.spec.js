test('matches if the actual string does not equal expected string', () => {
  const expected = 'Hello world!'
  const actual = 'Helo world.'

  expect(actual).not.toBe(expected)
})
