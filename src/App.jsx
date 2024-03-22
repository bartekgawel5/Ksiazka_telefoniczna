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
  // const editPerson = (idTel) => {
  //   setEdittedPersonId(idTel);
  //   console.log({ ideditTel, idTel });
  //   //funEditPerson(editDataPerson, ideditTel);
  // };
  //DataPer, IdTel
  //function funEditPerson() {
  //  console.log("nic");
  //}

  return (
    <>
      <h1>Lista Kontaktow</h1>
      {isFormShown ? (
        <Form onAddPerson={addPerson} />
      ) : (
        <button onClick={() => setisFormShown(true)}>DODAJ</button>
      )}
      <>
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
      </>
    </>
  );
}

export default App;
