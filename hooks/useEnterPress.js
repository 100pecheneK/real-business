export default function useEnterPress(callback) {
  return function (e) {
    if (e.key === 'Enter') {
      callback()
    }
  }
}