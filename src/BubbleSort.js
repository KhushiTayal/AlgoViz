import React from "react";

const BubbleSort = (props) => {
    letsBubbleSort(props, 55);
}

const letsBubbleSort = (myArr, n) => {
    var unsorted = false;
    for(let i=0; i<55; i++){
        for(let j=0; j<54; j++){
            if(myArr[j] > myArr[j+1]){
                var temp = myArr[j];
                myArr[j] = myArr[j+1];
                myArr[j+1] = temp;
                unsorted = true;
            }
        }
        if(unsorted == false){
            break;
        }
    }
} 

export default BubbleSort;