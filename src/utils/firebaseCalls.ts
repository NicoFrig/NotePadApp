import firestore from '@react-native-firebase/firestore';
import {NotesData} from '../redux/slices/note/note.slice';

export async function getNotes ()  {
    const data = await firestore().collection('allNotes').doc('nota').get();
    const allData = await firestore().collection('allNotes').get();
    return allData.docs;
}
