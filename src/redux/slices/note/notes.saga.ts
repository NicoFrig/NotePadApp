import {call, put, takeLeading} from 'typed-redux-saga';
import {addNotes, getNotes, setNotes} from '../../../utils/firebaseCalls';
import {noteActions, SingleData} from './note.slice';

function* getNotesFromFirebase() {
    const allNotes = yield* call(getNotes);
    const notesData = allNotes.map((item) => {
        const response:SingleData = {id:item.id, title:item.data().title, text:item.data().text};
        return response;
    });
    yield put(noteActions.getNotesSuccess(notesData));
}
function* setNoteToFirebase({payload}: {payload:SingleData}) {
    yield* call(setNotes, payload);
}

function* addNoteToFirebase({payload}: {payload:SingleData}){
    yield* call(addNotes, payload);
}
export default function* notesSaga() {
    yield* takeLeading(noteActions.getNotesLoading, getNotesFromFirebase);

    yield* takeLeading(noteActions.setNotesLoading, setNoteToFirebase);
    yield* takeLeading(noteActions.addNotesLoading, addNoteToFirebase);

    yield* takeLeading(noteActions.setNotesLoading, getNotesFromFirebase);
    yield* takeLeading(noteActions.addNotesLoading, getNotesFromFirebase);
}
