import React from "react";

const BubbleSort = (props) => {
    const animations = [];
    const extraArray = props.slice();
    letsBubbleSort(props, 250, animations, extraArray);
    console.log(extraArray);
    return animations;
}

const letsBubbleSort = (myArr, n, animations, extraArray) => {
    var unsorted = false;
    for(let a=0; a<n-1; a++){
        let e = n-a-1;
        for(let j=0; j<e; j++){
            let k=j+1;
            animations.push([j, k]);
            animations.push([j, k]);
            if(extraArray[j] > extraArray[j+1]){
                animations.push([j, extraArray[j+1]]);
                animations.push([j+1, extraArray[j]]);
                const temp = extraArray[j];
                extraArray[j] = extraArray[j+1];
                extraArray[j+1] = temp;
                
                unsorted = true;
            }
            else{
                animations.push([-1, -1]);
                animations.push([-1, -1]);
            }
        }
        if(unsorted == false){
            break;
        }
    }
} 

export default BubbleSort;