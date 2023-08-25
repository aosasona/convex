/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Route, Router, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
import AppLayout from "./layouts/app-layout";

const root = document.getElementById("root");

const Explorer = lazy(() => import("./pages/explorer"));

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?");
}

render(
  () => (
    <AppLayout>
      <Router>
        <Routes>
          <Route path="/" component={Explorer} />
        </Routes>
      </Router>
    </AppLayout>
  ),
  root!
);
