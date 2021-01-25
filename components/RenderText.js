import React from 'react'

const getElement = (t, k) => {
  switch (t.type) {
    case 'p':
      return <p key={k}>{t.text}</p>
    case 'ul':
      return (
        <ul key={k}>
          {t.li.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={k}>
          {t.li.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ol>
      )
    case 'b':
      return <b key={k}>{t.text}</b>
  }
}

export default function RenderText({ text }) {
  return <div style={{ padding: '0 3em' }}>{text.map(getElement)}</div>
}
