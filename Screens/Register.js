import React from 'react';
import {Text, TouchableOpacity, View, StatusBar, TextInput } from 'react-native'
import Styles from '../Components/Styles'

export default class Register extends React.Component{
    render(){
        return(
            <View style={Styles.body}>
            <StatusBar backgroundColor="black" />
            <View style={Styles.header}>
                <Text style={Styles.textColor} >bubbl.</Text>
            </View>

            <View style={Styles.heading}>
                <Text style={Styles.headerText} >Add a Vehicle</Text>
            </View>

            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                <TextInput style={Styles.textInputs} placeholder="First Name" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} placeholder="Surname" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} placeholder="Email Address" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} placeholder="Cellphone Number" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} placeholder="New Password" placeholderTextColor="black" />
            </View>

            <View style={Styles.buttons}>

                <View style={{alignContent:'center', width:'90%', marginLeft:'8.5%',}}>
                <Text style={{ marginBottom: 20, opacity: 0.5}}>Before creating your account, please read our <Text style={{textDecorationLine:'underline'}}> terms of use </Text>and  <Text style={{textDecorationLine:'underline'}}>data policy.</Text></Text>
                </View>

                <TouchableOpacity style={Styles.btn} onPress={()=>{this.addCar()}}>
                    <Text style={Styles.btnText} >Create Account</Text>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity style={Styles.regbtn} onPress={()=>{this.props.navigation.goBack()}}>
                    <Text style={{color : '#009DFF', fontSize: 17}} >I already have an account</Text>
                </TouchableOpacity>

                <Text style={{alignSelf:'center', marginTop: 20, opacity: 0.5}}>Copyright 2020, Built by Oathe</Text>

            </View>
           
            
        </View>
        )
    }
}