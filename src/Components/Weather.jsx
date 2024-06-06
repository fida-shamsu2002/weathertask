import React, {  useState } from 'react'
import './Weather.css'
// https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=7f43863472b944ccaeacf77f44501752

  
function Weather(){

    const[value,setValue]=useState('');
    const[weather,setWeather]=useState({
        temprature:"",
        location:"",
        speed:"",
        humidity:"",
        feels:""
    });

    const SearchCity=()=>{

        if(value===""){
            alert("Dont be a fool! Enter Something")
            return 0;
        }
        else{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=7f43863472b944ccaeacf77f44501752`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data); 
            let loc=data.name;
            let temp=Math.round(data.main.temp);
            let spd=Math.round(data.wind.speed);
            let hum=data.main.humidity;
            let like=Math.round(data.main.feels_like)

            const wdata={
                temprature:temp,
                location:loc,
                speed:spd,
                humidity:hum,
                feels:like
            }
            setWeather(wdata);
        }
        );

        }
    }

  return (

   
<div>
<table>
<div className='container'>
        <h1 style={{marginRight:'900px', marginTop:'1px'}}>Today </h1>

        <div  className="main">
        {/* Header Section */}
        <div className="searchbar">
            <div className="searchbox">
            <input style={{marginRight:'900px'}} type="text" placeholder='Enter City Name' onChange={e=>setValue(e.target.value)}/>
            <br /> <br />
            <div className="searchbtn">
                <button style={{marginRight:'900px'}}  onClick={SearchCity}>Search</button>
            </div>
            </div>
            
        </div>

        {/* location and temprature part */}
        <div className="maindisplay">
            <div style={{marginRight:'800px'}} className='templocation'>
            <h1 style={{marginRight:'800px'}}>{weather.temprature+"°c"}</h1>
            <p>{weather.location}</p>
            <b>Feels like: {weather.feels+"°c"}</b>
            </div>
           
         
               
             
        </div>


        {/* bottomdisplay */}
  

        </div>
    </div>
</table>
</div>
  )
}

export default Weather