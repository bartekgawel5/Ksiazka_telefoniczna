import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { GetAllInfo } from "./components/PersonInfo";
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
    setisFormShown(false);
    console.log({ data });
  };

  const deletePerson = (telefon) => {
    const updatedPeople = people.filter((people) => people.tel !== telefon);
    setPeople(updatedPeople);
  };

  // useEffect(() => {
  //   console.log(edittedPersonId);
  // }, [edittedPersonId]);

  const funeditDataPerson = (editdata) => {
    console.log(editdata);
    setPeople((actualpeople) => {
      const updatedPeople = actualpeople.map((person) => {
        if (person.tel === editdata.tel) {
          person.Name = editdata.editName;
          person.city = editdata.editcity;
          person.tel = editdata.edittel;
          return person;
        }
        return person;
      });
      return updatedPeople;
    });
  };

  return (
    <div>
      <h1>LISTA KONTAKTÓW</h1>
      {isFormShown ? (
        <>
          <Form onAddPerson={addPerson} />
          <button
            className="addButtonSchowaj"
            onClick={() => setisFormShown(false)}
          >
            Schowaj
          </button>
        </>
      ) : (
        <button className="addButton" onClick={() => setisFormShown(true)}>
          DODAJ
        </button>
      )}
      <ul>
        {people.map((person) => (
          <GetAllInfo
            key={person.tel}
            Name={person.Name}
            tel={person.tel}
            city={person.city}
            onDelete={deletePerson}
            onEditDataPerson={funeditDataPerson}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
