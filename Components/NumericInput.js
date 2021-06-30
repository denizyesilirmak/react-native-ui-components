import React, { useEffect, useRef, useState } from 'react'
import { View, FlatList, Text, Pressable, Image, Animated, Easing, StyleSheet } from 'react-native'

import LeftIcon from '../assets/left.png'
import RightIcon from '../assets/right.png'

const NumericInput = (props) => {
  const position = useRef(new Animated.Value(0)).current
  const [index, setIndex] = useState(0)

  useEffect(() => {
    changePosition()
  }, [index])

  const changePosition = () => {
    Animated.timing(position, {
      toValue: -1 * index * 60 ,
      duration: 350,
      useNativeDriver: true
    }).start()
  }

  const handleButtonPress = (direction) => {
    if (direction) {
      //decrease
      if (index > 0) {
        setIndex(index - 1)
      }

    }
    else {
      //increase
      if (index < props.max - props.min) {
        setIndex(index + 1)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.leftButton}
        onPress={() => handleButtonPress(true)}
      >
        <Image source={LeftIcon} style={styles.icons} />
      </Pressable>

      <View style={styles.valueContainer}>
        <Animated.View style={{
          flexDirection: 'row',
          height: '100%',
          transform: [{ translateX: position }]
        }}>
          {
            Array.from(Array(props.max - props.min + 1).keys()).map((e, i) => {
              return (
                <Text key={i} style={styles.text}>{i + props.min}</Text>
              )
            })
          }


        </Animated.View>

      </View>

      <Pressable
        style={styles.rightButton}
        onPress={() => handleButtonPress(false)}
      >
        <Image source={RightIcon} style={styles.icons} />

      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  leftButton: {
    width: 35,
    height: '100%',
    backgroundColor: '#ffffff',
    position: 'absolute',
    left: -3,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  rightButton: {
    width: 35,
    height: '100%',
    backgroundColor: '#ffffff',
    position: 'absolute',
    right: -3,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  text: {
    height: '100%',
    width: 60,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 33,
    fontWeight: 'bold',
    color: '#3b54fe'
  },
  valueContainer: {
    height: '100%',
    position: 'absolute',
    left: 32,
    right: 32,
    overflow: 'hidden',
    backgroundColor: '#ffffff'
  },
  container: {
    width: 130,
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 3,
    borderRadius: 10,
    flexDirection: 'row',
  },
  icons:
  {
    width: 24,
    height: 25,
    tintColor: '#3b54fe'
  }
})

export default NumericInput