import React from "react";

const BubbleSort = (props) => {
    const animations = [];
    const extraArray = props.slice();
    console.log(extraArray);
    letsBubbleSort(props, 250, animations, extraArray);
    console.log(extraArray);
    return animations;
}

const letsBubbleSort = (myArr, n, animations, extraArray) => {
    var unsorted = false;
    for(let a=0; a<n; a++){
        let e = n-a-1;
        for(let j=0; j<e; j++){
            let k=j+1;
            animations.push([j, k]);
            animations.push([j, k]);
            if(extraArray[j] > extraArray[j+1]){
                var temp = extraArray[j];
                extraArray[j] = extraArray[j+1];
                extraArray[j+1] = temp;
                animations.push([j, extraArray[j]]);
                unsorted = true;
            }
            else{
                animations.push([j, extraArray[j]]);
            }
        }
        if(unsorted == false){
            break;
        }
    }
} 

export default BubbleSort;