import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Camera,Permissions} from "expo-camera";
import {BarCodeScanner} from "expo-barcode-scanner";

export default class TransactionScreen extends Component {
constructor(){
super()
this.state = {
estadoapp:"normal",
permissão:null,
escaniou:false,
oqueescaniou:""
}
}

  render() {
    if(this.state.estadoapp!="normal"){
    return(<BarCodeScanner onBarCodeScanned = {this.state.escaniou?undefined:this.escaniamentos} style = {StyleSheet.absoluteFillObject}
    ></BarCodeScanner>)
    }
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>{this.permissao("modopermissao")}}>
      <Text style = {{fontFamily:"EBGaramond_400Regular"}}>Permitir acesso a câmera</Text>
      </TouchableOpacity>
      </View>
    );
  }
  escaniamentos = async ({type,data}) => {
  this.setState({
  escaniou:true,
  estadoapp:"normal",oqueescaniou:data
  })
  }
  permissao = async estadoapp => {
  var {status} = await Camera.requestCameraPermissionsAsync()
  this.setState({
  permissao:status == "granted",
  escaniou:false,
  estadoapp:estadoapp
  })
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
