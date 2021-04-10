const removeWhiteSpacesAll = string => string.split(' ').join('')

const addZeroBefore = number => `0${number}`

const isNumberLessThanValue = (number, value = 10) => number < value

const formatNumber = number =>
  isNumberLessThanValue(number) ? addZeroBefore(number) : String(number)

const compareTasksDate = (taskOne, taskTwo) => {
  if (taskOne.date > taskTwo.date) {
    return 1
  } else if (taskOne.date < taskTwo.date) {
    return -1
  }

  return 0
}

export {
  removeWhiteSpacesAll,
  addZeroBefore,
  isNumberLessThanValue,
  formatNumber,
  compareTasksDate,
}
