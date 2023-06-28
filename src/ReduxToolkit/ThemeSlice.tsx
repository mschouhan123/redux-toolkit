import {createSlice} from '@reduxjs/toolkit'; 

const initialState = 'Dark'; 

const themeSlice = createSlice({
    name: 'theme', 
    initialState, 
    reducers: {
        changeTheme(state, action){
          console.log(action)  
          state == 'Dark'? state = 'Light' : state = 'Dark'; 
          return state;
        },
    },
});
export const {changeTheme}= themeSlice.actions;
export default themeSlice.reducer; 