import { View,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText'

export default function PickerItem({item,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View>
            <AppText style={styles.text}>{item.label}</AppText>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text:{
        padding:15
    }
})