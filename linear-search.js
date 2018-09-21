function linearSearch(array, toFind){
  for(let i = 0; i < array.length; i++){
    if(array[i] === toFind) return i;
  }
  return -1;
}

const list = [13, 25, 48, 67, 73, 75, 85, 97]
console.log(binarySearch(list, 97))