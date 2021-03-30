import { createUseStyles } from 'react-jss'

const useItemNavBarStyles = createUseStyles({
  itemNavBar: {
    width: '100%',
    height: '8.625rem',
    position: 'relative',
    cursor: 'pointer',

    '&:not(:first-child)': {
      marginTop: '1.25rem',
    },

    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'right',
      borderRadius: 6,
    },

    '& > div': {
      padding: '0 3rem',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '& > strong': {
        fontSize: '1.125rem',
        color: '#fff',
        maxWidth: '5rem',
      },

      '@media(max-width: 320px)': {
        padding: '0 1.5rem',
      },
    },

    '@media (max-width: 960px)': {
      height: '7.5rem',
    },
  },
})

export { useItemNavBarStyles }
