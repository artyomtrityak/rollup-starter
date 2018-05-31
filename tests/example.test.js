import assert from 'assert';
import lib from '../dist/bundle';

describe('Test example', () => {
  it('should be hello dependency', () => {
    assert.equal(lib, 'hello dependency');
  });
});
