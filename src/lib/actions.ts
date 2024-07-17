'use server';

import Category from "@/models/Category";
import Note, { INote } from "@/models/Note";
import connectToDatabase from "@/lib/mongoose";


type createNoteState = {
    errors?: {
        title?: string | null,
        content?: string | null,
    }| null,
    message?: string|null,

}
export async function createNote(
    prevState: createNoteState,
    queryData: FormData,
){
    await connectToDatabase();

    try {
        const data = {
            title: queryData.get("title"),
            content: queryData.get("content"),
        };
        
        const newNote = new Note(data);

        console.log(newNote);

        console.log(await newNote.save());

       

        return {
            note: newNote,
            errors: {
            },
            message: "Note created successfully",
        };
    } catch (error) {
        console.error("Failed to create note:", error);
        return {
            note: {} as INote,
            message: 'Failed to create note. Please try again.',
        };
    }
}

export async function deleteNote(_id: string){
    await connectToDatabase();
    try {
        await Note.findByIdAndDelete(_id);
        return {
            message: 'Note deleted successfully',
        };
    }
    catch(error){
        console.error("Failed to delete note:", error);
        return {
            message: 'Failed to delete note. Please try again.',
        };
    }
}