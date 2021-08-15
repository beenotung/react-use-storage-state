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
