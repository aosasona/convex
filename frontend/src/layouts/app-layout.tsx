import { ParentProps, children, createSignal } from "solid-js";
import { Sidebar, Topbar } from "@components/app";

export default function AppLayout(props: ParentProps) {
  const c = children(() => props.children);
  const [showSidebar, setShowSidebar] = createSignal(true);

  function toggleSidebar() {
    setShowSidebar(!showSidebar());
  }

  return (
    <main class="flex">
      <Sidebar showSidebar={showSidebar} />
      <div class="relative w-full h-screen bg-background">
        <Topbar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <div class="scrollarea">{c()}</div>
      </div>
    </main>
  );
}
