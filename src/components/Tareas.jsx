import React, { useState } from "react";
import { IconButton } from "./IconButton";
import plus from "../assets/add.svg";
import { Tarea } from "./Tarea";
import { Modal } from "./Modal/Modal";
import { Form } from "./Form/Form";

export const Tareas = () => {
    const [tareas, setTareas] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const addTarea = () => {
        setShowModal(true);
    };

    return (
        <>
            <div className="flex flex-col items-center h-screen p-10">
                <span className="text-3xl font-bold">Tareas</span>
                {tareas.map((tarea) => {
                    return (
                        <Tarea
                            {...tarea}
                            setTareas={setTareas}
                            tareas={tareas}
                            key={tarea.id}
                        />
                    );
                })}
            </div>
            <div className="absolute right-3 bottom-3 w-10 h-10">
                <IconButton src={plus} onClick={addTarea} />
            </div>
            {showModal && (
                <Modal setModal={setShowModal} title={"Nueva Tarea"}>
                    <Form setCloseForm={setShowModal} setNewItem={setTareas}/>
                </Modal>
            )}
        </>
    );
};
