import { Accessor, Show } from "solid-js";
import { Motion, Presence } from "@motionone/solid";
import { Label } from "../ui";
import { useApp } from "@context/app";

type SidebarProps = {
  showSidebar: Accessor<boolean>;
};

export default function Sidebar({ showSidebar }: SidebarProps) {
  const { config } = useApp();

  return (
    <Presence exitBeforeEnter>
      <Show when={showSidebar()}>
        <Motion.div
          initial={{ width: 0 }}
          animate={{ width: "25%" }}
          exit={{ width: 0 }}
          class="px-3 space-y-3 border-r backdrop-blur-2xl border-r-accent"
          classList={{
            "pt-12": config().platform === "darwin",
            "bg-background/60": config().platform === "darwin",
            "bg-background": config().platform !== "darwin",
          }}>
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
