import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function ActivityIndicator({visible="false"}) {

    if(!visible) return null;
  return (
      <LottieView autoPlay loop  source={require("../../assets/animations/loading.json")}>
      </LottieView>
  );
}
