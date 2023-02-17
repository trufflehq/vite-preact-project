import React from "../../deps/preact.ts";
import { useSignal } from "../../deps/signals.ts";
import { wireInput } from "../../shared/util.ts";

import styles from "./input.scss.js";
import { useStyleSheet } from "../../deps/styles.ts";

export default function Input() {
  useStyleSheet(styles);

  const text = useSignal("");

  const showAlert = () => {
    // use the .peek() method to get the current value
    // of a signal without subscribing to it/triggering a re-render
    alert(`You typed: ${text.peek()}`);
  };

  return (
    <div class="c-input">
      <h2>Input</h2>
      <input
        type="text"
        value={text.value}
        onInput={wireInput(text)}
      />
      <p>{text}</p>
      <button onClick={showAlert}>Alert</button>
    </div>
  );
}
