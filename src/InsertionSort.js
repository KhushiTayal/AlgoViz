import React from "react";

const InsertionSort = (props) => {
    const animations = [];
    const extraArray = props.slice();
    letsInsertionSort(props, props.length, animations, extraArray);
    console.log(props);
    return animations;
}

const letsInsertionSort = (myArr, n, animations, extraArray) =>{
    var i, key, j;
    for(i=1; i<n; i++){
        key = myArr[i];
        j=i-1;
        while (j >= 0 && myArr[j] > key)
        {
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([j, myArr[j+1]]);
            animations.push([j+1, myArr[j]]);
            myArr[j + 1] = myArr[j];
            //animations.push([j, myArr[j]]);
            j = j - 1;
            //animations.push([j+1, myArr[j+1]]);
        }
        myArr[j + 1] = key;
        animations.push([i, j+1]);
        animations.push([i, j+1]);
        animations.push([j+1, key]);
        animations.push([j+1, key]);
    }
}
export default InsertionSort;