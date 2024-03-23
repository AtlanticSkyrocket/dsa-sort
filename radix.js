// digitCount: Given a number, returns the number of digits in the number
function digitCount(num) {
  return num.toString().length;
}

// mostDigits: Given an array of numbers, returns the number of digits in the largest number in the list
function mostDigits(arr) {
  let max = 0;
  for(let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
}

// getDigit: returns the digit in num at the given place value
function getDigit(num, place){
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function radixSort(arr) {
  let max = mostDigits(arr);

  // for each digit
  for(let i = 0; i < max; i++) {
    let buckets = Array.from({length: 10}, () => []);

    // for each number in the array
    for(let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }

    arr = [];
    // put each bucket back in order
    for(let k = 0; k < buckets.length; k++) {
      if(buckets[k].length > 0) {
        arr = arr.concat(buckets[k]);
      }
    }
  }

  return arr;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };