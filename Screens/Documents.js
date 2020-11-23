import React from 'react';
import {Text, TouchableOpacity, View, StatusBar, TextInput } from 'react-native'
import Styles from '../Components/Styles'

export default class Documents extends React.Component{
    render(){
        return(
            <View style={Styles.body}>
            <StatusBar backgroundColor="black" />
            <View style={Styles.header}>
                <Text style={Styles.textColor} >bubbl.</Text>
            </View>

            <View style={Styles.heading}>
                <Text style={Styles.headerText} >Add a Vehicle</Text>
                <Text style={{fontSize: 18, fontWeight:'bold', marginTop: 10}}>Documentation</Text>
            </View>

            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center', }}>

                <View style={{flexDirection:'row', marginTop: 30}}>
                <TouchableOpacity style={Styles.box}>
                        <Text style={{fontSize: 15, marginLeft: 8}}>Certificate of ownership</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={Styles.box}>
                        <Text style={{fontSize: 15, marginLeft: 8}}>Picture of number plate</Text>
                    </TouchableOpacity>
          
                    </View>

                    <View style={{flexDirection:'row', marginTop: 30}}>
                    <TouchableOpacity  style={Styles.box}>
                        <Text style={{fontSize: 15, marginLeft: 8}}>Picture of drivers’ license</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.box}>
                        <Text style={{fontSize: 15, marginLeft: 8}}>Picture of ID document</Text>
                    </TouchableOpacity>
                    </View>
       
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