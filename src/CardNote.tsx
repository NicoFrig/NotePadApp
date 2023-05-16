import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import exampleText from './env/exampleText';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeNavigationParams} from './HomeNavigation';
import {useAppDispatch, useAppSelector} from './utils/customHook';
import {ReduxState} from './redux/store/reduxStore';
import {noteActions} from './redux/slices/note/note.slice';

type NavProps = StackScreenProps<HomeNavigationParams, 'CardNote'>;
interface Props extends NavProps {}
const CardNote = (props: Props) => {
    const {navigation} = props;
    const dispatch = useAppDispatch();
    const notes = useAppSelector((state:ReduxState) => state.notes.notesData);

    useEffect(() => {
        dispatch(noteActions.getNotesLoading());
    },[dispatch]);
    const onCardPress = () => {
        navigation.navigate('CardDetail');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.cardContainer} onPress={onCardPress}>
                <Text style={styles.titleStyle}>Title</Text>
                <Text style={styles.text} ellipsizeMode={'tail'} numberOfLines={4}>
                    {exampleText}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CardNote;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    cardContainer: {
        backgroundColor: '#00000033',
        marginBottom: 50,
        borderRadius: 10,
        padding: 10,
    },
    titleStyle: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 18,
    },
    text: {
        color: 'black',
        fontSize: 14,
    },
});
