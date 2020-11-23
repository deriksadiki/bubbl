import React from 'react';
import {Text, TouchableOpacity, View, StatusBar, TextInput } from 'react-native'
import Styles from '../Components/Styles'

export default class Vehicle extends React.Component{

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
                <TextInput style={Styles.textInputs} placeholder="Vehicle Make (Toyota)" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} placeholder="Vehicle Model (Hilux)" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} placeholder="Model Year (2019)" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} placeholder="Number Plate " placeholderTextColor="black" />
            </View>

            <View style={Styles.buttons}>
                <TouchableOpacity style={Styles.btn} onPress={()=>{this.addCar()}}>
                    <Text style={Styles.btnText} >Continue</Text>
                </TouchableOpacity>
            </View>
           
            
        </View>
        )
    }
}