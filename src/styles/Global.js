import { createUseStyles } from 'react-jss'

const useGlobalStyles = createUseStyles({
  '@global': {
    '*': {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
      fontFamily: 'Roboto, sans-serif',
    },

    '#root, body': {
      minHeight: '100vh',
    },

    '#root': {
      display: 'flex',
      flexDirection: 'column',
    },

    body: {
      background: 'white',
    },

    main: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      columnGap: 12,
    },

    ul: {
      listStyle: 'none',
    },
  },

  container: {
    maxWidth: 1140,
    width: '100%',
    margin: '0 auto',
  },
})

export { useGlobalStyles }
