import axios from "axios";
import { useEffect, useState } from "react";

const Weather = ({ city, countryname }) => {
  const [temp, setTemp] = useState(0);
  const [wind, setWind] = useState(0);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    console.log("request made");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryname}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
      )
      .then((response) => {
        setTemp((response.data.main.temp /10));
        setWind(response.data.wind.speed );
        setIcon(response.data.weather[0].icon)
      });
  }, [countryname]);
  return (
    <>
      <p>Weather in {city}</p>
      <p>Temprature: {temp}</p>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <p>Winds: {wind} m/s</p>
    </>
  );
};

const ListCountries = ({ toShow, setSearch }) => {
  if (toShow.length > 10) {
    return (
      <>
        <p>Too many countries, write more</p>
      </>
    );
  } else if (toShow.length > 1) {
    return (
      <>
        {toShow.map((country) => {
          return (
            <>
              <p key={country.name.common}>
                {country.name.common}{" "}
                <button key={country.name.common} onClick={() => setSearch(country.name.common)}>
                  Show
                </button>
              </p>
            </>
          );
        })}
      </>
    );
  } else if (toShow.length == 1) {
    const country = toShow[0];

    let langs = [];
    Object.keys(country.languages).forEach((key) => {
      langs.push(<li key={key}>{country.languages[key]}</li>);
    });

    return (
      <>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <p>Languages</p>
        <ul>{langs}</ul>
        <br />
        <img
          style={{ "box-shadow": "0px 0px 20px 0px rgba(0,0,0,0.3)" }}
          width={"200px"}
          src={country.flags.png}
        />
        <br />
        <Weather city={country.capital} countryname={country.name.common} />
      </>
    );
  }
};

export default ListCountries;
