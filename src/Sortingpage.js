import React, {useState} from 'react';
import './Sortingpage.css'
import MergeSort from './MergeSort';

const Sortingpage = () => {
    const [a, setArr] = useState([]);
     let arr = [];
     const [disable, setDisable] = useState(false);
    const generatearr = () => {
        for(let i=0; i<55; i++){
            var element = Math.ceil(Math.random() * 400);
            arr[i] = element;
            console.log(arr[i]);
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
        MergeSort(a);
        let newArr = [];
        for(var i=0; i<55; i++){
            console.log(a[i]);
            newArr[i] = a[i];
        }
        setArr([...arr, ...newArr]);
    }
    return(
        <div className="sortingpage">
            <h1 className="heading">Sorting Visualiser</h1>
            <div>{renderarr}</div>
            <div className="mybtns">
            <button type="button" class="btn btn-outline-primary" onClick={mergefunc}>Merge Sort</button>
            <button type="button" class="btn btn-outline-secondary">Bubble Sort</button>
            <button type="button" class="btn btn-outline-success">Selection Sort</button>
            <button type="button" class="btn btn-outline-danger">Insertion Sort</button>
            <button type="button" class="btn btn-outline-warning">Quick Sort</button>
            <button type="button" class="btn btn-outline-info" onClick={() => window.location.reload(false)}>RESET</button>
            <button type="button" class="btn btn-outline-light">Light</button>
            <button type="button" class="btn btn-outline-dark"  disabled={disable} onClick={generatearr}>Generate Array!</button>
            </div>
        </div>
    );
}

export default Sortingpage;