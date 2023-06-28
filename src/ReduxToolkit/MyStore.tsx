import {configureStore} from '@reduxjs/toolkit'; 
import cartReduccer from './CartSlice';
import  changeTheme  from './ThemeSlice';
import  changeLanguage  from './LanguageSlice';
const MyStore = configureStore({
    reducer: {
        cart: cartReduccer,
        theme: changeTheme, 
        language: changeLanguage
    },
})
export default MyStore; 