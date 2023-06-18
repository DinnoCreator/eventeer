import { useState } from "react";
import axios from "axios";

const Test = () => {
  const [acc, setAcc] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [width, setAlt] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const geoLocator = () => {
    function widthResizer() {
      let width = window.innerWidth;
      return setAlt(width);
    }
    widthResizer();

    // Getting the width of the browser whenever the screen resolution changes.
    window.addEventListener("resize", widthResizer);
    navigator.geolocation.watchPosition(async (position) => {
      const { accuracy, latitude, longitude } = position.coords;
      // Show a map centered at latitude / longitude.
      setLat(latitude);
      setLong(longitude);
      setAcc(accuracy);

      let res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=ce79536048da40f0a06202113231806&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`
      );
      console.log(res.data);
      setState(res.data.location.region);
      return setCity(res.data.location.name);
    });
  };
  return (
    <div>
      {width === "" || Number(width) > 750 ? (
        <h1 onClick={geoLocator}>please use a phone</h1>
      ) : (
        <>
          <h1 className="stuff" onClick={geoLocator}>
            Test
          </h1>
          <h3>Accuracy: {acc}</h3>
          <h3>Latitude: {lat}</h3>
          <h3>Longitude: {long}</h3>
          <h3>City: {city}</h3>
          <h3>State: {state}</h3>
          <h3>Screen width: {width}</h3>
        </>
      )}
    </div>
  );
};

export default Test;
