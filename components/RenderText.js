import React from 'react'

const getElement = t => {
  switch (t.type) {
    case 'p':
      return <p>{t.text}</p>
    case 'ul':
      return (
        <ul>
          {t.li.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol>
          {t.li.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ol>
      )
    case 'b':
      return <b>{t.text}</b>
  }
}

export default function RenderText({ text }) {
  return (
    <div style={{ padding: '0 3em' }}>
      {text.map(t => {
        return getElement(t)
      })}
    </div>
  )
}
