/* eslint-disable react/prop-types */
import { GetName } from "./GetName";
import { GetTel } from "./GetTel";
import { GetCity } from "./GetCity";
import { useState } from "react";
import "./PersonInfo.css";

export function GetAllInfo({ Name, tel, city, onDelete, onEditDataPerson }) {
  let [isExpanded, setIsExpanded] = useState(false);
  const [editName, setEditName] = useState(Name);
  const [edittel, setEditTel] = useState(tel);
  const [editcity, setEditCity] = useState(city);

  const showbutton = (
    <button
      className="buttonPerson"
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {isExpanded ? "Schowaj" : "Pokaż"}
    </button>
  );

  const handleDelete = () => {
    onDelete(tel);
  };

  const handleEdit = () => {
    onEditDataPerson({ editName, editcity, edittel, tel });
  };
  return (
    <li className={isExpanded ? "active" : ""}>
      <h2>
        <GetName Name={Name} />
        <br></br>
        {showbutton}
        <button className="buttonPerson" onClick={handleDelete}>
          Usuń
        </button>
        <button className="buttonPerson" onClick={handleEdit}>
          Edytuj
        </button>
      </h2>
      {isExpanded && (
        <>
          <h3>
            Imie:
            {Name}
          </h3>
          <h3>
            Telefon:
            <GetTel tel={tel} />
          </h3>
          {city && ( //jesli personProps.city czyli zmienna miasta w liscie kontaktow jest 1 czyli inna niz false null czy undefined to zrobi to co jest za znakiem
            <h3>
              Miasto:
              <GetCity city={city} />
            </h3>
          )}
          <input
            className="editInput"
            type="text"
            id="fname"
            name="Name"
            placeholder="Imie"
            defaultValue={Name}
            onChange={(e) => {
              setEditName(e.target.value);
              console.log(e.target.value);
            }}
          />
          <br></br>
          <input
            className="editInput"
            type="text"
            id="fcity"
            name="city"
            placeholder="Miasto"
            defaultValue={city}
            onChange={(e) => {
              setEditCity(e.target.value);
              console.log(e.target.value);
            }}
          />
          <br />
          <input
            className="editInput"
            type="tel"
            id="ftel"
            name="tel"
            placeholder="Telefon"
            defaultValue={tel}
            onChange={(e) => {
              setEditTel(e.target.value);
              console.log(e.target.value);
            }}
          />
        </>
      )}
    </li>
  );
}
