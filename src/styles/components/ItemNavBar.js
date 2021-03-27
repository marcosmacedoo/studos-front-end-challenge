import { createUseStyles } from 'react-jss'
import BackgroundImageLargeBlueLight from '../../assets/bg-large-blue-light.svg'
import BackgroundImageLargeBlue from '../../assets/bg-large-blue.svg'
import BackgroundImageLargeOrange from '../../assets/bg-large-orange.svg'
import BackgroundImageLargeCyan from '../../assets/bg-large-cyan.svg'

function getBackgroundImage(props) {
  if (props.isBgBlueLight) {
    return BackgroundImageLargeBlueLight
  } else if (props.isBgBlue) {
    return BackgroundImageLargeBlue
  } else if (props.isBgOrange) {
    return BackgroundImageLargeOrange
  } else if (props.isBgCyan) {
    return BackgroundImageLargeCyan
  }
}

const useItemNavBarStyles = createUseStyles({
  itemNavBar: props => ({
    padding: 48,
    width: '100%',
    height: 138,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: `url(${getBackgroundImage(props)})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    '&:not(:first-child)': {
      marginTop: 20,
    },

    '& > strong': {
      fontSize: 18,
      color: '#fff',
      maxWidth: 80,
    },
  }),
})

export { useItemNavBarStyles }
