export function MergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const extraArr = array.slice();
    mergeSortHelper(array, 0, array.length - 1, extraArr, animations);
    return animations;
  }
  
  function mergeSortHelper(mainArray,l,r,extraArr,animations) {
    if (l === r) return;
    const mid = Math.floor((l + r) / 2);
    mergeSortHelper(extraArr, l, mid, mainArray, animations);
    mergeSortHelper(extraArr, mid + 1, r, mainArray, animations);
    doMerge(mainArray, l, mid, r, extraArr, animations);
  }
  
  function doMerge(mainArray,l,mid,r,extraArr,animations) {
    let k = l;
    let i = l;
    let j = mid + 1;
    while (i <= mid && j <= r) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (extraArr[i] <= extraArr[j]) {
        animations.push([k, extraArr[i]]);
        mainArray[k++] = extraArr[i++];
      } else {
        animations.push([k, extraArr[j]]);
        mainArray[k++] = extraArr[j++];
      }
    }
    while (i <= mid) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, extraArr[i]]);
      mainArray[k++] = extraArr[i++];
    }
    while (j <= r) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, extraArr[j]]);
      mainArray[k++] = extraArr[j++];
    }
  }