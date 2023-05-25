import {ReduxState} from '../../store/reduxStore';
import {createSelector} from '@reduxjs/toolkit';

interface NotesSelectorParams {
    index:number
}

export const selectAllNotes = (state: ReduxState) => state.notes.notesData;

const selectIndex = (_: ReduxState, params: NotesSelectorParams) => params.index;

export const loadedNotes = createSelector(
    [selectAllNotes],
    (notes) => {
        if (!notes) {return null;}
        return notes;
    }
);

export const singleNoteByIndex = createSelector(
    [selectAllNotes, selectIndex],
    (notes, index) => {
        if (!notes) {return;}
        return notes[index];
    }
);
