import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import colors from '../config/colors'

export default function Card( {title,subTitle,image}) {
    return (
        <View style={styles.card}>
        <Image style={styles.image} source={image}></Image>

        <View style={styles.detailContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text  style={styles.subTitle}>{subTitle}</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:  {
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20,
        overflow:"hidden",
    },
    image:{
        width:"100%",
        height:200,
    },
    detailContainer:{
        padding:20,
    },
    title:{
        marginBottom:20,
    },
    subTitle:{
        fontWeight:"bold",
        color:colors.secondary
    }
}) 
