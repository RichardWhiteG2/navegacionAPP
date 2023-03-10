import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
// import { StackNavigator } from './src/navigator/NavigatorStack';
import { View } from 'react-native';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { StackNavigator } from './src/navigator/NavigatorStack';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
        <AppState>
          {/* <MenuLateralBasico/> */}
        
          {/* <StackNavigator/> */}

          <MenuLateral/>

        </AppState>
      
    </NavigationContainer>
  )
}

const AppState= ({ children }:any ) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;