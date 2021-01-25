const textPrerender = {
  p(text) {
    return { type: 'p', text }
  },
  b(text) {
    return { type: 'b', text }
  },
  ul(li) {
    return { type: 'ul', li }
  },
  ol(li) {
    return { type: 'ol', li }
  },
}
export default textPrerender
