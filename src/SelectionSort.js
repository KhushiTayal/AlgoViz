import React from "react";

const SelectionSort = (props) => {
    const animations = [];
    console.log(props);
    letsSelectionSort(animations, 250,props);
    console.log(props);
    return animations;
}

function letsSelectionSort (animations, n, myArr){
    for(let i=0; i<n-1; i++){
        let min_idx = i;
        for(let j=i+1; j<n; j++){
            if(myArr[j] < myArr[min_idx]){
                animations.push([j, min_idx]);
                animations.push([j, min_idx]);
                animations.push([j, myArr[min_idx]]);
                animations.push([min_idx, myArr[j]]);
                min_idx = j;
                var temp = myArr[j];
                myArr[j] = myArr[min_idx];
                myArr[min_idx] = temp;
            }
            
        }
    }
}

export default SelectionSort;