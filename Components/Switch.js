import React, { useEffect, useRef, useState } from 'react'
import {
  Text,
  View,
  Animated,
  Pressable,
  Easing
} from 'react-native'


const Switch = (props) => {
  const position = useRef(new Animated.Value(0)).current

  const toggle = (state) => {
    props.onChange(state)
    Animated.timing(position, {
      toValue: state ? 120 : 0,
      duration: 240,
      useNativeDriver: true,
      easing: Easing.exp
    }).start()
  }

  return (
    <View style={{
      width: 240,
      height: 40,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff80'

    }}>
      <Animated.View style={{
        width: 120,
        height: '100%',
        backgroundColor: 'blue',
        position: 'absolute',
        backgroundColor: '#ffffff',
        zIndex: 2,
        transform: [{ translateX: position }],
        borderRadius: 10,
      }} />

      <Pressable onPress={() => toggle(false)} style={{
        width: 120,
        height: '100%',
        position: 'absolute',
        zIndex: 30,
        left: 0,
      }}>
        <Text style={{
          color: 'blue',
          width: 120,
          height: '100%',
          textAlign: 'center',
          lineHeight: 37
        }}>{props.options[0]}</Text>
      </Pressable>

      <Pressable onPress={() => toggle(true)} style={{
        width: 120,
        height: '100%',
        position: 'absolute',
        zIndex: 30,
        right: 0,
      }}>
        <Text style={{
          color: 'blue',
          height: '100%',
          textAlign: 'center',
          lineHeight: 37
        }}>{props.options[1]}</Text>
      </Pressable>
    </View>
  )
}

export default Switch