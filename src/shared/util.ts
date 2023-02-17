/**
 * Wire an input to a signal. This is meant to be passed to the `onInput` prop of an input.
 */
export function wireInput (signal: any) {
  return (e: any) => signal.value = e.target.value
}