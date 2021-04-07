import { createUseStyles } from 'react-jss'

const useAsideStyles = createUseStyles(theme => ({
  tasks: {
    gridColumn: 'span 4',
    gridRow: '2 / 4',
    background: theme.aside.background,
    borderRadius: 6,

    '@media(max-width: 900px)': {
      margin: '2rem 0',
    },
  },

  content: {
    padding: '1rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

    '& > h2': {
      fontSize: '1.25rem',
    },

    '& > ul, li, li > div': {
      width: '100%',
    },
  },

  form: {
    margin: '0.75rem 0',
    width: '100%',
  },

  inputGroup: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    '& > input[type=text]': {
      padding: '0.75rem 0 0.75rem 0.75rem',
      width: '100%',
      fontSize: '1rem',
      border: `1px solid ${theme.aside.input.border}`,
      borderRadius: 6,
      background: theme.aside.input.background,
      color: theme.aside.input.text,
    },

    '& > button': {
      position: 'absolute',
      right: 1,
      height: '2.6875rem',
      width: '2.6875rem',
      background: theme.aside.input.background,
      borderLeft: `1px solid ${theme.aside.input.border}`,
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& > img': {
        width: '1.25rem',
        height: '1.25rem',
        color: theme.aside.input.text,
      },
    },
  },
}))

export { useAsideStyles }
