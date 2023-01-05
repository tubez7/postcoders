import { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";

import AreaCard from "./components/AreaCard";
import PostcodeForm from "./components/PostcodeForm";

function App() {
  const [areas, setAreas] = useState([]);
  const [postcode, setPostcode] = useState("BB10");

  const load = async () => {
    try {
      const areaData = await getAreaData(postcode);
      setAreas(areaData);
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  useEffect(() => {
    load();
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <PostcodeForm setPostcode={setPostcode} />
      <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
     
      <div className="area-cards">
        {areas.map((area) => {
          return (
            <AreaCard
              key={area["place name"]}
              abbreviation={area["state abbreviation"]}
              placeName={area["place name"]}
              state={area.state}
              longitude={area.longitude}
              latitude={area.latitude}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
