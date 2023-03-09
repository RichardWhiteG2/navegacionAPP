import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './NavigatorStack';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
        
        screenOptions={{ 
          drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      
      <Drawer.Screen name="Tabs" component={Tabs} options={{drawerIcon:(props)=><Text><Icon name="airplane-outline" size={30} color="#900" /></Text>}}/>
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const  CustomDrawerContent =(props: DrawerContentComponentProps)=> {
  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png'         
          }}
          style={ styles.avatar}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}
