function selectionSort(arr) {
  let min = arr[0];
  let minIndex = 0;
  let unsortedIdx = 0;
  
  while (unsortedIdx < arr.length) {
    // find min and minIndex
    for(let i = minIndex; i < arr.length; i++) {
      if(arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    
    // swap min with arr[unsortedIdx]
    if(minIndex !== 0) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[unsortedIdx];
      arr[unsortedIdx] = temp;
    }

    unsortedIdx++;
    minIndex = unsortedIdx;
    min = arr[unsortedIdx];
  }
  return arr;
}

module.exports = selectionSort;