import { createSlice } from "@reduxjs/toolkit";
import Note, { INote } from "@/models/Note";



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
    add: (state, action) => {

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
    remove: (state, action) => {
        state.list = state.list.filter((note) => note._id !== action.payload);
    },
  },
});

export const { add, remove } = notesSlice.actions;
export default notesSlice.reducer;