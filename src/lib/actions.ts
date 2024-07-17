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
        console.log(data);
        const newNote = new Note(data);

        // Step 3: Save the new Note to the database
        await newNote.save();

        console.log(newNote);

        // Step 4: Update createNoteState with a success message
        return {
            note: newNote,
            errors: {
                
            },
            message: "Note created successfully",
        };
    } catch (error) {
        console.error("Failed to create note:", error);
        // Update createNoteState with error information
        return {
            note: {} as INote,
            message: 'Failed to create note. Please try again.',
        };
    }
}