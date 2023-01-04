import { useEffect, useState } from 'react'
import { getAreaData } from './api'

import './App.css'

function App() {

  const [areas, setAreas] = useState([]);
  const [postcode, setPostcode] = useState("BB10");
  const [pcodeStr, setPcodeStr] = useState("");

  const load = async () => {
    try {
      const areaData = await getAreaData(postcode);
      setAreas(areaData);
    } catch (error) {
      window.alert("todo: fix app")
    }
  }

  const handleChange = (e) => {
    setPcodeStr(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostcode(pcodeStr);
  }

  useEffect(() => {
    load();
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form className="postcode-form">
        <fieldset>
          <p>Please enter an outcode to search<br/>
          eg - "M1” rather than “M1 7ED”</p>
          <label htmlFor="postcode">Postcode: </label>
          <input type="text" id="postcode" name="postcode" placeholder="Enter a postcode..." onChange={handleChange} /><br/>
          <button onClick={handleSubmit}>Submit</button>
        </fieldset>
      </form>
      <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
    </div>
  )
}

export default App
