import { test, expect, describe } from 'vitest'

import sum from './sum'


describe('group #1', () => {
  test('Addition', () => {
    expect(sum(1, 4)).toBe(5)
  })
})

