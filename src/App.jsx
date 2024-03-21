import { GetAllInfo } from "./components/PersonInfo";
import { Form } from "./components/Form";
import { useState } from "react";
const initialPeople = [
  {
    Name: "Kacper",
    tel: 60000000,
    city: "Kraków",
  },
  {
    Name: "Filip",
    tel: 50000000,
    city: "Kraków",
  },
];

function App() {
  const [isFormShown, setisFormShown] = useState(false);
  const [people, setPeople] = useState(initialPeople);

  const addPerson = (data) => {
    const newPeople = [...people, data];
    setPeople(newPeople);
    //console.log({ newPeople });
    //console.log({ people });
  };

  const deletePerson = (telefon) => {
    //console.log({ telefon });
    const updatedPeople = people.filter((people) => people.tel !== telefon);
    setPeople(updatedPeople);
  };

  return (
    <>
      <h1>Lista Kontaktow</h1>
      {isFormShown ? (
        <Form onAddPerson={addPerson} />
      ) : (
        <button onClick={() => setisFormShown(true)}>DODAJ</button>
      )}
      {people.map((person) => (
        <GetAllInfo
          key={person.tel}
          Name={person.Name}
          tel={person.tel}
          city={person.city}
          onDelete={deletePerson}
        />
      ))}
    </>
  );
}

export default App;
