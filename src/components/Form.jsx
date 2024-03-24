/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Form.css";
export function Form({ onAddPerson }) {
  const [Name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddPerson({ Name, city, tel });
      }}
    >
      <div>
        <input
          className="inputData"
          defaultValue={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="Name"
          placeholder="imię"
        />
      </div>
      <div>
        <input
          className="inputData"
          type="tel"
          defaultValue={tel}
          onChange={(e) => {
            setTel(e.target.value);
          }}
          name="tel"
          placeholder="numer"
        />
      </div>
      <div>
        <input
          className="inputData"
          type="text"
          defaultValue={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          name="city"
          placeholder="miasto"
        />
      </div>
      <div>
        <button
          className="addButton"
          disabled={Name.length === 0 || tel.length === 0}
        >
          Dodaj kontakt
        </button>
      </div>
    </form>
  );
}
