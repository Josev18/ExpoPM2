import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';







export default function App(){
  const [usuario, setUsuario]= useState(null);
  const [contrasena, setContrasena]= useState(null);
  const presIniciarSesion = async () =>{
    if(!usuario || !contrasena){
      console.log("Debe escribir los datos completos");
      Alert.alert("MEDI","Debe escribir los datos completos");
    }
    else{
      try{
          const response = await fetch('http://192.168.1.3:4000/api/autenticacion',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            UsuarioNombre:usuario,
            UsuarioContra:contrasena
          })
          });
          const json = await response.json();
          console.log(json);
          if(json.data.length==0){
            console.log(json.msj);
            Alert.alert("MEDI", json.msj);
          }
          else{
            const cliente=JSON.stringify(json.data);
            await AsyncStorage.setItem('ModeloCliente',cliente);
            console.log(json.msj);
          }
      }catch(error){
        console.error(error);
      }
    }
  };
  
    return(
        
        <View style={styles.container}>
            <View style={styles.LoginContainer}>
                <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Zara's Store</Text>
                </View>
            <View style={styles.ControllerContainer}>
                <View style={styles.controllers}>
                  <View style={styles.PaddingCorreo}>
                  <TextInput value={usuario} onChangeText={setUsuario} placeholder="Correo" placeholderTextColor="#866eb5"  style={styles.input}>
                    </TextInput>
                  </View>
                    
                    <TextInput value={contrasena} onChangeText={setContrasena} placeholder="contrase??a" placeholderTextColor="#866eb5" style={styles.input}>

                    </TextInput>
                </View>
                <View style={styles.contenedorBotones}>
                    <View style={styles.boton}>
                        <Button title="Iniciar Sesi??n" color="#866eb5" onPress={presIniciarSesion}>
                        </Button>
                    </View>
                    <View style={styles.boton}>
                        <Button title="Salir" color="#866eb5">
                        </Button>
                    </View>
                </View>
            </View>
                
                
                
            </View>
            
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: 'center',
        width:"100%",
        height:"100%",
        margin:0,
        padding: 20,
      },
     LoginContainer:{
        alignItems: "stretch",
        justifyContent: 'center',
        height: 530,
        width: 360,
     }, 
     titleContainer:{
        flex: 1,
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "flex-end",
     },
     titleStyle:{
        color: "#866eb5" ,
        fontSize: 30,
        fontWeight: "300",
        paddingBottom: 50,
     },
     ControllerContainer: {
        flex: 3,
        flexDirection:"column",
        alignItems: "stretch",
        justifyContent:"center",
        
        backgroundColor:"#fff",
        padding:10,
      },
      
      
      controllers:{
        flex:4,
        //backgroundColor: "#29291f",
        marginBottom: 10,
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
      },
      input:{
        alignItems:"stretch",
        margin:10,
        padding:10,
        fontSize: 15,
        fontWeight:"400",
        color: "#495057",
        backgroundColor:"#fff",
        borderWidth:1,
        borderRadius: 15,
        borderColor: "black",
        
      },
      contenedorBotones:{
        flex:1,
        padding: 10,
        justifyContent:"space-evenly",
        flexDirection: "row",
      },
      boton:{
        flex:1,
        alignItems:"stretch",
        marginLeft:10,
        marginRight:10,
      },
      PaddingCorreo:{
        paddingBottom:50,
      }
});