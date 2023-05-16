import {all} from 'redux-saga/effects';
import notesSaga from '../slices/note/notes.saga';
export default function* rootSaga() {
    yield all([
        notesSaga(),
    ]);
}
