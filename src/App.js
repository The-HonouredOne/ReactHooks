
import { useState } from 'react';
import './App.css';

const App = () => {
  const [color, setcolor] = useState('green')
 
  // const changecolor=()=>{()=>{setcolor(setcolor==='green'?'blue':'green')}}
  const changecolor = () => {
    setcolor('blue')
  }


  const [car, setcar] = useState({
    brand: "Farari",
    model: "roma",
    year: "2020",
    color: "red"
  })

  const carchange = () => {
    setcar((prev) => {
      return { ...prev, color: "blue", model: "range" }
    })
  }


  const [counter , setcounter]=useState(0)
  const changecounter=()=>{
    setcounter(counter+1)
  }
  const [multicounter , setmulticounter]=useState(0)
  const changemulticounter=()=>{
    // we can't do this to increse counter by 4..

    // setmulticounter(multicounter+1)
    // setmulticounter(multicounter+1)
    // setmulticounter(multicounter+1)
    // setmulticounter(multicounter+1)


    // instead we have to do this..
setmulticounter(anyname=>anyname+1) //output is 0+1=1
setmulticounter(previ=>previ+1) //output is previes otput value(1)+1=2
setmulticounter(abcd=>abcd+1) //output is previes otput value(2)+1=3
setmulticounter(cdab=>cdab+1) //output is previes otput value(3)+1=4 means increment by 4

  }
  

  return (
    <>
      {/* example for usestate with normal variable */}
      <p>the color is{color} </p>
      <button onClick={changecolor}>button</button>

      {/* example for usestate with object */}

      <h1>my {car.brand}</h1>
      <p>this is {car.color} {car.model} from {car.year}</p>
      <button onClick={carchange}>cars</button>


      {/* example of usestate with single increment */}
      <h1>count: {counter}</h1>
      <button onClick={changecounter}>counter</button>

            {/* example of usestate with multiple increment */}
            <h1>count: {multicounter}</h1>
            <button onClick={changemulticounter}>multiplecounter</button>


    </>
  );
}
export default App
