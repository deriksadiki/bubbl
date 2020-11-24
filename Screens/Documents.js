import React from 'react';
import {Text, TouchableOpacity, View, StatusBar, TextInput, Alert, Image } from 'react-native'
import Styles from '../Components/Styles'
import ImagePicker from 'react-native-image-picker';

export default class Documents extends React.Component{

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
            owner: ''
        }
    }

    componentDidMount(){
        this.setState({
            // plate: this.props.route.params.plate,
            // make : this.props.route.params.make,
            // model : this.props.route.params.model,
            // year : this.props.route.params.year
        })
    }

    chooseFile = (number) => {
        var options = {
          title: 'Select Image',
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.showImagePicker(options, response => {
        //   console.log('Response = ', response);
    
          if (response.didCancel) {
            // console.log('User cancelled image picker');
          } else if (response.error) {
            // console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            // alert(response.customButton);
          } else {
            // let source = response;
            // You can also display the image using data:
             let source = 'data:image/jpeg;base64,' + response.data ;
            if (number == 1){
                this.setState({
                    owner: source,
                  });
            }else if (number == 2){
                this.setState({
                    ownerPlate: source,
                  });
            } else if (number == 3){
                this.setState({
                    ownerPic: source,
                  });
            }else{
                this.setState({
                    ID: source,
                  });
            }
          }
        });
      };

    addDocuments(){
        if (this.state.ID != '' && this.state.ownerPic != '' && this.state.owner != '' && this.state.ownerPlate != ''){
            this.props.navigation.navigate('Pictures', {ID: this.state.ID, owner: this.state.owner, ownerPic: this.state.ownerPic, ownerPlate: this.state.ownerPlate,make:this.state.make, model:this.state.model, year: this.state.year, plate : this.state.year})
        }else{
            Alert.alert('', 'Please upload the all the required documents')
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
                <Text style={{fontSize: 18, fontWeight:'bold', marginTop: 10}}>Documentation</Text>
            </View>

            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center', }}>

                <View style={{flexDirection:'row', marginTop: 30}}>
                <TouchableOpacity style={Styles.box}  onPress={()=>{this.chooseFile(1)}}>
                        <Text style={{fontSize: 15, marginLeft: 8}}>Certificate of ownership</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={Styles.box}  onPress={()=>{this.chooseFile(2)}}>
                        <Text style={{fontSize: 15, marginLeft: 8}}>Picture of number plate</Text>
                    </TouchableOpacity>
          
                    </View>

                    <View style={{flexDirection:'row', marginTop: 30}}>
                    <TouchableOpacity  style={Styles.box}  onPress={()=>{this.chooseFile(3)}}>
                        <Text style={{fontSize: 15, marginLeft: 8}}>Picture of drivers’ license</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.box}  onPress={()=>{this.chooseFile(4)}}>
                        
                        <Image source={{ uri: this.state.ID }}
                        style={Styles.img} />
                        <Text style={{fontSize: 15, marginLeft: 8}}>Picture of ID document</Text>
                    </TouchableOpacity>
                    </View>
       
            </View>

            <View style={Styles.buttons}>
                <TouchableOpacity style={Styles.btn} onPress={()=>{this.addDocuments()}}>
                    <Text style={Styles.btnText} >Continue</Text>
                </TouchableOpacity>
            </View>
           
            
        </View>
        )
    }
}