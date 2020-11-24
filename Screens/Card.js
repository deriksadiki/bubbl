import React from 'react';
import {Text, TouchableOpacity, View, StatusBar, TextInput, Modal } from 'react-native'
import Styles from '../Components/Styles'
import Auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';

export default class Card extends React.Component{

    constructor(){
        super()
        this.state = {
            make: '',
            model : '',
            year : '',
            plate : '',
            ownerPic : '',
            ownerPlate : '',
            ID : '',
            owner: '',
            Pictures: [],
            showModal : false
        }
    }

    componentDidMount(){
        this.setState({
            plate: this.props.route.params.plate,
            make : this.props.route.params.make,
            model : this.props.route.params.model,
            year : this.props.route.params.year,
            ownerPic : this.props.route.params.ownerPic,
            ownerPlate : this.props.route.params.ownerPlate,
            ID : this.props.route.params.ID,
            owner: this.props.route.params.owner,
            pictures: this.props.route.params.pictures
        })
    }

    save(){
        let user = Auth().currentUser;
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        database().ref('Vehicles/' + user.uid).push({
            pictures: this.state.Pictures, 
            ID: this.state.ID, 
            owner: this.state.owner, 
            ownerPic: this.state.ownerPic, 
            ownerPlate: this.state.ownerPlate,
            make:this.state.make, 
            model:this.state.model, 
            year: this.state.year, 
            plate : this.state.year,
            dateTime : dateTime
        })
    }

    render(){
        return(
            <View style={Styles.body}>
            <StatusBar backgroundColor="black" />
            <View style={Styles.header}>
                <Text style={Styles.textColor} >bubbl.</Text>
            </View>

            <View style={Styles.heading}>
                <Text style={Styles.headerText} >Payment</Text>
                <Text style={{fontSize: 18, fontWeight:'bold', marginTop: 10}}>Receive Payment</Text>
            </View>

            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                <TextInput style={Styles.textInputs} placeholder="Account Number" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} placeholder="Bank" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} placeholder="Branch Code" placeholderTextColor="black" />
                <TextInput style={Styles.textInputs} placeholder="Account Holder’s Name" placeholderTextColor="black" />
            </View>

                <View style={{marginTop: 20,alignSelf:'center'}}>

                    <Text style={{color:'#009DFF', fontSize: 16, alignSelf:'center'}}>Use existing account details</Text>

                    <TouchableOpacity style={Styles.bank}>
                        <Text>1452452562 | Capitec</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.bank}>
                        <Text>9943456789 | Nedbank</Text>
                    </TouchableOpacity>
                </View>

            <View style={Styles.buttons}>
                <TouchableOpacity style={Styles.btn} onPress={()=>{this.setState({showModal:true})}}>
                    <Text style={Styles.btnText} >Go Live</Text>
                </TouchableOpacity>
            </View>
           
           <Modal visible={this.state.showModal} animationType="slide"  > 
            <View style={Styles.body}>

            <View style={Styles.header}>
                <Text style={Styles.textColor} >bubbl.</Text>
            </View>

            <View style={Styles.heading}>
                <Text style={Styles.headerText} >All Done!</Text>
            </View>


            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center', marginTop: 50, marginLeft: 20, marginRight: 20}}>
                    <Text style={{fontWeight:'bold', fontSize: 18}}>We’ll send you rental requests by email, SMS and via the app.</Text>
            </View>


            <View style={Styles.buttons}>
                <TouchableOpacity style={Styles.btn} onPress={()=>{this.setState({showModal:false},()=>{ this.props.navigation.popToTop()})}}>
                    <Text style={Styles.btnText} >Done</Text>
                </TouchableOpacity>
            </View>

            </View>
           </Modal>
            
        </View>
        )
    }
}