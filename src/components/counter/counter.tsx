import React from "../../deps/preact.ts";
import { useSignal } from "../../deps/signals.ts";

import styles from "./counter.scss.js";
import { useStyleSheet } from "../../deps/styles.ts";

// you can also declare signals outside of components
// import { signal } from '../../deps/signals.ts';
// const count = signal(0);

export default function Counter() {
  useStyleSheet(styles);
  const count = useSignal(0);

  return (
    // we use "c-" as a prefix for components and then nest styles inside a selector to it
    <div class="c-counter">
      <h2>Counter</h2>
      {/* you can render signals like a normal value */}
      <p>Count: {count}</p>
      <button onClick={() => count.value++}>Increment</button>
    </div>
  );
}
