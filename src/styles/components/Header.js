import { createUseStyles } from 'react-jss'

const useHeaderStyles = createUseStyles({
  header: {
    padding: { top: '1.25rem', bottom: '2rem' },
    gridColumn: 'span 12',
    gridRow: '1 / 2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '& > img': {
        marginRight: '1.5rem',
        width: '3.4375rem',
        height: '3.4375rem',
        borderRadius: '50%',

        '@media (max-width: 768px)': {
          marginRight: '1rem',
        },
      },

      '& > h1': {
        fontSize: '1.375rem',
      },
    },

    '& > :nth-child(2)': {
      '& > label': {
        fontSize: '1rem',

        '@media(max-width: 768px)': {
          visibility: 'hidden',
        },
      },
    },
  },
})

export { useHeaderStyles }
