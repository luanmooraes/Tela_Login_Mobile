import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./src/assets/logo.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={()=>{Alert.alert("Cadastro","Você esta cadastrado!")}}
        >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#3C096C',
  },
  
  logo: {
    
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  input:{
    backgroundColor: '#FFF',
    marginTop: 10,
    padding: 10,
    width: 300,
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 5,
  },

  button : {
    width: 300,
    height: 42,
    backgroundColor: '#3498DB',
    marginTop:10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText : {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  }



});

      


