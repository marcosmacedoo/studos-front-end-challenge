import { createUseStyles } from 'react-jss'
import BgSmallBlue from '../../assets/bg-small-blue.svg'

const useTasksStyles = createUseStyles({
  tasks: {
    gridColumn: 'span 4',
    background: '#DCECFA',
    borderRadius: 6,
  },

  content: {
    padding: 16,

    '& > h2': {
      fontSize: 20,
    },

    '& > ul, li, li > div': {
      width: '100%',
    },
  },

  inputGroup: {
    margin: '12px 0',
    width: '100%',
    position: 'relative',

    '& > input[type=text]': {
      padding: {
        top: 12,
        left: 12,
        bottom: 12,
      },
      width: '100%',
      fontSize: 16,
      border: '1px solid #D5D5D5',
      borderRadius: 6,
      background: '#F8F8F8',
      color: '#7F8182',
    },

    '& > span': {
      position: 'absolute',
      right: 0,
      height: 45,
      width: 45,
      borderLeft: '1px solid #D5D5D5',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& > img': {
        width: 20,
        height: 20,
      },
    },
  },

  tabs: {
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& > div': {
      position: 'relative',

      '&:after': {
        content: '""',
        height: 2,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        background: '#339CF7',
      },
    },

    '& > div, > button': {
      flex: 1,
    },
  },

  tab: {
    padding: 8,
    width: '100%',
    fontSize: 16,
    color: '#414042',
    background: 'transparent',
    position: 'relative',

    '&:nth-child(2)': {
      flex: 2,
    },
  },

  tabActive: {
    color: '#339CF7',
  },

  cardTask: {
    padding: 12,
    marginBottom: 12,
    height: 150,
    backgroundImage: `url(${BgSmallBlue})`,
    backgroundSize: 'cover',
    borderRadius: 6,
    color: '#fff',

    '& > h3': {
      margin: '16px 0',
      fontSize: 16,
      fontWeight: 'bold',
    },

    '& > footer': {
      display: 'flex',
      flexDirection: 'column',

      '& > div': {
        marginTop: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
  },

  cardTaskHeader: {
    display: 'flex',
    justifyContent: 'space-between',

    '& > div': {
      background: '#E65353',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& > img': {
        marginRight: 8,
      },
    },
  },
})

export { useTasksStyles }
