import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import {EBGaramond_400Regular} from "@expo-google-fonts/eb-garamond";
import * as Font from "expo-font";

export default class App extends Component {
  constructor(){
  super()
  this.state = {
  carregoufonte:false
  }
  }
  async fontecarregada(){
  await Font.loadAsync({EBGaramond_400Regular:EBGaramond_400Regular})
  this.setState({caregoufonte:true})
  }
  componentDidMount(){this.fontecarregada()}
  render() {
  if(this.state.carregoufonte){
  return(
  <BottomTabNavigator></BottomTabNavigator>
  )}
  }
}
