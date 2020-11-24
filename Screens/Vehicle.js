import React from 'react';
import {Text, TouchableOpacity, View, StatusBar, TextInput, Alert } from 'react-native'
import Styles from '../Components/Styles'

export default class Vehicle extends React.Component{
    constructor(){
        super()
        this.state = {
            make: '',
            model : '',
            year : '',
            plate : ''
        }
    }


    addVehicle(){
        if (this.state.make != '' && this.state.model != '' && this.state.year != '' && this.state.plate){
            this.props.navigation.navigate('Documents',  {make:this.state.make, model:this.state.model, year: this.state.year, plate : this.state.year })
        }else{
            Alert.alert('','Please enter your Vehicle details')
        }
    }


    render(){
        return(
            <View style={Styles.body}>
            <StatusBar backgroundColor="black" />
            <View style={Styles.header}>
                <Text style={Styles.textColor} >bubbl.</Text>
            </View>

            <View style={Styles.heading}>
                <Text style={Styles.headerText} >Add a Vehicle</Text>
                <Text style={{fontSize: 18, fontWeight:'bold', marginTop: 10}}>Basic Details</Text>
            </View>

            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                <TextInput style={Styles.textInputs} onChangeText={(text)=>{this.setState({make:text})}} placeholder="Vehicle Make (Toyota)" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} onChangeText={(text)=>{this.setState({model:text})}} placeholder="Vehicle Model (Hilux)" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} onChangeText={(text)=>{this.setState({year:text})}} placeholder="Model Year (2019)" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} onChangeText={(text)=>{this.setState({plate:text})}} placeholder="Number Plate " placeholderTextColor="black" />
            </View>

            <View style={Styles.buttons}>
                <TouchableOpacity style={Styles.btn} onPress={()=>{this.addVehicle()}}>
                    <Text style={Styles.btnText} >Continue</Text>
                </TouchableOpacity>
            </View>
           
            
        </View>
        )
    }
}