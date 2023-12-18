import { useState, useEffect } from "react";
import personsServices from "../services/persons";

const Persons = ({ persons, search, setPersons, setMessage, setMood }) => {
  const [toBeShown, setToBeShown] = useState([]);

  const deletePerson = (id) => {
    personsServices
      .delPerson(id)
      .then((status) => {
        if (status == 200) {
          const newPersons = persons.filter((person) => person.id != id);
          setPersons(newPersons);
        }
      })
      .catch((error) => {
        const newPersons = persons.filter((person) => person.id != id);
        setPersons(newPersons);
        const person = persons.find((obj) => obj.id == id);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setMood(false);
        setMessage(
          `Information of ${person.name} was already removed from the server`
        );
      });
  };

  useEffect(() => {
    let templist = [];
    if (search !== "") {
      persons.forEach((person) => {
        if (person.name.substring(0, search.length) === search) {
          templist.push(
            <>
              <p key={person.name + Math.random()}>
                {person.name}: {person.number}
                <button
                  key={person.name + Math.random() + 1}
                  onClick={() => deletePerson(person.id)}
                >
                  Delete
                </button>
              </p>
            </>
          );
        }
      });
    } else {
      templist.push(
        persons.map((person) => (
          <>
            <p key={person.name + Math.random()}>
              {person.name}: {person.number}
              <button
                key={person.name + Math.random() + 1}
                onClick={() => deletePerson(person.id)}
              >
                Delete
              </button>
            </p>
          </>
        ))
      );
    }
    setToBeShown(templist);
  }, [search, persons]);

  return <>{toBeShown}</>;
};

export default Persons;
