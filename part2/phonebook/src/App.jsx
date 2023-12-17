import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import NewPerson from "./components/NewPerson";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [search, setSearch] = useState("");

  const newSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} newSearch={newSearch}/>
      <h2>add a new</h2>
      <NewPerson persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search}/>
    </div>
  );
};

export default App;
