import { View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from "@expo/vector-icons"
export default function Icon({name,size=40,backgroundColor="#000",iconColor="white"}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderRadius: size / 2,
        justifyContent:'center',
        alignItems:'center'
      }}
    >
        <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor}/>
    </View>
  );
}
