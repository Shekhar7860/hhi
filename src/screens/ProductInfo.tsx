import React from 'react'
import {View, Text, StyleSheet,  TouchableOpacity, Linking} from 'react-native'

const ProductInfo = (navigation) => {return(<View style={{ flex: 1,padding : 30, alignItems: 'center', justifyContent: 'center' }}>
<Text style={styless.text}>If you want to register into HHI : {'\n'} 
use this id - HH100002021993
</Text>
<Text style={styless.text2}>For More  Info, call - 7765089491</Text>
<TouchableOpacity style={styless.button} onPress={() => navigation.navigate('Sponsoring')}>
<Text style={styless.textStyle}>Get Product Info</Text>
</TouchableOpacity>
</View>)
}



export default ProductInfo

const styless = StyleSheet.create({
    text : {
        fontSize : 30
    },
    text2 : {
        marginTop : 20,
        fontSize : 30
    },
    button : {
        backgroundColor : 'green',
        width : '80%',
        justifyContent : 'center',
        alignItems : 'center',
        height : 50,
        marginTop : 35
    },
    textStyle : {
        color : '#ffffff',
        fontSize : 20
    }
})