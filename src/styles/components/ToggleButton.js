import { createUseStyles } from 'react-jss'

const useToogleButtonStyle = createUseStyles({
  containerToogleButton: {
    marginLeft: 20,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },

  toogleButton: {
    height: 30,
    width: 60,
    background: '#C4C4C4',
    borderRadius: 40,
  },

  ball: {
    content: "''",
    position: 'absolute',
    left: 6,
    width: 22,
    height: 22,
    background: '#fff',
    borderRadius: '50%',
  },
})

export { useToogleButtonStyle }
