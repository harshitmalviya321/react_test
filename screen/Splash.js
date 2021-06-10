import React ,{ Component, components } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';



export default function Splash({navigation}) {
    return (
        <View style={{flex:1}}>
        <LottieView
            source={require('../assert/LOAD.json')}
            autoPlay loop ={false}
            onAnimationFinish  ={() => {
                navigation.replace('home');
            }}
          />
         </View>
    );
  }
  
