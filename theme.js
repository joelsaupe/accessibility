import theme from 'mdx-deck/themes'

export default {
  // extends the default theme
  ...theme,
  font: 'Roboto, sans-serif',
  // custom colors
  colors: {
    text: '#7e57c2',
    background: '#fff',
    link: '#51387C',
  },
  blockquote: {
    fontSize: '1em',
    paddingLeft: '1em',
    paddingTop: '1em',
    paddingBottom: '1em',
    borderLeft: 'solid .25em',
  },
  h6: {
    fontSize: '0.5em',
  }
}
