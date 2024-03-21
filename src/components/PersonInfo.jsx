/* eslint-disable react/prop-types */
import { GetName } from "./GetName";
import { GetTel } from "./GetTel";
import { GetCity } from "./GetCity";
import { useState } from "react";

export function GetAllInfo({ Name, tel, city, onDelete }) {
  let stateArray = useState(false);
  let isExpanded = stateArray[0];
  let setIsExpanded = stateArray[1];

  const showbutton = (
    <button
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

  return (
    <>
      <h2>
        <GetName Name={Name} />
        &nbsp;&nbsp;{showbutton}
        <button onClick={handleDelete}>Usuń</button>
      </h2>
      {isExpanded && (
        <>
          <h3>
            Tel:
            <GetTel tel={tel} />
          </h3>
          {city && ( //jesli personProps.city czyli zmienna miasta w liscie kontaktow jest 1 czyli inna niz false null czy undefined to zrobi to co jest za znakiem
            <h3>
              City:
              <GetCity city={city} />
            </h3>
          )}
        </>
      )}
      <hr></hr>
    </>
  );
}
