'use client'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { INote } from "@/models/Note";

export default function Card(
    {
      note
    }
    :
    { 
       note: INote
    }
)  {

   
    return (
        <>
            <div className="card ">
                <div className="grid grid-cols-2 justify-between w-full">
                <div>
                <h2 className="text-2xl font-bold text-left mb-1">{note.title}</h2>
                <p className="text-gray-600 text-left">{note.content}</p>
                </div>
                <div className="flex flex-col justify-around items-end">
                   
                    <FontAwesomeIcon icon={faEdit} className="text-darkPrimary cursor-pointer" />
                    <FontAwesomeIcon icon={faTrash} className="text-red-500 cursor-pointer" />
                     
                </div>
                </div>
               
            </div>
        </>
        
    );   
}