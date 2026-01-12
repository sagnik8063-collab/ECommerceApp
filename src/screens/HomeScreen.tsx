import { StyleSheet, Text, View,FlatList, ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import ProductCard from '../ProductCard';
import { useNavigation } from '@react-navigation/native';
import { ProductType } from '../types/productType';
import { fetchProducts } from '../data/fakeApi';

const HomeScreen = () => {
  const page_size=50 ;

  const navigation=useNavigation();

  const [loading,setLoading]=useState(false);
  const [page,setPage]=useState(1);
  const [productslist,setProductslist]=useState<ProductType[]>([]);
  const [endReached,setEndReached]=useState(false);

  useEffect(()=>{
    loadMoreProducts();
  },[]);

  const loadMoreProducts=async()=>{
    if(loading || endReached) return;

    setLoading(true);

    const res=await fetchProducts({page:page,limit:page_size});

    setProductslist(productslist=>[...productslist,...res.data]);
    setPage(page+1);
    setEndReached(!res.hasMore);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product List</Text>
      <FlatList data={productslist} keyExtractor={(item)=>item.id} renderItem={({item})=>(<ProductCard product={item} onPress={()=>navigation.navigate('ProductDetails',{prod:item})} />)}
        onEndReached={loadMoreProducts} onEndReachedThreshold={0.3} ListFooterComponent={loading?<ActivityIndicator size="large"></ActivityIndicator>:null}></FlatList>
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