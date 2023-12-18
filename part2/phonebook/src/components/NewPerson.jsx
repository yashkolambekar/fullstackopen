import { useState } from "react";
import personsService from "../services/persons";

const NewPerson = ({ persons, setPersons, setMessage, setMood }) => {
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
        if (
          window.confirm(
            `${newName} is already added to phonebook, do you want to replace the number?`
          )
        ) {
          const newObj = persons.find((obj) => obj.name == newName);
          const id = newObj.id;
          newObj.number = newNumber;
          personsService.updateValue(id, newObj).then((rtnObj) => {
            setPersons(
              persons.map((person) => {
                if (person.id == rtnObj.id) {
                  return rtnObj;
                } else {
                  return person;
                }
              })
            );
          });
          setNewNumber("");
          setTimeout(() => {
            setMessage(null);
          }, 3000);
          setMood(true);
          setMessage(`${newName}'s number is updated!`);
        }
        setNewName("");
        return;
      }
    }
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].number == newNumber) {
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setMood(false);
        setMessage(`Number ${newNumber} already exists!`);
        setNewNumber("");
        return;
      }
    }
    const newObject = { name: newName, number: newNumber };
    personsService
      .create(newObject)
      .then((data) => {
        setPersons([...persons, data]);
        setNewName("");
        setNewNumber("");
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setMood(true);
        setMessage(`${newName} added successfully!`);
        setNewNumber("");
      })
      .catch((error) => {
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setMood(false);
        setMessage(`An error occured!`);
      });
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
