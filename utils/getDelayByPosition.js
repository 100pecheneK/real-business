export default function getDelayByPosition(initial, i) {
  let delay = initial
  if (i !== 0) {
    delay += i * 0.2
  }
  return delay
}
