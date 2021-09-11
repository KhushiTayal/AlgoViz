import React from "react";

const SelectionSort = (props) => {
    const animations = [];
    const extraArray = props.slice();
    letsSelectionSort(animations, 250, extraArray, props);
    console.log(props);
    return animations;
}

const letsSelectionSort = (animations, n, extraArray, myArr) => {
    for(let i=0; i<n-1; i++){
        let min_idx = i;
        for(let j=i+1; j<n; j++){
            if(extraArray[j] < extraArray[min_idx]){
                min_idx = j;
                myArr[j] = extraArray[min_idx];
                myArr[min_idx] = extraArray[j];
            }
        }
    }
}

export default SelectionSort;