import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeNavigationParams} from './HomeNavigation';
import {useAppDispatch, useAppSelector} from './utils/customHook';
import {noteActions, SingleData} from './redux/slices/note/note.slice';
import {loadedNotes} from './redux/slices/note/note.selector';
import {ReduxState} from './redux/store/reduxStore';
import {Icon} from '@rneui/themed';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

type NavProps = StackScreenProps<HomeNavigationParams, 'CardNote'>;
interface Props extends NavProps {}
const CardNote = (props: Props) => {
    const {navigation} = props;
    const dispatch = useAppDispatch();
    const notes = useAppSelector((state:ReduxState) => loadedNotes(state));
    const valueOffset = useSharedValue(0);
    useEffect(() => {
        dispatch(noteActions.getNotesLoading());
    },[dispatch]);
    const onCardPress = (index:number) => {
        navigation.navigate('CardDetail', {index:index});
    };
    const onAddPress = () => {
        valueOffset.value = withTiming(8000 + valueOffset.value, {duration:1000} );
        setTimeout(() => {
            navigation.navigate('CardDetail',{index:undefined});
            setTimeout(() => {
                valueOffset.value = 0;
            },400);
        }, 600);
    };

    const scalingStyle = useAnimatedStyle(() => {
        return {
            width:valueOffset.value,
            height:valueOffset.value,
            backgroundColor: interpolateColor(
                valueOffset.value,
                [0,8000],
                ['#59CECE', '#FFFFFF'],
            ),
        };
    });

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
            <View style={{backgroundColor:'#59CECE', position:'absolute', bottom:'4%', right:'10%',padding:5, borderRadius:9999, alignItems:'center', justifyContent:'center'}}>
                {/*<FAB placement={'right'} color={'#59CECE'} icon={{name:'add', color:'white'}} onPress={onAddPress}/>*/}
                <TouchableOpacity style={{backgroundColor:'#59CECE', alignItems:'center', borderRadius:9999}} onPress={onAddPress}>
                    <Icon name="add" size={40} color="white"/>
                </TouchableOpacity>
                <Animated.View style={[scalingStyle, {backgroundColor:'#59CECE', position:'absolute',borderRadius:9999}]}/>
            </View>
        </View>
    );
};

export default CardNote;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor:'white',
    },
    cardContainer: {
        backgroundColor: '#00000033',
        marginBottom: 20,
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
