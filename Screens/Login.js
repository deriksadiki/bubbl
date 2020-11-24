import React from 'react';
import {Text, TouchableOpacity, View, StatusBar, TextInput, Alert } from 'react-native'
import Styles from '../Components/Styles'
import LoadingModal from './LoadingModal'
import Auth from '@react-native-firebase/auth'

export default class Login extends React.Component{

    constructor(){
        super()
        this.state ={
            email: '',
            pass: '',
        }
    }

    SigniIn(){
        if (this.state.email != '' && this.state.pass != ''){
        this.myModal.showModal();
        Auth().signInWithEmailAndPassword(this.state.email, this.state.pass).then(()=>{
            console.log('signed In')
        }).catch(error =>{
            this.myModal.dismissModal();
            Alert.alert('', error.message)
        })
     }else{
         Alert.alert('', 'Please enter the correct email and password')
     }
    }

    reg(){
        this.props.navigation.navigate('Register')
    }

    render(){
        return(
            <View style={Styles.body}>
            <StatusBar backgroundColor="black" />
            <LoadingModal ref={(ref)=>{this.myModal =  ref}} />
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
                <TextInput style={Styles.textInputs} onChangeText={(text)=>{this.setState({email:text})}} placeholder="Email Address" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} placeholder="Password" placeholderTextColor="black" onChangeText={(text)=>{this.setState({pass:text})}} />
                <Text></Text>
                <Text></Text>
                <TouchableOpacity style={Styles.btn2} onPress={()=>{this.SigniIn()}}>
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