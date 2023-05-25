import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeNavigationParams} from './HomeNavigation';
import {useAppDispatch, useAppSelector} from './utils/customHook';
import {ReduxState} from './redux/store/reduxStore';
import {singleNoteByIndex} from './redux/slices/note/note.selector';
import {Icon} from '@rneui/themed';
import {noteActions} from './redux/slices/note/note.slice';
type NavProps = StackScreenProps<HomeNavigationParams, 'CardDetail'>;
interface Props extends NavProps {}
const CardDetail = (props:Props) => {
    const { route, navigation} = props;
    const {index} = route.params;
    const singleNote = useAppSelector((state:ReduxState) => singleNoteByIndex(state,{index:index}));
    const [newTitle, setNewTitle] = useState(singleNote?.title);
    const [newText, setNewText] = useState(singleNote?.text);
    const dispatch = useAppDispatch();
    const onBackPress = () => {
        dispatch(noteActions.setNotesLoading({id:singleNote!!.id, title:newTitle!!, text:newText!!}));
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <View style={{width:'100%', alignItems:'flex-start', paddingTop:20}}>
                <TouchableOpacity onPress={onBackPress}>
                    <Icon name={'arrow-back'} type={'MaterialIcons'} size={40}/>
                </TouchableOpacity>
            </View>
            <TextInput onChangeText={typedTitle => setNewTitle(typedTitle)}>{singleNote?.title}</TextInput>
            <TextInput onChangeText={typedText => setNewText(typedText)}>{singleNote?.text}</TextInput>
        </View>
    );
};

export default CardDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft:20
    },
});
