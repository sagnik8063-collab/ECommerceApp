import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput placeholder='Enter email' value={email} onChangeText={setEmail} style={styles.textfield}></TextInput>
      <TextInput placeholder='Enter password' value={password} onChangeText={setPassword} secureTextEntry style={styles.textfield}></TextInput>
      <Button title='Login' onPress={()=>navigation.replace('Home')}></Button>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    heading:{
        fontWeight:'bold',
        fontSize:24,
        padding:25,
    },
    textfield:{
        width:300,
        borderStyle:'solid',
        borderColor:'black',
        borderRadius:1,
        borderWidth:1,
        marginBottom:10,
    }
})