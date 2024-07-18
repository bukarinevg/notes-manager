'use client'

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Note, { INote } from "@/models/Note";
import AddNoteForm from "@/components/AddNoteForm";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addNote } from "@/lib/features/notesSlice";

export default function HomePage({
    existingNotes = [],
} : {
    existingNotes?: INote[],
}) {
  const [modalStatus, setModalStatus] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const notes = useAppSelector((state) => state.notes.list);
  const hasDispatched = useRef(false);
  const dispatchState = useAppDispatch();

  useEffect(() => {
    if(notes.length === 0 && !hasDispatched.current){
      dispatchState(addNote(existingNotes));
      hasDispatched.current = true; // Mark as dispatched
    } 
    setModalStatus(false);
  }, [notes]);

  const handleModalAddNoteForm = () => {
    setModalStatus(true);
    setFormKey(formKey + 1);
  }

  return (
    <>
        <header className="h-5">
          <FontAwesomeIcon className="h-5 text-darkPrimary cursor-pointer" icon={faPlus} 
          onClick={handleModalAddNoteForm} />
        </header>

        {
          notes.length > 0 &&
          <main className="mt-3">
              {notes.map((note) => (
                  note && note._id &&
                  <Card key={note._id.toString()} note={note} />
              ))}
          </main>
        }
        <Modal title="Add note" modalStatus={modalStatus} setModal={setModalStatus}>
          <AddNoteForm key={formKey}  />
        </Modal>
    </>
  );
}

{/* 
 <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatchState(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatchState(decrement())}
        >
          Decrement
        </button>
      </div>  */
}
    