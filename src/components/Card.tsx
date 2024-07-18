'use client'

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


import { INote } from "@/models/Note";
import { deleteNote, updateNote } from "@/lib/actions";
import { useAppDispatch } from "@/lib/hooks";
import { removeNote, editNote } from "@/lib/features/notesSlice";
import { stat } from "fs/promises";

export default function Card(
    {
      note
    }
    :
    { 
       note: INote
    }
)  {
    const [isEditing, setIsEditing] = useState(false);
    const updateNoteWithId = updateNote.bind(null, note._id);

    const[ state, dispatch ] = useFormState( updateNoteWithId, 
        {errors: {}, message: '', note: {} as INote});
        
    const dispatchState = useAppDispatch();
    const handleEdit = () => {
        setIsEditing(!isEditing);   
    }

    const handleDelete = () => {
        dispatchState(removeNote(note._id));    
        deleteNote(note._id.toString());
    }

    useEffect( () => {
        if(state?.note?._id){
            dispatchState(editNote(state.note));
            setIsEditing(false);
        }
       
    }, [state]);


    return (
        <>
            <div className="card ">
                <div className="flex gap-2  justify-between w-full">
                <div className="flex-grow">
                    <h2 
                        className="text-2xl font-bold text-left mb-1"
                        style={{display: isEditing ? 'none' : 'block'}}
                    >{note.title}</h2>
                    <div 
                        className="text-gray-600 text-left whitespace-pre-wrap"
                        style={{display: isEditing ? 'none' : 'block'}}
                    >
                        {note.content}
                    </div>

                    <form 
                        id="editForm"
                        style={{display: isEditing ? 'block' : 'none'}}
                        action={dispatch} 
                        className="w-full"
                    >
                    
                        <label className="text-gray-600 text-left mt-2">Title</label>
                        <input  
                            defaultValue={note.title}
                            style={{display: isEditing ? 'block' : 'none'}}
                            type="text" 
                            name="title"  
                            className="mt-2 p-2 w-full border border-gray-300 rounded-md text-darkPrimary"  
                            required 
                        />

                        <label className="text-gray-600 text-left mt-2">Description</label>
                        <textarea
                            rows={3}
                            defaultValue={note.content}
                            required 
                            name="content"
                            className="mt-2 p-2 w-full border border-gray-300 rounded-md text-darkPrimary"  
                        />   
                        {
                            state.message && <div className="text-red-500 text-sm mb-4">{state.message}</div>
                        }
                        <div className="flex justify-start">
                            <button type="submit" className="bg-darkSecondary text-white px-2 py-1 rounded-md">Update</button>
                        </div>
                        
                    </form>
                </div>
                <div className="flex flex-col justify-around items-end">
                    <FontAwesomeIcon 
                        icon={faEye}
                        style={{display: isEditing ? 'block' : 'none'}}
                        onClick={handleEdit}
                    ></FontAwesomeIcon>                   
                    <FontAwesomeIcon
                        style={{display: isEditing ? 'none' : 'block'}}
                        onClick={handleEdit} 
                        icon={faEdit}
                        className="text-darkPrimary cursor-pointer" 
                    />
                    <FontAwesomeIcon onClick={handleDelete} icon={faTrash} className="text-red-500 cursor-pointer" />

                </div>
                </div>

                
               
            </div>
        </>
        
    );   
}