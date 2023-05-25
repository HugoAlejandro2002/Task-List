import React from "react";
import { IconButton } from "./IconButton";
import check from "../assets/check.svg";
import cross from "../assets/cross.svg";

export const Tarea = ({ nombre, setTareas, tareas }) => {
  const [checked, setChecked] = useState("");
  const handleCheck = () => {
    console.log("check");
    setChecked("line-through");
  };
  const handleCross = () => {
    console.log("cross");
  };
  return (
    <div className="flex flex-row justify-around align-middle w-22 my-auto rounded-md border-2 border-solid border-gray-400 p-10">
      <div className={checked}>{nombre}</div>
      <div className="flex flex-row w-20 h-5 justify-around">
        <IconButton src={check} onClick={handleCheck} />
        <IconButton src={cross} onClick={handleCross} />
      </div>
    </div>
  );
};
