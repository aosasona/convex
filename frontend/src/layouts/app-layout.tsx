import { ParentProps, Show, children, createResource } from "solid-js";
import { GetRoot } from "../wailsjs/go/filesystem/Filesystem";
import { Search } from "lucide-solid";

export default function AppLayout(props: ParentProps) {
  const c = children(() => props.children);
  const [root] = createResource(GetRoot);

  return (
    <main class="flex">
      <aside class="pt-12 w-3/12 border-r bg-background-secondary/40 border-r-accent">
        <div class="flex flex-col w-full">
          <div class="flex items-center mx-auto w-11/12 h-9 rounded-lg border-[2px] border-convex-800">
            <div class="px-2">
              <Search size={16} class="text-convex-600" />
            </div>
            <input class="text-sm bg-transparent focus:outline-none" />
          </div>
        </div>
      </aside>
      <div class="relative w-full h-screen bg-background">
        <div class="fixed top-0 py-3 px-3 w-full border-b-2 backdrop-blur-md bg-background/50 border-b-accent draggable">
          <Show when={!root.loading}>
            <p class="py-1 px-2 w-max text-xs rounded-md cursor-pointer text-ellipsis bg-convex-900 text-convex-200 not-draggable">{root()?.name}</p>
          </Show>
        </div>
        <div class="mt-16">{c()}</div>
      </div>
    </main>
  );
}
