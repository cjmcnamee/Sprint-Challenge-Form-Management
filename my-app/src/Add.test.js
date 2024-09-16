import { add } from './Add';

describe('Add', () => {
  describe('add', () => {
    it("return sum of 2 numbers", () => {
      expect(add(1, 2)).toBe(3);
    })
  })
})
