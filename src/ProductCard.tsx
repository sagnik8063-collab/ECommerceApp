import { StyleSheet, Text, Pressable ,Image,View} from 'react-native'
import React from 'react'
import { ProductType } from './types/productType'

export interface props{
  product:ProductType,
  onPress:() => void
}

const ProductCard = ({product,onPress}:props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{uri:product.image}} style={styles.image}></Image>
      <View style={styles.container2}>
        <Text style={styles.prodname}>{product.title}</Text>
        <Text style={styles.prodprice}>Rs.{product.price}</Text>
      </View>
    </Pressable>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:10,
        borderWidth:1,
    },
    image:{
      width:100,
      height:100,
      borderRadius:50
    },
    container2:{
      flexDirection:'row',
      paddingHorizontal:20,
    },
    prodname:{
      paddingHorizontal:20,
      fontSize:15,
      fontWeight:'semibold',
    },
    prodprice:{
      fontSize:15,
      fontWeight:'semibold',
    }
})