import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
// import { StackNavigator } from './src/navigator/NavigatorStack';
import { View } from 'react-native';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { StackNavigator } from './src/navigator/NavigatorStack';

const App = () => {
  return (
    <NavigationContainer>
      
        {/* <MenuLateralBasico/> */}

      
        <StackNavigator/>
      
    </NavigationContainer>
  )
}
export default App;