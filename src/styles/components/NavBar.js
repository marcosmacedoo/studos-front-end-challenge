import { createUseStyles } from 'react-jss'

const useNavBarStyles = createUseStyles({
  sectionNavBar: {
    gridColumn: 'span 8',
    display: 'flex',
    flexDirection: 'column',

    '& nav': {
      width: '100%',
    },

    '& ul li:not(:first-child)': {
      marginTop: 20,
    },

    '& footer': {
      paddingBottom: 8,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      textAlign: 'center',
      color: '#A7A9AB',

      '& > div': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      '& span': {
        marginRight: 16,
      },

      '& img': {
        width: 16,
        height: 16,
      },

      '& img:nth-child(4)': {
        marginRight: 16,
      },
    },
  },
})

export { useNavBarStyles }
