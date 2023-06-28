import {createSlice} from '@reduxjs/toolkit'; 

const initialState = 'English'; 

const themeSlice = createSlice({
    name: 'language', 
    initialState, 
    reducers: {
        changeLanguage(state, action){
          console.log(action)  
          state == 'English'? state = 'Hindi' : state = 'English'; 
          return state;
        },
    },
});

export const {changeLanguage}= themeSlice.actions;
export default themeSlice.reducer; 