import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Form from "./components/Form";
import axios from "axios";
import ListCountries from "./components/ListCountries";

function App() {
  const [search, setSearch] = useState("");
  const [toShow, setToShow] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/countries").then((response) => {
      setData(response.data);
      // console.log(response.data);
    });
  }, []);

  useEffect(() => {
    if (data) {
      if (search == "") {
        setToShow([]);
        return;
      }

      let temp = [];
      let foundExact = false;
      for (let i = 0; i < data.length; i++) {
        const thisCountry = data[i];
        if (thisCountry.name.common.toLowerCase() == search.toLowerCase()) {
          setToShow([thisCountry]);
          foundExact = true;
          break;
        } else if (
          thisCountry.name.common.toLowerCase().includes(search.toLowerCase())
        ) {
          temp.push(thisCountry);
        }
      }
      if(!foundExact){
        setToShow(temp);
      }
      foundExact = false;
    }
  }, [search]);

  return (
    <>
      <Form search={search} setSearch={setSearch} />
      <br />
      <br />
      <ListCountries toShow={toShow} setSearch={setSearch} />
    </>
  );
}

export default App;
