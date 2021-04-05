import { createUseStyles } from 'react-jss'

const useFooterStyle = createUseStyles(theme => ({
  footer: {
    paddingBottom: '0.5rem',
    gridColumn: 'span 8',
    display: 'flex',
    justifyContent: 'center',
    color: theme.footer.text,

    '& > ul': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& li': {
        fontSize: '0.8125rem',
        cursor: 'pointer',
      },

      '& li:hover': {
        filter: 'brightness(1.15)',
      },

      '& li:not(:last-child)': {
        marginRight: '1rem',
      },

      '& li img': {
        width: '1rem',
        height: '1rem',
      },
    },
  },
}))

export { useFooterStyle }
