import { createSlice } from "@reduxjs/toolkit";
import Note, { INote } from "@/models/Note";
import { updateNote } from "../actions";



interface NotesState {
  list: INote[];
}

const initialState: NotesState = {
  list: [],
};


const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      if (action.payload instanceof Array) {
        for (let note of action.payload) {
          if (note) {
           
            state.list.push(note);
          }
        }
        return;
      }
      
      state.list.push(action.payload);
      
    },
    removeNote: (state, action) => {
        state.list = state.list.filter((note) => note._id !== action.payload);
    },
    editNote: (state, action) => {
      const noteIndex = state.list.findIndex((note) => note._id === action.payload._id);
      if (noteIndex !== -1) {
        state.list[noteIndex] = action.payload;
      }
    },
  },
});

export const { addNote, removeNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;