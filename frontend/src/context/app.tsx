import { GetPlatform } from "@convex/wailsjs/go/platform/Platform";
import { Accessor, ParentProps, Setter, createContext, createSignal, useContext } from "solid-js";

export type Platform = "darwin" | "windows" | "linux" | "unknown";

type Config = {
  platform: Platform;
};

interface AppContext {
  config: Accessor<Config>;
  setConfig: Setter<Config>;
}

const AppContext = createContext<AppContext>({} as AppContext);

export function AppProvider(props: ParentProps) {
  const [config, setConfig] = createSignal<Config>({
    platform: "unknown",
  });

  GetPlatform().then((platform) => {
    setConfig({ platform });
  });

  const configState = {
    config,
    setConfig,
  };

  return <AppContext.Provider value={configState}>{props.children}</AppContext.Provider>;
}

export function useApp() {
  const app = useContext(AppContext);
  if (!app) throw new Error("useApp must be used within an AppProvider");
  return app;
}
