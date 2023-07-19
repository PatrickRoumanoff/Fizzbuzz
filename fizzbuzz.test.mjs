import { describe, it } from 'node:test';
import assert from 'node:assert';

import fizzbuzz from './fizzbuzz.mjs';

describe('passing test', (t) => {
  assert.strictEqual(1, 1);
});

describe("fizzbuzz", () => {
  it('returns', () => {
    assert.ok(fizzbuzz());
  });

  //add extra requirements / test here 
  // it('returns an array', () => {
  //   assert.equal(Array.isArray(fizzbuzz()), true);
  // })

});