import React, { useState } from 'react';
import { useStorageState } from './use-storage-state';
import './DemoApp.css';
import { createMemoryStorage } from './memory-storage';

function openNewTab() {
  window.open(window.location.href, '_blank');
}

function DemoApp() {
  return (
    <>
      <h1>
        <code>react-use-storage-state</code> Demo
      </h1>
      <p>
        <a href="https://www.npmjs.com/package/react-use-storage-state">
          <img
            src="https://img.shields.io/npm/v/react-use-storage-state.svg"
            alt="npm package version badge"
          ></img>
        </a>{' '}
        <a href="https://github.com/beenotung/react-use-storage-state">
          <svg
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
      </p>
      <p>
        <button onClick={openNewTab}>Open New Tab</button>
      </p>
      <br />
      <table>
        <tbody>
          <tr>
            <td>
              <UseStateDemo />
            </td>
            <td>
              <UseStateDemo />
            </td>
          </tr>
          <tr>
            <td>
              <UseStorageStateDemo />
            </td>
            <td>
              <UseStorageStateDemo />
            </td>
          </tr>
          <tr>
            <td>
              <UseMemoryStorageStateDemo />
            </td>
            <td>
              <UseMemoryStorageStateDemo />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function inc(x: number) {
  return x + 1;
}

function UseStateDemo() {
  const [state, setState] = useState(1);
  return (
    <>
      <code>React.useState(1)</code>
      <button onClick={() => setState(inc)}>{state}</button>
    </>
  );
}

function UseStorageStateDemo() {
  const [state, setState] = useStorageState('counter', 1);
  return (
    <>
      <code>useStorageState('counter', 1)</code>
      <button onClick={() => setState(inc)}>{state}</button>
    </>
  );
}

const memoryStorage = createMemoryStorage();

function UseMemoryStorageStateDemo() {
  const [state, setState] = useStorageState('counter', 1, memoryStorage);
  return (
    <>
      <code>useStorageState('counter', 1, memoryStorage)</code>
      <button onClick={() => setState(inc)}>{state}</button>
    </>
  );
}

export default DemoApp;
