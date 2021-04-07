import { createUseStyles } from 'react-jss'

const useTaskListStyle = createUseStyles(theme => ({
  taskList: {
    paddingRight: '0.5rem',
    flex: 1,
    overflowY: 'scroll',

    '@media(max-width: 900px)': {
      maxHeight: '40rem',
      paddingRight: 0,
    },
  },
}))

export { useTaskListStyle }
