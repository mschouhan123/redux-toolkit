import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { changeTheme } from './redux/action/Actions';
import { changeTheme } from './ReduxToolkit/ThemeSlice';
const ThemeScreen = ({navigation}: {navigation: any}) => { 

    const dispatch = useDispatch(); 
    
    const themeState = useSelector(state => state.theme); 
    function changeThemeFun(theme:boolean) {
        if(theme){
            dispatch(changeTheme(false));
        }else{
            dispatch(changeTheme(true));
        }
    }

    return <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: themeState == 'Dark'? 'blue': 'red' }}>
        <TouchableOpacity onPress={() => {changeThemeFun(themeState) }} style={{height: '5%', width: '80%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey'}}> 
        <Text>Change Theme </Text>
        </TouchableOpacity>
    </View>
}

export default ThemeScreen;
