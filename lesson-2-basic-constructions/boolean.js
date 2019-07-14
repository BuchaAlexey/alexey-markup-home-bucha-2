describe('Проверяет,что значение TRUE,FALSE', () => {
  assert.isTrue(value) , () => {
    expect(typeof true).toBe('boolean true');

    assert.isFalse(value) , () => {
      expect(typeof false).toBe('boolean false');
    }

    assert(value) , () => {
      expect(typeof true).toBe('проверяет что value является true в логическом контексте.');
    }
  }});
