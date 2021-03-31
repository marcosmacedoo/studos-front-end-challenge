import { createUseStyles } from 'react-jss'

const useToogleButtonStyle = createUseStyles({
  toggleButton: {
    marginLeft: '1.25rem',
    height: '1.875rem',
    width: '3.75rem',
    borderRadius: '1.5rem',
    background: '#C4C4C4',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',

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
})

export { useToogleButtonStyle }
