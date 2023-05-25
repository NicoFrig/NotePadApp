import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeNavigationParams} from './HomeNavigation';
import {useAppDispatch, useAppSelector} from './utils/customHook';
import {noteActions, SingleData} from './redux/slices/note/note.slice';
import {loadedNotes} from "./redux/slices/note/note.selector";
import {ReduxState} from "./redux/store/reduxStore";

type NavProps = StackScreenProps<HomeNavigationParams, 'CardNote'>;
interface Props extends NavProps {}
const CardNote = (props: Props) => {
    const {navigation} = props;
    const dispatch = useAppDispatch();
    const notes = useAppSelector((state:ReduxState) => loadedNotes(state));
    useEffect(() => {
        dispatch(noteActions.getNotesLoading());
    },[dispatch]);
    const onCardPress = (index:number) => {
        navigation.navigate('CardDetail', {index:index});
    };
    const renderItem = ({item, index} : {item:SingleData, index:number}) => {
        return (
            <TouchableOpacity style={styles.cardContainer} onPress={() => onCardPress(index)}>
                <Text style={styles.titleStyle}>{item.title}</Text>
                <Text style={styles.text} ellipsizeMode={'tail'} numberOfLines={4}>
                    {item.text}
                </Text>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList data={notes} renderItem={renderItem} />
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
