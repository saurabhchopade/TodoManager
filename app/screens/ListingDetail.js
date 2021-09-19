import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';

export default function ListingDetail() {
  return (
    <View>
    <Image style={styles.image}  source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006_edit_1.jpg'}}></Image>
      <Text></Text>
     </View>
  );
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"300"
    }
})