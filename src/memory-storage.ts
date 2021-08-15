function toString(value: any): string {
  switch (value) {
    case true:
      return 'true';
    case false:
      return 'false';
    case null:
      return 'null';
    case undefined:
      return 'undefined';
  }
  switch (typeof value) {
    case 'string':
      return value;
    case 'number':
      return value.toString();
  }
  return Object.prototype.toString.call(value);
}

const nativeKeys: Record<keyof Storage, boolean> = {
  length: true,
  clear: true,
  getItem: true,
  key: true,
  removeItem: true,
  setItem: true,
};

export function createMemoryStorage(): Storage {
  const entries = new Map<string, string>();
  const storage: Storage = {
    get length() {
      return entries.size;
    },
    clear() {
      entries.clear();
    },
    getItem(key: string) {
      const value = entries.get(key);
      return value === undefined ? null : value;
    },
    key(index: number) {
      return Array.from(entries.keys())[index];
    },
    removeItem(key: string) {
      entries.delete(key);
    },
    setItem(key: string, value: string) {
      entries.set(key, toString(value));
    },
  };
  return new Proxy(storage, {
    get: (target, p, receiver) => {
      if (typeof p === 'string' && !nativeKeys[p]) {
        return storage.getItem(p);
      }
      return Reflect.get(target, p, receiver);
    },
    set: (target, p, value, receiver): boolean => {
      if (typeof p === 'string' && !nativeKeys[p]) {
        storage.setItem(p, value as any);
        return true;
      }
      return Reflect.set(target, p, value, receiver);
    },
  });
}
