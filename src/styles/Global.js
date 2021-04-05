import { createUseStyles } from 'react-jss'

const useGlobalStyles = createUseStyles(theme => ({
  '@global': {
    '*': {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
      fontFamily: 'Roboto, sans-serif',
    },

    'html, body, #root': {
      height: '100%',
    },

    '#root': {
      display: 'flex',
    },

    ul: {
      listStyle: 'none',
    },

    input: {
      border: 0,
    },

    button: {
      border: 0,
      cursor: 'pointer',
    },

    '@media(max-width: 1024px)': {
      html: {
        fontSize: '93%',
      },
    },

    '@media(max-width: 900px)': {
      html: {
        fontSize: '90%',
      },

      'html, body, #root': {
        height: 'auto',
      },
    },

    '@media(max-width: 768px)': {
      html: {
        fontSize: '87.5%',
      },
    },

    '@media(max-width: 400px)': {
      html: {
        fontSize: '75%',
      },
    },
  },

  gone: {
    width: 0,
    height: 0,
    position: 'absolute',
    left: '-9999rem',
    visibility: 'hidden',
    opacity: 0,
  },
}))

export { useGlobalStyles }
