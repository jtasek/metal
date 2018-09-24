describe('Test group', () => {
  const expected = 'Hello world!'
  const actual = 'Helo world.'

  it('matches if the actual string equals expected string', () => {
    expect(actual).toEqual(expected)
  })
})
