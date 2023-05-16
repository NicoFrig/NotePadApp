import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface NotesData {
    title: string;
    text: string;
}

export interface NoteReducer {
    notesData?: NotesData;
}

const initialState: NoteReducer = {
    notesData: undefined,
};

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        getNotesLoading: (state) => state,
        getNotesSuccess: (state, action:PayloadAction<any>) => ({
            ...state,
            notesData: action.payload,
        }),
        getNotesError: (state) => state,
    },
});

export const noteActions = {
    ...noteSlice.actions,
};

export default noteSlice.reducer;
