'use client'

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Note, { INote } from "@/models/Note";
import AddNoteForm from "@/components/AddNoteForm";
import Card from "@/components/Card";
import Modal from "@/components/Modal";

export default function HomePage({
    existingNotes = [],
} : {
    existingNotes?: INote[],
}) {
  const [modalStatus, setModalStatus] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const [notes, setNotes] = useState(existingNotes);

  useEffect(() => {
    console.log('notes');
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

        <main className="mt-3">
            {notes.map((note) => (
                <Card key={note._id.toString()} note={note} />
            ))}
        </main>

        <Modal title="Add note" modalStatus={modalStatus} setModal={setModalStatus}>
          <AddNoteForm key={formKey} notes={notes} setNotes={setNotes} />
        </Modal>
    </>

  );
}
