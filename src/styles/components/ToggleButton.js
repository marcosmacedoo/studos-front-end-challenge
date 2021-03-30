import { createUseStyles } from 'react-jss'

const useToogleButtonStyle = createUseStyles({
  containerToogleButton: {
    marginLeft: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },

  toogleButton: {
    height: '1.875rem',
    width: '3.75rem',
    background: '#C4C4C4',
    borderRadius: '2.5rem',
  },

  ball: {
    content: "''",
    position: 'absolute',
    left: '0.375rem',
    width: '1.375rem',
    height: '1.375rem',
    background: '#fff',
    borderRadius: '50%',
  },
})

export { useToogleButtonStyle }
