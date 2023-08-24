import { A } from "@solidjs/router";

export default function Hello() {
  return (
    <div class="flex flex-col justify-center items-center w-screen h-screen bg-gray-900">
      <h1 class="text-3xl font-bold text-gray-50">Hello World</h1>
      <p class="mt-1.5 text-gray-400">If you can see this, routing is working fine!</p>
      <A href="/" class="mt-3 text-indigo-300 underline">
        Go back
      </A>
    </div>
  );
}
