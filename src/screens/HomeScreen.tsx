import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import products from '../data/products';
import ProductCard from '../ProductCard';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product List</Text>
      <FlatList data={products} keyExtractor={(item)=>item.id} renderItem={({item})=><ProductCard product={item} onPress={()=>navigation.navigate('ProductDetails',{prod:item})} />}></FlatList>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    heading:{
      fontWeight:'bold',
      fontSize:25,
      paddingVertical:50,
    }
})