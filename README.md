# react-use-storage-state

> React use hook for shared and persisted state

[![NPM](https://img.shields.io/npm/v/react-use-storage-state.svg)](https://www.npmjs.com/package/react-use-storage-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Imagine like recoil or redux without reducer and actions combined with localStorage.

This package provider simpler development experiment (DX) for shared state than redux. You can **update the shared state directly**, without writing verbose code to ~~obtain dispatcher, create action, dispatch action, construct new state in reducer~~.

## Features
- Auto save and restore state across page refresh
- Shared state across multiple components (realtime update)
- Familiar usage as `React.useState()`
- Auto reset state when initialState is changed
- Support any JSON-compatible data type (not just string)
- Error handling when storage permission is denied or passing non-serializable object (e.g. with cyclic reference)
- Include in-memory storage adapter [1]

**Remark**:

[1]: For state shared in the same browser tab, but isolated across different browser tab.


Demo: [https://react-use-storage-state-demo.surge.sh](https://react-use-storage-state-demo.surge.sh

## Install

```bash
## using npm
npm install react-use-storage-state

## or using yarn
yarn add react-use-storage-state

## or using pnpm
pnpm install react-use-storage-state
```

## Typescript Signature
```typescript
export default useStorageState

export function useStorageState<T>(
  key: string,
  initialState: T | (() => T),
  storageArea?: Storage // default is localStorage
): [state: T, setState: (newState: T | ((prevState: T) => T)) => void];

export function createMemoryStorage(): Storage;
```

## Usage

```tsx
import React from 'react'
import { useStorageState } from 'react-use-storage-state'

const Example = () => {
  const [state, setState] = useStorageState('counter', 1)
  function inc() {
    setState(state + 1)
  }
  return (
    <button onClick={inc}>
      {state}
    </button>
  )
}
```

Details see [DemoApp.tsx](./src/DemoApp.tsx)

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
