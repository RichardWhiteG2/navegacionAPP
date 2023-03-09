
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { Colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {



    const {top } =useSafeAreaInsets()
  return (
    <Tab.Navigator
        style={{
            // paddingTop: top
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={{
            tabBarStyle:{
                shadowColor:'transparent',
                elevation:0
            },
            tabBarPressColor: Colores.primary,
            tabBarIndicatorStyle:{ backgroundColor: Colores.primary}
        }}
        
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} options={{tabBarIcon:(props)=><Icon name="airplane-outline" size={30} color="#900" />}} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}