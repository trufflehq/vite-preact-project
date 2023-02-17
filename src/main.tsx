import React from "./deps/preact.ts";
import { render } from "./deps/preact.ts";
import MainPage from "./pages/main-page/main-page.tsx";

render(<MainPage />, document.getElementById("app") as HTMLElement);
