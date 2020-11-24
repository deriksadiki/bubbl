import React from 'react';
import {Text, TouchableOpacity, View, StatusBar, TextInput, Alert } from 'react-native'
import Styles from '../Components/Styles'

export default class Pictures extends React.Component{
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
            Pictures: []
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
            owner: this.props.route.params.owner
        })
    }

    addPictures(){
        if (this.state.Pictures.length >=2){
            this.props.navigation.navigate('Card',{pictures: this.state.Pictures, ID: this.state.ID, owner: this.state.owner, ownerPic: this.state.ownerPic, ownerPlate: this.state.ownerPlate,make:this.state.make, model:this.state.model, year: this.state.year, plate : this.state.year})
        }else{
            Alert.alert('','Please note that you have to add a minimum of 2 pictures before you can continue')
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
                <Text style={{fontSize: 18, fontWeight:'bold', marginTop: 10}}>Vehicle Images</Text>
            </View>

            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center', }}>

                <View style={{flexDirection:'row', marginTop: 30}}>
                <TouchableOpacity style={Styles.box}>
                        <Text style={{fontSize: 15, marginLeft: 8}}>Picture 1</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={Styles.box}>
                        <Text style={{fontSize: 15, marginLeft: 8}}>Picture 2</Text>
                    </TouchableOpacity>
          
                    </View>

                    <View style={{flexDirection:'row', marginTop: 30}}>
                    <TouchableOpacity  style={Styles.box}>
                        <Text style={{fontSize: 15, marginLeft: 8}}>Picture 3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.box}>
                        <Text style={{fontSize: 15, marginLeft: 8}}>Picture 4</Text>
                    </TouchableOpacity>
                    </View>
       
            </View>

            <View style={Styles.buttons}>
                <TouchableOpacity style={Styles.btn} onPress={()=>{this.addPictures()}}>
                    <Text style={Styles.btnText} >Confirm Listing</Text>
                </TouchableOpacity>
            </View>
           
            
        </View>
        )
    }
}