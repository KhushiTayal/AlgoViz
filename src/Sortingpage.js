import React, {useState} from 'react';
import './Sortingpage.css'
import BubbleSort from './BubbleSort';
import SelectionSort from './SelectionSort';
import { MergeSort } from './MergeSort';
import InsertionSort from './InsertionSort';

const Sortingpage = () => {
    const [a, setArr] = useState([]);
     let arr = [];
     const [disable, setDisable] = useState(false);
    const generatearr = () => {
        for(let i=0; i<250; i++){
            var element = Math.ceil(Math.random() * 400);
            arr[i] = element;
        }
        setArr([...a, ...arr]);
            setDisable(true)
    }

    const renderarr = a.map((num , idx) => {
        
        return(
            <div className="container">
            <div className="bars" key={idx} style={{height: `${num}px`}}>
                
            </div>   
            </div>
            
        );
    }
    );

    const mergefunc = () => {
        const animations = MergeSort(a);
        for (let i = 0; i < animations.length; i++){
            const bar = document.getElementsByClassName('bars');
            const change = i%3 !== 2;
            if(change){
                const [firtstIdx, secondIdx] = animations[i];
                const secondaryColor = 'blue';
                const primaryColor = 'hotpink';
                const barOneStyle = bar[firtstIdx].style;
                const barTwoStyle = bar[secondIdx].style;
                const color = i % 3 === 0 ? secondaryColor : primaryColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                  }, i * 5);
            }
            else{
                setTimeout(() => {
                    const [firtstIdx, newHeight] = animations[i];
                    const barOneStyle = bar[firtstIdx].style;
                    barOneStyle.height = `${newHeight}px`;

                }, i * 5);
            }
        }

    }

    const bubbleSortfunc = () => {
       const animations = BubbleSort(a);
       for (let i = 0; i < animations.length; i++){
        const bar = document.getElementsByClassName('bars');
        const change = (i%4 === 0) || (i%4 === 1);
        if(change){
            const [firtstIdx, secondIdx] = animations[i];
            const secondaryColor = 'blue';
            const primaryColor = 'hotpink';
            const barOneStyle = bar[firtstIdx].style;
            const barTwoStyle = bar[secondIdx].style;
            const color = i % 4 === 0 ? secondaryColor : primaryColor;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * 1);
        }
        else{
            const [firtstIdx, newHeight] = animations[i];
                if(firtstIdx === -1){
                    continue;
                }
            setTimeout(() => {
                const barOneStyle = bar[firtstIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * 1);
        }
    }
    }

    const Selectionfunc = () => {
        const animations = SelectionSort(a);
        for (let i = 0; i < animations.length; i++){
            const bar = document.getElementsByClassName('bars');
            const change = (i%4 === 0) || (i%4 === 1);
            if(change){
                const [firtstIdx, secondIdx] = animations[i];
                const secondaryColor = 'blue';
                const primaryColor = 'hotpink';
                const barOneStyle = bar[firtstIdx].style;
                const barTwoStyle = bar[secondIdx].style;
                const color = i % 4 === 0 ? secondaryColor : primaryColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                  }, i * 0.1);
            }
            else{
                const [firtstIdx, newHeight] = animations[i];
                    if(firtstIdx === -1){
                        continue;
                    }
                setTimeout(() => {
                    const barOneStyle = bar[firtstIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 0.1);
            }
        }
    }

    const Insertionfunc = () => {
        const animations = InsertionSort(a);
        for (let i = 0; i < animations.length; i++){
            const bar = document.getElementsByClassName('bars');
            const change = (i%4 === 0) || (i%4 === 1);
            if(change){
                const [firtstIdx, secondIdx] = animations[i];
                const secondaryColor = 'blue';
                const primaryColor = 'hotpink';
                const barOneStyle = bar[firtstIdx].style;
                const barTwoStyle = bar[secondIdx].style;
                const color = i % 4 === 0 ? secondaryColor : primaryColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                  }, i * 1);
            }
            else{
                const [firtstIdx, newHeight] = animations[i];
                    if(firtstIdx === -1){
                        continue;
                    }
                setTimeout(() => {
                    const barOneStyle = bar[firtstIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 1);
            }
        }
    }
    return(
        <div className="sortingpage">
            <h1 className="heading">Sorting Visualiser</h1>
            <div>{renderarr}</div>
            <div className="mybtns">
            <button type="button" class="btn btn-outline-primary" onClick={mergefunc}>Merge Sort</button>
            <button type="button" class="btn btn-outline-secondary" onClick={bubbleSortfunc}>Bubble Sort</button>
            <button type="button" class="btn btn-outline-success" onClick={Selectionfunc}>Selection Sort</button>
            <button type="button" class="btn btn-outline-danger" onClick={Insertionfunc}>Insertion Sort</button>
            <button type="button" class="btn btn-outline-warning">Quick Sort</button>
            <button type="button" class="btn btn-outline-info" onClick={() => window.location.reload(false)}>RESET</button>
            <button type="button" class="btn btn-outline-light">Light</button>
            <button type="button" class="btn btn-outline-dark"  disabled={disable} onClick={generatearr}>Generate Array!</button>
            </div>
        </div>
    );
}

export default Sortingpage;