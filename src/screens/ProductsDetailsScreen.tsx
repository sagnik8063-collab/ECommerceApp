import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ProductsDetailsScreen = () => {
  const route=useRoute();
  const {prod}=route.params;
  const navigation=useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>navigation.goBack()} style={styles.back}>
        <FontAwesomeIcon icon={faXmark}/>
      </Pressable>
      <Image source={{uri:prod.image}} style={styles.photo}></Image>
      <Text style={styles.title}>{prod.title}</Text>
      <Text style={styles.desc}>{prod.description}</Text>
      <View style={styles.column}>
        <View style={styles.row}>
          <Text style={styles.cell}>Category: {prod.category}</Text>
          <Text style={styles.cell}>Rating: {prod.rating}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Price: Rs.{prod.price}</Text>
          <Text style={styles.cell}>Stock: {prod.inStock?'Available':'Not Available'}</Text>
        </View>
        
      </View>

    </View>
  )
}

export default ProductsDetailsScreen

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
  },
  photo:{
    width:200,
    height:200,
    borderRadius:100,
    marginTop:100
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    paddingTop:20,
  },
  desc:{
    fontSize:20,
    fontWeight:'bold',
    paddingVertical:40,
    textAlign:'center',
    paddingHorizontal:20,
  },
  column:{
    flexDirection:'row',
    borderWidth:1,
  },
  row:{
    flexDirection:'column',
    paddingHorizontal:20,
    borderWidth:1
  },
  cell:{
    fontSize:15,
    padding:4,
    fontWeight:'bold',
  },
  back:{
    marginTop:40,
    left:130,
    top:60
  }

})