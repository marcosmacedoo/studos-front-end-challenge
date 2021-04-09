import { createUseStyles } from 'react-jss'

const useTaskCardStyle = createUseStyles({
  taskCard: {
    marginBottom: 12,
    width: '100%',
    height: '9.375rem',
    color: '#fff',
    position: 'relative',

    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 6,
    },

    '& > article': {
      padding: 12,
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      display: 'flex',
      flexDirection: 'column',

      '& > header': {
        display: 'flex',
        justifyContent: 'space-between',

        '& > div': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          '& > img': {
            marginRight: '0.5rem',
          },

          '& > span': {
            fontSize: '0.875rem',
          },
        },
      },

      '& main': {
        flex: 1,
        display: 'flex',
        alignItems: 'center',

        '& h3': {
          fontSize: '1rem',
          fontWeight: 'bold',
        },
      },

      '& > footer': {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '0.875rem',

        '& > div': {
          marginTop: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

          '@media(max-width: 375px)': {
            marginTop: 0,
          },
        },
      },
    },

    '@media(max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',

      '& > main': {
        margin: 0,
        flex: 2,
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
})

export { useTaskCardStyle }
