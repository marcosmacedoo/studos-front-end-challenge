import { createUseStyles } from 'react-jss'

const useHeaderStyles = createUseStyles({
  header: {
    padding: { top: 20, bottom: 32 },
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#414042',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '& > img': {
        marginRight: '2rem',
        width: 55,
        height: 55,
        borderRadius: '50%',
      },

      '&:nth-child(2) strong': {
        fontSize: '1rem',
      },
    },
  },
})

export { useHeaderStyles }
