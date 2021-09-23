import React from "react";

const animations = [];

const QuickSort = (props) => {
    console.log(props);
    letsQuickSort(props, 0, props.length-1);
    console.log(props);
    return animations;
}
function partition(arr, low, high){
    const pivot = arr[high];
    var i = low-1;
    for (let j = low; j <= high - 1; j++){
        if (arr[j] < pivot){
            i++;
            animations.push([j, i]);
            animations.push([j, i]);
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            animations.push([j, arr[j]]);
            animations.push([j, i]);
            animations.push([j, i]);
            animations.push([i, arr[i]]);
        }
    }
            var tem = arr[i+1];
            arr[i+1] = arr[high];
            arr[high] = tem;
            animations.push([i+1, high]);
            animations.push([i+1, high]);
            animations.push([i+1, arr[i+1]]);
            animations.push([i+1, high]);
            animations.push([i+1, high]);
            animations.push([high, arr[high]]);
            return i+1;
}
function letsQuickSort(arr, low, high){
    if(low<high){
        const pi = partition(arr, low, high);
        letsQuickSort(arr, low, pi-1);
        letsQuickSort(arr, pi+1, high);
    }
}
export default QuickSort;