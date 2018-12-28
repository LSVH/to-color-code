import toHexColorCode from './';

const assert = require('assert');

describe('toHexColorCode', () => {
  it('input 3 character hex code without hash character', () => {
    assert.equal(toHexColorCode('ABC'), '#AABBCC');
  });
  
  it ('input 3 character hex code with hash character', () => {
    assert.equal(toHexColorCode('#ABC'), '#AABBCC');
  });

  it ('input 6 character hex code without hash character', () => {
    assert.equal(toHexColorCode('ABCABC'), '#ABCABC');
  });

  it ('input 6 character hex code with hash character', () => {
    assert.equal(toHexColorCode('#ABCABC'), '#ABCABC');
  });

  it ('input an invalid hex color code with hash character', () => {
    assert.equal(toHexColorCode('#INVALID'), '');
  });

  it ('input an invalid hex color code without hash character', () => {
    assert.equal(toHexColorCode('INVALID'), '');
  });
})
