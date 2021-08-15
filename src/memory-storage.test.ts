import { createMemoryStorage } from './memory-storage';

describe('MemoryStorage', () => {
  let storage: Storage;
  it('new instance', () => {
    storage = createMemoryStorage();
  });
  it('clear', () => {
    storage.clear();
  });
  it('setItem', () => {
    storage.setItem('a', 1 as any);
    storage['b'] = 2;
    storage.c = 3;
  });
  it('key', () => {
    expect(storage.key(0)).toBe('a');
    expect(storage.key(1)).toBe('b');
    expect(storage.key(2)).toBe('c');
  });
  it('getItem', () => {
    expect(storage.getItem('a')).toBe('1');
    expect(storage['b']).toBe('2');
    expect(storage.c).toBe('3');
  });
  it('removeItem', () => {
    storage.removeItem('a');
    expect(storage.getItem('a')).toBe(null);
  });
  it('length', () => {
    expect(storage.length).toBe(2);
  });
  it('reset', () => {
    storage.clear();
    expect(storage.length).toBe(0);
  });
});
