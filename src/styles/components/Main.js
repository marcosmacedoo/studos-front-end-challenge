import { createUseStyles } from 'react-jss'

const useMainStyles = createUseStyles(theme => ({
  wrapper: {
    height: '100%',
    width: '100%',
    background: theme.background,
    color: theme.text,
  },

  container: {
    margin: '0 auto',
    width: 'min(1140px, 95vw)',

    '@media (max-width: 900px)': {
      width: '75vw',
    },

    '@media (max-width: 768px)': {
      width: '90vw',
    },
  },

  struct: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto 1fr auto',
    columnGap: '0.75rem',

    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
}))

export { useMainStyles }
