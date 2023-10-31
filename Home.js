import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Teka de Inicio</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignSelf: 'center'
    }
})