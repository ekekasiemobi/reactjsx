import React, {useState} from "react";
import './styles.css';


function Time() {

    let time = new Date().toLocaleTimeString();
    // console.log(time);

    const [hour,setHour ] = useState(time)

    function GetTime(){
      const update =new Date().toLocaleTimeString();
        setHour(update)
    }

  setInterval(GetTime, 1000)

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={GetTime}>Get Time</button>
    </div>
  );
}

export default Time;



//Challenge:
//1. Given that you can get the current time using:
// let time = new Date().toLocaleTimeString();
// console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
