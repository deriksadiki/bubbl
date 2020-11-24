import React from 'react';
import {Text, TouchableOpacity, View, StatusBar, TextInput } from 'react-native'
import Styles from '../Components/Styles'

export default class Login extends React.Component{


    reg(){
        this.props.navigation.navigate('Register')
    }

    render(){
        return(
            <View style={Styles.body}>
            <StatusBar backgroundColor="black" />
            <View style={Styles.header}>
                <Text style={Styles.textColor} >bubbl.</Text>
            </View>

            <View style={Styles.heading}>
                <Text style={Styles.headerText} >Sign In</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View>

            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                <TextInput style={Styles.textInputs} placeholder="Email Address" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} placeholder="Password" placeholderTextColor="black" />
                <Text></Text>
                <Text></Text>
                <TouchableOpacity style={Styles.btn2} onPress={()=>{this.addCar()}}>
                    <Text style={Styles.btnText} >Login</Text>
                </TouchableOpacity>
            </View>

            <View style={Styles.buttons}>
                <TouchableOpacity style={Styles.regbtn} onPress={()=>{this.reg()}}>
                    <Text style={{color : '#009DFF', fontSize: 17}}>Create Your Account</Text>
                </TouchableOpacity>
                <Text style={{alignSelf:'center', marginTop: 20, opacity: 0.5}}>Copyright 2020, Built by Oathe</Text>
            </View>

        </View>
        )
    }
}