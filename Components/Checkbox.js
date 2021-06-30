import React, { useRef } from 'react'
import { Pressable, View, Animated, Easing } from 'react-native'

const Checkbox = (props) => {
  let anan = true
  const size = useRef(new Animated.Value(0)).current

  const toggle = (state) => {
    anan = !anan
    props.onChange(state)
    Animated.timing(size, {
      toValue: state ? 1 : 0,
      duration: 240,
      useNativeDriver: true,
      easing: Easing.exp
    }).start()
  }

  return (
    <Pressable onPress={() => toggle(anan)}>
      <View style={{
        width: 32,
        height: 32,
        borderColor: '#ffffff',
        borderWidth: 3,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Animated.View style={{
          width: 19.5,
          height: 19.5,
          backgroundColor: '#ffffff90',
          borderRadius: 5,
          transform: [{
            scale: size
          }]
        }} />

      </View>
    </Pressable>
  )
}

export default Checkbox