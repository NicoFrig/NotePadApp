import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SingleData {
    id:string,
    title: string,
    text: string
}

export interface NoteReducer {
    notesData?: SingleData[];
}

const initialState: NoteReducer = {
    notesData: undefined,
};

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        getNotesLoading: (state) => state,
        getNotesSuccess: (state, action:PayloadAction<SingleData[]>) => ({
            ...state,
            notesData: action.payload,
        }),
        getNotesError: (state) => state,

        setNotesLoading:(state,action:PayloadAction<SingleData>) => state,
        setNotesError:(state) => state,
    },
});

export const noteActions = {
    ...noteSlice.actions,
};

export default noteSlice.reducer;
