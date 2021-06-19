import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View 
      style={{
        flex: 1,
        // backgroundColor: 'blue',
        justifyContent: 'center'
      }}
    >
      <Text
        style={{
          fontSize: 50,
          textAlign: 'center'
        }}
      >
        Hello World!!!
      </Text>
    </View>
    )
}
