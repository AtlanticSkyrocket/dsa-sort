/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, startIdx = 0, endIdx = arr.length -1){
  let pivot = arr[startIdx];
  let pivotIdx = startIdx;

  for (let i = startIdx + 1; i <= endIdx; i++) {
    if (arr[i] < pivot) {
      pivotIdx++;
      let temp = arr[i];
      arr[i] = arr[pivotIdx];
      arr[pivotIdx] = temp;
    }
  }

  // Swap the pivot element with the pivotIdx
  let temp = arr[startIdx];
  arr[startIdx] = arr[pivotIdx];
  arr[pivotIdx] = temp;
  return pivotIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx >= rightIdx) return arr;
  
  let pivotIdx = pivot(arr, leftIdx, rightIdx);
  quickSort(arr, leftIdx, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, rightIdx);

  return arr;
}

module.exports = { pivot, quickSort };