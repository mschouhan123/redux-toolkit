import React from 'react';
import { View, FlatList, Text, Image, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from './ReduxToolkit/CartSlice';

const CartScreen = () => {
    const addedItem = useSelector( state => state.cart); 
    const dispatch = useDispatch(); 
    const DeleteItems = (item:any) => {
      console.log("11 line cartScreen -->")
          dispatch(removeCartItem(item));
    }
  const renderItem = ({ item, index }:{item:any, index:number}) => (
    <TouchableOpacity onPress={() => {DeleteItems(index)}} style={{ marginBottom: 20 }}>
      <Image source={{uri: item.thumbnail}} style={{ width: 100, height: 100 }} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Button  title='Delete'/>
    </TouchableOpacity>
  );

  return (
    <View>
    <Text>Count of Products :-  {addedItem.length}</Text>
    <FlatList
      data={addedItem}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      />
      </View>
  );
};

export default CartScreen;
