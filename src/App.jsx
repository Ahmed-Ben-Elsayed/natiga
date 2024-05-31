import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  axios from "axios"
function App() {
  let [twon , settwon ] = useState("cairo")
  let [arcity , selectarcity] = useState("القاهرة ")
  const handleChange = (event) => {
    if(event.target.value === 'cairo'){
      selectarcity("القاهرة")
    }
    else if (event.target.value === 'alexandria'){
        selectarcity("الأسكندرية ")
    }
    else if (event.target.value === 'qalyubia'){
        selectarcity("القليوبيه")
    }
    else if (event.target.value === 'port Said'){
        selectarcity("بورسعيد ")
    }
    else if (event.target.value === 'luxor'){
        selectarcity("الاقصر")
    }
    else if (event.target.value === 'dakahlia'){
        selectarcity("الدقهلية")
    }
  
    else if (event.target.value === 'sohag'){
        selectarcity("سوهاج ")
    }
  
    else if (event.target.value === 'gharbia'){
        selectarcity("الغربية  ")
    }
  
    else if (event.target.value === 'asyut'){
        selectarcity("اسيوط  ")
    }
    else if (event.target.value === 'faiyum'){
        selectarcity("الفيوم  ")
    }
    else if (event.target.value === 'sharqia'){
        selectarcity("الشرقية  ")
    }
    settwon(event.target.value)
  };

  //  ................................................................Api....
  let [times , setTimes] = useState([]);
  let [days,setdays] =  useState()
  let [ardate,setardate] = useState([]);
  let [ndate,setndate] = useState([]);
  let[enday , setenday ] = useState([]);
  let [nmonth,setnmonth] = useState([])
  async function getdata(){
    const data = await axios.get(`https://api.aladhan.com/v1/timingsByCity/31-05-2024?city=${twon}&country=Egypt&method=8`)
    setTimes(data.data.data.timings)
    setdays(data.data.data.date.hijri.weekday.ar)
    setardate(data.data.data.date.hijri.date)
    setndate(data.data.data.date.hijri.month.ar)
    setenday(data.data.data.date.readable)
    setnmonth(data.data.data.date.gregorian.month.en)

  }
  useEffect(function(){
    getdata();
  },[twon])
  // /................................................................
  return (
    <>
      <div className='App'>
        <div className='Timer'>
        <h2 className='zkr'>وَاذْكُرْ رَبَّكَ إِذَا نَسِيتَ</h2>
               <div className='timer-up'>
                <div className="timer-left">
                 <h2>{ardate}</h2>
                   <h3>{ndate}</h3> 
                   {/* <h3>{ardate.month.en}</h3>  */}
                </div>
                <div>
                </div>
                <div className="timer-right">
                  <h2>{enday}</h2>
                  <h3>{nmonth}</h3>
                </div>
               </div>
               <hr />
               <h1> اليوم : {days} </h1>
                  <h2>{arcity}</h2>
               <h3>اختر مدينتك </h3>
               <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">المدينه  </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"cairo" }>القاهرة </MenuItem>
          <MenuItem value={"alexandria"}>الأسكندرية</MenuItem>
          <MenuItem value={"qalyubia"}>القليوبيه</MenuItem>
          <MenuItem value={"port Said"}>بورسعيد </MenuItem>
          <MenuItem value={"suez"}> السويس  </MenuItem>
          <MenuItem value={"luxor"}> الأقصر   </MenuItem>
          <MenuItem value={"dakahlia"}> الدقهلية    </MenuItem>
          <MenuItem value={"sohag"}> سوهاج     </MenuItem>
          <MenuItem value={"gharbia"}> الغربية     </MenuItem>
          <MenuItem value={"asyut"}> اسيوط     </MenuItem>
          <MenuItem value={"faiyum"}> الفيوم      </MenuItem>
          <MenuItem value={"sharqia"}> الشرقية       </MenuItem>

        </Select>
      </FormControl>
    </Box>
               <div className='time'>
                    <div className='dohr'>
                          <h2>الفجر </h2>
                          <h3>{times.Fajr}</h3>
                    </div>
                    <div className='dohr'>
                          <h2>الظهر</h2>
                          <h3>{times.Dhuhr} </h3>
                    </div>
                    <div className='dohr'>
                          <h2>العصر </h2>
                          <h3>{times.Asr}</h3>
                    </div>
                    <div className='dohr'>
                          <h2>المغرب </h2>
                          <h3>{times.Maghrib}</h3>
                    </div>
                    <div className='dohr'>
                          <h2>العشاء </h2>
                          <h3>{times.Isha}</h3>
                    </div>
               </div>
        </div>
      </div>
    </>
  )
}

export default App
