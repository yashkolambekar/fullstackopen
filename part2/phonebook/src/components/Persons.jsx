import { useState, useEffect } from "react";

const Persons = ({ persons, search }) => {
  const [toBeShown, setToBeShown] = useState([]);

  useEffect(() => {
    let templist = [];
    if (search !== "") {
      persons.forEach((person) => {
        if (person.name === search) {
          templist.push(
            <p key={person.name + Math.random()}>
              {person.name}: {person.number}
            </p>
          );
        }
      });
    } else {
      templist.push(
        persons.map((person) => (
          <p key={person.name + Math.random()}>
            {person.name}: {person.number}
          </p>
        ))
      );
    }
    setToBeShown(templist);
  }, [search, persons]);

  return <>{toBeShown}</>;
};

export default Persons;