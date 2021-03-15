
exports.min = function min (array) {
  if (checkArray(array) == true) {
    let resultMin = realSort(array);
    return resultMin[0];
  } else {
      return 0;
  }
}

exports.max = function max (array) {
  if (checkArray(array) == true) {
    let resultMax = realSort(array).reverse();
    return resultMax[0];
  } else {
      return 0;
  }
}

exports.avg = function avg (array) {
  if (checkArray(array) == true) {
    let resultAvg = array;
    let average = 0;
    for (let i = 0; i < resultAvg.length; i++) {
        average = average + resultAvg[i];
    }
    average = average / resultAvg.length;
    return average;
  } else {
      return 0;
  }
}



function checkArray(array) {
  if (typeof(array) == "object") {
      if (array.length > 0) {
          return true;
      }
  } else {
      return false;
  }
}

function realSort(array) {
  let resultSort = array;
  let temp = 0;
  for (let i = 0; i < resultSort.length; i++) {
      for (let j = i + 1; j < resultSort.length; j++) {
          if(resultSort[i] > resultSort[j]) {
              temp = resultSort[i];
              resultSort[i] = resultSort[j];
              resultSort[j] = temp;
          }
      }
  }
  return resultSort;
}
