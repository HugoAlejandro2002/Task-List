import React, { useState } from "react";
import { IconButton } from "./IconButton";
import plus from "../assets/add.svg";

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  return (
    <>
      <div className="flex flex-col items-center h-screen p-10">
        Tareas
        {tareas.map((tarea) => {
          return <Tarea tarea={tarea} />;
        })}
      </div>
      <div className="absolute right-3 bottom-3 w-10 h-10">
        <IconButton src={plus} onClick={() => console.log("plus")} />
      </div>
    </>
  );
};
