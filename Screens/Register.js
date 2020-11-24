import React from 'react';
import {Text, TouchableOpacity, View, StatusBar, TextInput, Alert } from 'react-native'
import Styles from '../Components/Styles'
import Auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import LoadingModal from './LoadingModal'

export default class Register extends React.Component{

    constructor(){
        super()
        this.state = {
            name : '',
            surname : '',
            pass : '',
            email : '',
            cell: '',
        }
    }

    register(){
        if (this.state.name != '' && this.state.surname != '' && this.state.pass != '' && this.state.email && this.state.cell != ''){
            this.myModal.showModal();
            Auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).then(()=>{
                let user = Auth().currentUser;
                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date+' '+time;
                database().ref('users/' + user.uid).set({
                    email: this.state.email,
                    cellPhone: this.state.cell,
                    name :  this.state.name,
                    date: dateTime,
                    surname : this.state.surname,
                    password : this.state.pass,
                })
            }).catch(error =>{
                this.myModal.dismissModal();
                Alert.alert('', error.message)
            })
        }else{
            Alert.alert('Please fill in your details to register')
        }
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
                <Text style={Styles.headerText} >Add a Vehicle</Text>
            </View>

            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                <TextInput style={Styles.textInputs} onChangeText={(text)=>{this.setState({name:text})}} placeholder="First Name" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} onChangeText={(text)=>{this.setState({surname:text})}} placeholder="Surname" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} onChangeText={(text)=>{this.setState({email:text})}} placeholder="Email Address" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} onChangeText={(text)=>{this.setState({cell:text})}} placeholder="Cellphone Number" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} onChangeText={(text)=>{this.setState({pass:text})}}  placeholder="New Password" placeholderTextColor="black" secureTextEntry/>
            </View>

            <View style={Styles.buttons}>

                <View style={{alignContent:'center', width:'90%', marginLeft:'8.5%',}}>
                <Text style={{ marginBottom: 20, opacity: 0.5}}>Before creating your account, please read our <Text style={{textDecorationLine:'underline'}}> terms of use </Text>and  <Text style={{textDecorationLine:'underline'}}>data policy.</Text></Text>
                </View>

                <TouchableOpacity style={Styles.btn} onPress={()=>{this.register()}}>
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