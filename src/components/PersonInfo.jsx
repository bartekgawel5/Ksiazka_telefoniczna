import { GetName } from "./GetName";
import { GetTel } from "./GetTel";
import { GetCity } from "./GetCity";
import { useState } from "react";

export function GetAllInfo(personProps) {
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

  return (
    <>
      <h2>
        <GetName Name={personProps.Name} />
        &nbsp;&nbsp;{showbutton}
      </h2>
      {isExpanded && (
        <>
          <h3>
            Tel:
            <GetTel tel={personProps.tel} />
          </h3>
          {personProps.city && ( //jesli personProps.city czyli zmienna miasta w liscie kontaktow jest 1 czyli inna niz false null czy undefined to zrobi to co jest za znakiem
            <h3>
              City:
              <GetCity city={personProps.city} />
            </h3>
          )}
        </>
      )}
      <hr></hr>
    </>
  );
}
