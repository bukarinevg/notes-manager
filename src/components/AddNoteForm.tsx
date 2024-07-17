'use client'

import { useFormState } from "react-dom";
import { createNote } from "@/lib/actions";
import { useEffect } from "react";
import { INote } from "@/models/Note";

import { increment, decrement } from "@/lib/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function AddNoteForm(
   {notes, setNotes} : {notes: INote[], setNotes: (notes: INote[]) => void}
) 
{

    const count = useSelector((state : RootState) => state.counter.value)
    const dispatchState = useDispatch();

    const[ state, dispatch ] = useFormState( createNote, 
        {errors: {}, message: '', note: {} as INote});

    useEffect(() => {
        if(state.note._id)
            setNotes([...notes, state.note]);
    }, [ state.note ]);

    return (
        <form className="w-full" action={dispatch}>

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
      </div>

            <div className="mb-4">
                <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
                <input type="text" name="title" id="title" className="mt-1 p-2 w-full border border-gray-300 rounded-md text-darkPrimary"  required />
            </div>
            <div className="mb-4">
                <label htmlFor="content" className="text-sm font-medium text-gray-700">Content</label>
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

