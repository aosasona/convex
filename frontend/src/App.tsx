import type { Component } from "solid-js";
import { A } from "@solidjs/router";

import logo from "./logo.svg";

const App: Component = () => {
  return (
    <div class="flex flex-col justify-center items-center w-screen h-screen text-center bg-gray-900">
      <img src={logo} class="mb-2 w-64" alt="logo" />
      <p class="my-4 text-xl text-gray-300">
        Edit <code class="py-0.5 px-1.5 mx-0.5 font-mono text-lg bg-gray-700 rounded-md">src/App.tsx</code> and save to reload.
      </p>
      <a class="mb-2 text-indigo-300 underline" href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">
        Learn Solid
      </a>
      <A href="/hello" class="text-indigo-300 underline">
        Hello World
      </A>
    </div>
  );
};

export default App;
