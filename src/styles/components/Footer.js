import { createUseStyles } from 'react-jss'

const useFooterStyle = createUseStyles(theme => ({
  footer: {
    paddingBottom: '0.5rem',
    gridColumn: 'span 8',
    display: 'flex',
    justifyContent: 'center',
    color: theme.footer.text,

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '& span': {
      marginRight: '1rem',
      fontSize: '0.8125rem',
      cursor: 'pointer',
    },

    '& img': {
      width: '1rem',
      height: '1rem',
      color: theme.footer.text,
      cursor: 'pointer',
    },

    '& img:nth-child(4)': {
      marginRight: '1rem',
    },
  },
}))

export { useFooterStyle }
