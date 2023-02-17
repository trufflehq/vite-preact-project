import React from "../../deps/preact.ts";
import { Legend, observer, useObservable } from "../../deps/legend-preact.ts";

function LegendTest() {
  const text = useObservable("");

  return (
    <div>
      <h2>Legend Test</h2>
      <Legend.input
        type="text"
        label="Text"
        value$={text}
      />
      <p>{text.get()}</p>
    </div>
  );
}

export default observer(LegendTest);
