import {ReduxState} from '../../store/reduxStore';
import {createSelector} from '@reduxjs/toolkit';

export const selectAllNotes = (state: ReduxState) => state.notes.notesData;

export const loadedNotes = createSelector(
    [selectAllNotes],
    (notes) => {
        if (!notes) {return null;}
        return notes;
    }
);
