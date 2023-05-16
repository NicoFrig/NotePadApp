import {call, put, takeLeading} from 'typed-redux-saga';
import {getNotes} from '../../../utils/firebaseCalls';
import {noteActions} from './note.slice';
import {all} from "redux-saga/effects";

function* getNotesFromFirebase() {
    const allNotes = yield* call(getNotes);
    const notesData = allNotes.map((item) => {
        return item.data;
    });
    yield put(noteActions.getNotesSuccess(notesData));
}
export default function* notesSaga() {
    yield* takeLeading(noteActions.getNotesLoading, getNotesFromFirebase);
}
