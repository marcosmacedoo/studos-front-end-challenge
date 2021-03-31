import { createUseStyles } from 'react-jss'

const useAsideStyles = createUseStyles({
  tasks: {
    gridColumn: 'span 4',
    gridRow: '2 / 4',
    background: '#DCECFA',
    borderRadius: 6,

    '@media(max-width: 900px)': {
      margin: '2rem 0',
    },
  },

  content: {
    padding: '1rem',

    '& > h2': {
      fontSize: '1.25rem',
    },

    '& > ul, li, li > div': {
      width: '100%',
    },
  },

  inputGroup: {
    margin: '0.75rem 0',
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    '& > input[type=text]': {
      padding: '0.75rem 0 0.75rem 0.75rem',
      width: '100%',
      fontSize: '1rem',
      border: '1px solid #D5D5D5',
      borderRadius: 6,
      background: '#F8F8F8',
      color: '#7F8182',
    },

    '& > button': {
      position: 'absolute',
      right: 0,
      height: '2.6875rem',
      width: '2.6875rem',
      background: '#F8F8F8',
      borderLeft: '1px solid #D5D5D5',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& > img': {
        width: '1.25rem',
        height: '1.25rem',
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
    fontSize: '1rem',
    color: '#414042',
    background: 'transparent',
    position: 'relative',

    '&:nth-child(2)': {
      flex: 2,

      '@media(max-width: 900px)': {
        flex: 1,
      },
    },
  },

  tabActive: {
    color: '#339CF7',
  },
})

export { useAsideStyles }
