'use client'

import { useFormState } from "react-dom";
import { createNote } from "@/lib/actions";
import { useEffect } from "react";
import { INote } from "@/models/Note";

import { increment, decrement } from "@/lib/features/counterSlice";
import { addNote} from "@/lib/features/notesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function AddNoteForm(
) 
{
    const dispatchState = useAppDispatch();

    const[ state, dispatch ] = useFormState( createNote, 
        {errors: {}, message: '', note: {} as INote});

    useEffect(() => {
        if(state.note._id)
        {
            dispatchState(addNote(state.note));
        }
    }, [ state.note ]);

    return (
        <form className="w-full" action={dispatch}>
            <div className="mb-4">
                <label htmlFor="title" className="text-sm font-medium text-gray-600">Title</label>
                <input type="text" name="title" id="title" className="mt-1 p-2 w-full border border-gray-300 rounded-md text-darkPrimary"  required />
            </div>
            <div className="mb-4">
                <label htmlFor="content" className="text-sm font-medium text-gray-600">Content</label>
                <textarea required name="content" id="content" className="text-darkPrimary mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
            </div>
            <div className="text-red-500 text-sm mb-4">{state.message}</div>
            {/* <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select name="category" id="category" className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                </select>
            </div> */}
            <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Note</button>
            </div>
        </form>
    );
}

