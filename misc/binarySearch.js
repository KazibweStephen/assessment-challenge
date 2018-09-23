function binarySearch (list, value) {
  // TODO: Ensure list is sorted

  let start = 0
  let stop = list.length - 1
  let middle = Math.floor((start + stop) / 2)

  // While the middle is not what we're looking for and the list does not have a single item
  while (list[middle] !== value && start < stop) {
    // if value is less than middle, take before else number after
    if (value < list[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    // recalculate middle
    middle = Math.floor((start + stop) / 2)
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return (list[middle] !== value) ? -1 : middle
}


const list = [13, 25, 48, 67, 73, 75, 85, 97]
console.log(binarySearch(list, 97))