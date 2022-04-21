import React from 'react'
import {View, Text, StyleSheet,  TouchableOpacity, Linking, ScrollView} from 'react-native'

const Information = ({navigation}) => {return(<View style={{ flex: 1 }}>
    <ScrollView style={{width :'80%', alignSelf : 'center', marginTop : 20}}>
<Text style={styless.text}>Here you can get different types of products : {'\n'} 
1. Beauty Products
{'\n'} 
2. Grocery Products
{'\n'} 
3. HomeCare
{'\n'} 
4. Health Supplements
</Text>
<Text style={styless.text2}>For More  Info, Visit - <Text style={{color : 'blue'}} onPress={() => Linking.openURL('https://happyhealthindia.co.in/')}>https://happyhealthindia.co.in/</Text></Text>
<TouchableOpacity style={styless.button} onPress={() => navigation.navigate('Spon')}>
<Text style={styless.textStyle}>Sponsoring</Text>
</TouchableOpacity>
</ScrollView>
</View>)
}



export default Information

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