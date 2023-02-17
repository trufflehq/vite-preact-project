// we have to use the name "React" to make intellisense happy (even though we're actually using preact)
import React from "../../deps/preact.ts";
import styles from "./main-page.scss.js";
import { useStyleSheet } from "../../deps/styles.ts";
import Counter from "../../components/counter/counter.tsx";
import Input from "../../components/input/input.tsx";

export default function MainPage() {
  // use this to add styles
  useStyleSheet(styles);

  return (
    // we use "p-" as a prefix for page components and then nest styles inside a selector to it
    <div class="p-main-page">
      {/* you can reference static assets from the 'public' directory */}
      <img src="/vite.svg" alt="Vite Logo" />
      <h1>Hello Vite!</h1>
      <div class="styled-text">I'm some styled text</div>
      <Counter />
      <Input />
    </div>
  );
}
