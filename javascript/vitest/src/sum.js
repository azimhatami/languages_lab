export function sum(...args) {
  return args.reduce((a, b) => a + b, 0)
}


// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest
  describe('Group #1', () => {
    it('add', () => {
      expect(sum()).toBe(0)
      expect(sum(1)).toBe(1)
      expect(sum(1, 2, 3)).toBe(6)
    })
  })
}

