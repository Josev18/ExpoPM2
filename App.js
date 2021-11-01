import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Dimensions } from 'react-native';

const {width, height} = Dimensions.get("screen");

export default function App() {
  return (
    <View style={styles.container}>
      
    <Text style={styles.titulo}>Zara's Store</Text>

    <View style={styles.inputContainer}>
      <TextInput placeholder="Nombre" style={styles.input}/>
    </View>
    <View style={styles.inputContainer}>
      <TextInput secureTextEntry={true} placeholder="Contraseña" style={styles.input}/>
    </View>

    <View>
     <View style={styles.boton1}>
        <Button  color="#66ccff" title="Iniciar Sesión"></Button>
      </View>

      <View style={styles.boton1}>
        <Button color="#66ccff" title="Salir"></Button>
      </View>
    </View>

       
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    width: "100%",
    height: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 810,
    maxWidth: 500,
  },
  contenedor1: {
    flex:1,
    backgroundColor: "#d2c219",
    margin: 20,
    width: "100%",
  },
  contenedor2:{
    flex: 1,
    backgroundColor: "#6f670d",
    width: "100%",
    padding: 20,
  },
  contenedorButtons:{
    flex:3,
    flexDirection:"column",
    marginBottom: 10,
    padding: 10,
    justifyContent: "space-evenly",
    borderRadius: 40,
    backgroundColor:"#fff"
  },
  titulo:{

    fontWeight: 'bold',
    paddingBottom: 100,
  },
  boton1: {
    
    margin:10
    
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: width / 1.3,
    padding: 10,
  },
  
  inputContainer: {
    marginVertical: 30,
  },
});
