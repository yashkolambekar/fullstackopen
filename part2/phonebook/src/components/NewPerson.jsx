import { useState } from "react";

const NewPerson = ({ persons, setPersons }) => {

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const newNameChange = (e) => {
    setNewName(e.target.value);
  };

  const newNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name == newName) {
        alert(`${newName} is already added to phonebook`);
        setNewName("");
        return;
      }
    }
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].number == newNumber) {
        alert(`${newNumber} is already added to phonebook`);
        setNewNumber("");
        return;
      }
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName("");
    setNewNumber("");
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={newNameChange} />
      </div>
      <div>
        number:{" "}
        <input type="number" value={newNumber} onChange={newNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default NewPerson;
