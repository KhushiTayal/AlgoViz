import React, {useState}  from 'react';
import { Link } from 'react-router-dom'
import LinearSearch from './Linearsearch';
import './Searchpage.css'

const Searchpage = () => {
    const [a, setArr] = useState([]);
   // var arr = [18,2,3,4,5,6,7,8,9,10,11,12,13,14,5,16,17,1];
     let arr = [];
     const [disable, setDisable] = useState(false);
    const generatearr = () => {
        for(let i=0; i<16; i++){
            var element = Math.ceil(Math.random() * 100);
            arr[i] = element;
            console.log(arr[i]);
        }
        arr.sort(function (a, b) {
            return a - b;
          });
        setArr([...a, ...arr]);
        
           // console.log(a);
            setDisable(true)
            // for(let i=0; i<16; i++){
            //     console.log(a[i]);
            // }

    }
    
    const renderarr = a.map((num , idx) => {
        
        return(
            <div className="container">
            <div className="arr" key={idx}>
                {num}
            </div>   
            </div>
            
        );
    }
    );
    // const [val , setValue] = useState();
    const [data, setData] = useState({name: 0});
//the create an onInputChange function for the Inputs this way
const onInputChange = async e =>{
  const {name, value} = e.target;
  //check to validate if entry is not a number
    data[name] = value;
    //somehow update data
    setData({...data})
    
}
    
    const linear = () => {
        var i=0;
        function myLoop() {
            const axp = document.getElementsByClassName('arr');
            const pxa = axp[i].style;
            setTimeout(function(){
                if(a[i] == data.name){
                    console.log("yes");
                    pxa.backgroundColor = '#29ff0c';
                    //alert("NUMBER MIL GAYA");
                    return;
                }
                else{
                    pxa.backgroundColor = '#fa5b55';
                    pxa.textDecoration = "line-through";
                    if(i<15){
                        i++;
                        myLoop();
                    }
                    else{
                        alert("Number not found");
                    }
                }
            }, 300)
            
        }
        myLoop();
        console.log("no");
        //alert("NUMBER NHI MILA");
    }
    const binary = () => {
        var s=0;
        var e=15;
        var mid = Math.floor((s+e)/2);
        function wloop() {
            const axp = document.getElementsByClassName('arr');
            const pxa = axp[mid].style;
            pxa.backgroundColor = 'yellow';
            setTimeout(() => {
                if(a[mid] == data.name){
                    pxa.backgroundColor = '#29ff0c';
                    return;
                }
                else if(a[mid] > data.name){
                    for(let i=mid+1; i<=e; i++){
                        axp[i].style.backgroundColor = '#fa5b55';
                        axp[i].style.textDecoration = "line-through";
                    }
                    e= mid-1;
                    mid = (s+e)/2;
                    
                }
                else if(a[mid] < data.name){
                    for(let i=s; i<mid; i++){
                        axp[i].style.backgroundColor = '#fa5b55';
                        axp[i].style.textDecoration = "line-through";
                    }
                    s= mid+1;
                    mid = Math.floor((s+e)/2);
                    
                }
                if(s<=e){
                    wloop();
                }
                else{
                    alert("Number not found");
                }
            }, 1000)
        }
        wloop();
    }
    
    return(
        <div className="Searchpage">
            <div className="buttons">
            <button class="btn btn-lg btn-primary" type="button" disabled={disable} onClick={generatearr}>Generate Array!</button>
            <button type="button" class="btn btn-secondary btn-lg" onClick={() => window.location.reload(true)}>Reset</button>
            </div>
            <div className="co">
                {renderarr}
                
            </div> 
            <div class="d-grid gap-2 col-6 mx-auto">
                
                <p className="enter">Enter a number </p>
                <input type="number" name="name" className="inputnum" onChange={onInputChange}/>
              <button class="btn btn-primary" type="button" onClick={linear} >Linear Search</button>
              <button class="btn btn-primary" type="button" onClick={binary}>Binary Search</button>
             </div>
            
        </div>
    );
    
}

export default Searchpage;