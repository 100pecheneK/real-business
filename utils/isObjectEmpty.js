export default function isEmpty(obj) {
  for (let _ in obj) {
    return false
  }
  return true
}
