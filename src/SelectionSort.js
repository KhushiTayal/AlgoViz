import React from "react";

const SelectionSort = (props) => {
    console.log(props);
    console.log(1234);
    letsSelectionSort(props, 55);
    console.log(props);
}

const letsSelectionSort = (myArr, n) => {
    var i, j, idx;
    for( i=0; i<(n-1); i++){
         idx = i;
        for( j=(i+1); j<n; j++){
            if(myArr[j] < myArr[idx]){
                idx=j;
                var temp = myArr[j];
                myArr[j] = myArr[idx];
                myArr[idx] = temp;
            }
        }
    }
}

export default SelectionSort;