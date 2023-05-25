import React, { useState } from "react";
import { IconButton } from "./IconButton";
import plus from "../assets/add.svg";
import { Tarea } from "./Tarea";

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  return (
    <>
      <div className="flex flex-col items-center h-screen p-10">
        <span className="text-3xl font-bold">Tareas</span>
        {tareas.map((tarea) => {
          return (
            <Tarea
              nombre={tarea.nombre}
              setTareas={setTareas}
              tareas={tareas}
            />
          );
        })}
      </div>
      <div className="absolute right-3 bottom-3 w-10 h-10">
        <IconButton src={plus} onClick={() => console.log("plus")} />
      </div>
    </>
  );
};
