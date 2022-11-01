import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import { colors } from './utils/theme'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  )
}


export default App
