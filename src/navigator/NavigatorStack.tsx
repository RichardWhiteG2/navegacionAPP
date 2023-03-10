import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import Icon from 'react-native-vector-icons/Ionicons';

export type RouteStackParams ={
    Pagina1Screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: {id: number, nombre: string},
    
}

const Stack = createStackNavigator<RouteStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        // initialRouteName='Pagina2Screen'
        screenOptions={{
            headerStyle:{
                elevation:0,  //Para ANDROID
                shadowColor:'trasparent' // PARA IOS
            },
            cardStyle:{
                backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="Pagina1Screen" options={{title:"Pagina 1"}}component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title:"Página 2"}}component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:"3 Página"}}component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
}