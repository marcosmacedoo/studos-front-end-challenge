import { createUseStyles } from 'react-jss'

const useNavBarStyles = createUseStyles({
  sectionNavBar: {
    gridColumn: 'span 8',
    gridRow: '2 / 3',
    display: 'flex',
    flexDirection: 'column',

    '& nav': {
      width: '100%',
    },

    '& ul li:not(:first-child)': {
      marginTop: '1.25rem',

      '@media (max-width: 1024px)': {
        marginTop: '0.5rem',
      },
    },
  },
})

export { useNavBarStyles }
