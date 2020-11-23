import React from 'react';
import {Text, TouchableOpacity, View, StatusBar } from 'react-native'
import Styles from '../Components/Styles'

export default class Home extends React.Component{

    addCar(){
        this.props.navigation.navigate('Vehicle')
    }

    render(){
        return(
            <View style={Styles.body}>
                <StatusBar backgroundColor="black" />
                <View style={Styles.header}>
                    <Text style={Styles.textColor} >bubbl.</Text>
                </View>

                <View style={Styles.heading}>
                    <Text style={Styles.headerText} >My Vehicles</Text>
                </View>

                <View style={{justifyContent:'center', alignContent:'center', flex: 1, alignItems:'center'}}>
                    <Text>You haven’t listed any vehicles yet…</Text>
                </View>

                <View style={Styles.buttons}>
                    <TouchableOpacity style={Styles.btn} onPress={()=>{this.addCar()}}>
                        <Text style={Styles.btnText} >Add a Vehicle</Text>
                    </TouchableOpacity>
                </View>
               
                
            </View>
        )
    }
}