import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Component } from "react";

export default class Cards extends Component{
    render(){
        return(
            <View style = {{...styles.container, backgroundColor: this.props.bg}}>
                <View style = {styles.col}>
                    <Icon name = {this.props.icon} size = {30} color = {this.props.bg == '#ff3333b4' ? '#fff' : '#ff0000'} />
                </View>
                <Text style = {styles.title}>{this.props.title}</Text>
                <Text styles = {{...styles.number, color: this.props.bg == '#ff3333b4' ? '#fff' : '#000'}}>{this.props.number}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 130, 
        width: 200,
        borderRadius: 13,
        padding: 15, 
        marginLeft: 20,
    },
    col:{
        flexDirection: 'row',
    },
    title: {
        marginTop: 10,
        color: '#yyy',
        fontWeight: 'bold',
        flexShrink: 12,
    },
    nuber: {
        fontWeight: 'bold',
        fontSize: 22,
    }

})