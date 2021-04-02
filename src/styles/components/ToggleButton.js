import { createUseStyles } from 'react-jss'

const useToogleButtonStyle = createUseStyles(theme => ({
  toggleButton: {
    marginLeft: '1.25rem',
    height: '1.875rem',
    width: '3.75rem',
    borderRadius: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    background: theme.toggleButton.background,

    '& > div': {
      width: '100%',
      height: '100%',
      padding: '4px 7px',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      left: 0,

      '& > span': {
        content: '""',
        position: 'absolute',
        width: '1.25rem',
        height: '1.25rem',
        background: '#fff',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: '0.2s linear',
      },
    },
  },

  active: {
    '& > div > span': {
      transform: 'translateX(130%)',

      '@media(max-width: 768px)': {
        transform: 'translateX(110%)',
      },
    },
  },

  notActive: {
    '& > div > span': {
      transform: 'translateX(0)',
    },
  },
}))

export { useToogleButtonStyle }
