import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import Switch from './Components/Switch'
import Checkbox from './Components/Checkbox'
import NumbericInput from './Components/NumericInput'

const App = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View style={{
        width: '100%',
        height: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#00000030',
        borderBottomWidth: 1,
        backgroundColor: '#3b54fe'

      }}>
        <Text>Switch Component</Text>
        <Switch
          options={['Gradiometer', 'Magnetometer']}
          onChange={(data) => { console.log(data) }}
        />
      </View>

      <View style={{
        width: '100%',
        height: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#00000030',
        borderBottomWidth: 1,
        backgroundColor: '#3b54fe'

      }}>
        <Text>Checkbox Component</Text>
        <Checkbox
          onChange={(data) => { console.log(data) }}
        />
      </View>

      <View style={{
        width: '100%',
        height: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#00000030',
        borderBottomWidth: 1,
        backgroundColor: '#3b54fe'

      }}>
        <Text>NumericInput Component</Text>
        <NumbericInput
          onChange={(data) => { console.log(data) }}
          max={15}
          min={7}
        />
      </View>


      
    </SafeAreaView>
  )
}

export default App