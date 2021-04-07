import { createUseStyles } from 'react-jss'

const useTabStyle = createUseStyles(theme => ({
  tab: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    '& > button': {
      padding: 8,
      width: '100%',
      background: 'transparent',
      fontSize: '1rem',
      color: theme.aside.tab.text,
    },

    '&:nth-child(2)': {
      flex: 2,

      '@media(max-width: 900px)': {
        flex: 1,
      },
    },
  },

  tabActive: {
    '& > button': {
      color: '#339CF7',
    },

    '& > span': {
      width: '100%',
      height: 2,
      background: '#339CF7',
    },
  },
}))

export { useTabStyle }
