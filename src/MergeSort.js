import React from "react";

const bar = document.getElementsByClassName('bars');

const MergeSort = (props) => {
    console.log("heyya!");
    letsMerge(props, 0, 54);
    for(let i=0; i<55; i++){
        const barStyle = bar[i].style;
        barStyle.backgroundColor = 'green';
    }
}
function merge(myArr, l, mid, r){
    var n = mid-l+1;
    var m = r-mid;

    const b = [];
    const c = [];

    for(let i=0; i<n; i++){
        b[i] = myArr[l+i];
    }
    for(let i=0; i<m; i++){
        c[i] = myArr[mid+1+i];
    }

    let i=0;
    let j=0;
    let k=l;
    while(i<n && j<m){
        if(b[i]<c[j]){
            myArr[k]=b[i];
            k++;
            i++;
        }
        else{
            myArr[k]=c[j];
            k++;
            j++;
        }   
    }
    
    while(i<n){
        myArr[k]=b[i];
        k++;
        i++;
    }
    while(j<m){
        myArr[k]=c[j];
        k++;
        j++;
    }
}
function letsMerge(myArr, l, r){
    
        if(l>=r){
            return;
        }
        var mid = Math.floor((l+r)/2);
        letsMerge(myArr, l, mid);
        letsMerge(myArr, mid+1, r);
        merge(myArr, l, mid, r);
    
    
}

export default MergeSort;