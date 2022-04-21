import React from 'react'
import {View, Text, StyleSheet,  TouchableOpacity, ScrollView} from 'react-native'
import { TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
const HomeScreen = ({navigation}) => {return(
<View style={{ flex: 1 }}>
<BannerAd
unitId={'ca-app-pub-4515670409707693/5160193301'}
size={BannerAdSize.SMART_BANNER}
requestOptions={{
requestNonPersonalizedAdsOnly: true,}}
onAdLoaded={() => {
console.log('Advert loaded');}}
onAdFailedToLoad={(error) => {
console.error('Advert failed to load: ', error);}}
/>
    <ScrollView style={{width :'80%', alignSelf : 'center', marginTop : 20}}>
<Text style={styless.text}>Welcome to Happy Health India Business. If you want to earn wealth along with health, HHI is way to go. Products are cheaper to buy. And you can also get so many offers.
    If you want to know more, click this button
</Text>
<TouchableOpacity style={styless.button} onPress={() => navigation.navigate('Info')}>
<Text style={styless.textStyle}>Lets Get Started</Text>
</TouchableOpacity>
</ScrollView>
</View>)
}



export default HomeScreen

const styless = StyleSheet.create({
    text : {
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