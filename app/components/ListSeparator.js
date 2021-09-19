import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import colors from '../config/colors';

export default function ListSeparator() {
  return (
    <View style={styles.separate}/>
  );
}

const styles = StyleSheet.create({
    separate:{
        width:"100%",
        height:1,
        backgroundColor:colors.lightGrey
    }
})
