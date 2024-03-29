import react from 'react'
import { Dimensions, StyleSheet } from 'react-native'
const width = Dimensions.get('screen').width
const height = Dimensions.get('window').height

export default Styles = StyleSheet.create({
  
    body :{
        flex: 1,
        backgroundColor: 'white'
    },
    header:{
        marginTop : height * 0.02,
        marginLeft : width * 0.03

    },

    textColor :{
        color : '#009DFF',
        fontSize : 23
    },

    heading: {
        marginTop : height * 0.02,
        textAlign : 'center',
        justifyContent: 'center',
        alignItems : 'center'
    },

    headerText:{
        fontWeight : 'bold',
        fontSize: 30
    },

    buttons:{
        position : 'absolute',
        bottom: height * 0.06
    },

    btn :{
        backgroundColor : '#009DFF',
        height : height * 0.07,
        width : width * 0.9,
        marginLeft: width * 0.05,
        textAlign : 'center',
        justifyContent: 'center',
        alignItems : 'center'
    },

    btnText:{
        color :'white',
        fontSize: 17
    },

    textInputs:{
        marginTop: height * 0.04,
        fontSize: 16,
        backgroundColor: '#F2F2F2',
        height: height * 0.065,
        width: width * 0.9,
        textAlign: 'center'
    },

    box:{
        backgroundColor:'#F2F2F2',
        height : height * 0.2,
        width : width * 0.42,
        marginHorizontal: 10,
        textAlign : 'center',
        justifyContent: 'center',
        alignItems : 'center'
    },
    img :{
        height:  height * 0.14,
        width: width * 0.42,
    },
    bank :{
        marginTop: height * 0.04,
        fontSize: 16,
        backgroundColor: '#F2F2F2',
        height: height * 0.065,
        width: width * 0.9,
        textAlign : 'center',
        justifyContent: 'center',
        alignItems : 'center'
    },

    btn2 :{
        backgroundColor : '#009DFF',
        height : height * 0.07,
        width : width * 0.85,
        textAlign : 'center',
        justifyContent: 'center',
        alignItems : 'center'
    },

    regbtn:{
        // backgroundColor : '#009DFF',
        height : height * 0.07,
        width : width * 0.85,
        textAlign : 'center',
        marginLeft: width * 0.075,
        justifyContent: 'center',
        alignItems : 'center',
        borderWidth: 1, 
        borderTopColor : '#009DFF',
        borderBottomColor : '#009DFF',
        borderLeftColor : '#009DFF',
        borderRightColor : '#009DFF',

    },




    
})