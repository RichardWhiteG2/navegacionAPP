import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './NavigatorStack';
import { Colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';



//Codigo para diferencias entre plataformas
export const Tabs = () => {
  return Platform.OS == 'ios'
          ? <TabsIOS/>
          : <TabsAndroid/>
}

//Codigo para Android
const BottomTabAndroid = createMaterialBottomTabNavigator()
const  TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
    activeColor="#f0edf6"
      sceneAnimationEnabled={ true}
      barStyle={{backgroundColor:Colores.primary}}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab1', tabBarIcon:(props)=> <Text><Icon name="airplane-outline" size={30} color="#900" /></Text>}}component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{title:'Tab2', tabBarIcon:(props)=> <Text><Icon name="airplane-outline" size={30} color="#900" /></Text>}}component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title:'Stack',tabBarIcon:(props)=> <Text><Icon name="airplane-outline" size={30} color="#900" /></Text>}}component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


//Codigo para IOS
const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
    screenOptions={{ 
        headerShown:false,
        tabBarActiveTintColor: Colores.primary,
        tabBarStyle: { borderTopColor: Colores.primary , borderTopWidth:10, elevation:0},
        tabBarLabelStyle: {fontSize:20}
        
    }}
    sceneContainerStyle={{backgroundColor:"white"}}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab1', tabBarIcon:(props)=> <Text><Icon name="airplane-outline" size={30} color="#900" /></Text>}}component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title:'Tab2', tabBarIcon:(props)=> <Text><Icon name="airplane-outline" size={30} color="#900" /></Text>}}component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title:'Stack',tabBarIcon:(props)=> <Text><Icon name="airplane-outline" size={30} color="#900" /></Text>}}component={StackNavigator} />
      
    </BottomTabIOS.Navigator>
  );
}