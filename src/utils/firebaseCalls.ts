import firestore from '@react-native-firebase/firestore';
import {SingleData} from '../redux/slices/note/note.slice';

export async function getNotes ()  {
    const allData = await firestore().collection('allNotes').get();
    return allData.docs;
}

export async function setNotes (note:SingleData) {
    await firestore().collection('allNotes').doc(note.id).set({title:note.title, text:note.text});
}

export async function addNotes (note:SingleData) {
    await firestore().collection('allNotes').add({title:note.title, text:note.text});
}
