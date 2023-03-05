import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StackNavigator } from './src/navigator/NavigatorStack';
import { View } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      
        <StackNavigator/>
      
    </NavigationContainer>
  )
}
export default App;