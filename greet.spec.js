import greet from './greet.js';

describe('greet', () => {
  it('returns a String "Hello Jane!" if called greet("Jane")', () => {
    const result = greet('Jane');
    expect(result).toBe('Hello Jane!');
  });
});
