function insertionSort(arr) {
  for( i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for( j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

module.exports = insertionSort;