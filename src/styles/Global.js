import { createUseStyles } from 'react-jss'

const useGlobalStyles = createUseStyles({
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

    body: {
      background: 'white',
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
    },

    '@media(max-width: 768px)': {
      html: {
        fontSize: '87.5%',
      },
    },

    '@media(max-width: 375px)': {
      html: {
        fontSize: '75%',
      },
    },
  },

  container: {
    margin: '0 auto',
    width: 'min(1140px, 95vw)',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto 1fr auto',
    columnGap: '0.75rem',

    '@media (max-width: 900px)': {
      width: '75vw',
      display: 'flex',
      flexDirection: 'column',
    },

    '@media (max-width: 768px)': {
      width: '90vw',
    },
  },
})

export { useGlobalStyles }
