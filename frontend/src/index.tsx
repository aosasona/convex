/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Route, Router, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
import AppLayout from "./layouts/app-layout";

const root = document.getElementById("root");

const Home = lazy(() => import("./pages/home"));

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?");
}

render(
  () => (
    <AppLayout>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </Router>
    </AppLayout>
  ),
  root!
);
