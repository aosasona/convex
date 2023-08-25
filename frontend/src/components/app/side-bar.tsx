import { Accessor, Show } from "solid-js";
import { Motion, Presence } from "@motionone/solid";
import { Label } from "../ui";

type SidebarProps = {
  showSidebar: Accessor<boolean>;
};

export default function Sidebar({ showSidebar }: SidebarProps) {
  return (
    <Presence exitBeforeEnter>
      <Show when={showSidebar()}>
        <Motion.div initial={{ width: 0 }} animate={{ width: "25%" }} exit={{ width: 0 }} class="px-3 pt-12 space-y-3 border-r bg-background/50 border-r-accent">
          <div>
            <Label>Favourites</Label>
            <div class="flex flex-col w-full"></div>
          </div>

          <div>
            <Label>Pinned</Label>
            <div class="flex flex-col w-full"></div>
          </div>
        </Motion.div>
      </Show>
    </Presence>
  );
}
