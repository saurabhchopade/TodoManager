import React from 'react';
import { View, Text,Modal } from 'react-native';
import LottieView from 'lottie-react-native';

export default function RegisterIndicator({visible="false"}) {

    if(!visible) return null;
  return (
    <Modal>
      <LottieView autoPlay loop  source={require("../../assets/animations/login.json")}>
      </LottieView>
    </Modal>
  );
}
