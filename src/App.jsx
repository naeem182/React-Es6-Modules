import { useEffect, useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setwatches] = useState([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const URL = 'watches.json';
    //     const res = await fetch(URL);
    //     const data = await res.json();
    //     setwatches(data)
    //   }
    //   catch (error) {
    //     console.log(error)
    //   };

    //   fetchData()
    // }

    fetch('watches.json')
      .then(res => res.json())
      .then(data => setwatches(data));

  }, [])

  console.log(watches)
  return (
    <>

      <h1>Es6 Modules</h1>


      <h2>Watches </h2>
      {
        watches.map(watch => <Watch watch={watch} ></Watch>)
      }


    </>
  )
}

export default App
