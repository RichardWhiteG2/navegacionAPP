import React from 'react'
import { Text, View } from 'react-native'
import { Colores, styles } from '../theme/appTheme'

import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={{...styles.globalMargin, marginTop: 10,}}>
        <Text style={styles.title}>Icons</Text>

        <Text>
          <TouchableIcon iconName="airplane-outline"  />
          <TouchableIcon iconName="attach-outline"  />
          <TouchableIcon iconName="bonfire-outline"  />
          <TouchableIcon iconName="calculator-outline"  />
          <TouchableIcon iconName="images-outline"  />
        </Text>
    </View>
  )
}
