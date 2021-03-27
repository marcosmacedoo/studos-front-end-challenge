import { createUseStyles } from 'react-jss'
import BgLargeBlueLight from '../../assets/bg-large-blue-light.svg'

const useNavBarStyles = createUseStyles({
  navbar: {
    gridColumn: 'span 8',
  },

  itemCardLarge: {
    padding: 48,
    width: '100%',
    height: 138,
    backgroundImage: `url(${BgLargeBlueLight})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& > strong': {
      fontSize: 18,
      color: '#fff',
      maxWidth: 80,
    },
  },
})

export { useNavBarStyles }
