import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import NewPerson from "./components/NewPerson";
import Persons from "./components/Persons";
import axios from "axios";
import personsService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [mood, setMood] = useState(true);
  
  const initPersons = () => {
    personsService.getAll().then((response) => {
      setPersons(response);
    }
    )
  }
  
  const newSearch = (e) => {
    setSearch(e.target.value);
  };
  
  useEffect(initPersons, []);
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} mood={mood}/>
      <Filter search={search} newSearch={newSearch}/>
      <h2>add a new</h2>
      <NewPerson persons={persons} setPersons={setPersons} setMessage={setMessage} setMood={setMood}/>
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} setPersons={setPersons} setMessage={setMessage} setMood={setMood}/>
    </div>
  );
};

export default App;
