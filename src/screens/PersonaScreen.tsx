import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { RouteStackParams } from '../navigator/NavigatorStack'
import { styles } from '../theme/appTheme'

// interface RouterParams {
//     id: number;
//     nombre: string
// }

interface Props extends StackScreenProps<RouteStackParams, 'PersonaScreen'>{};
export const PersonaScreen = ({route, navigation}: Props) => {

    //Forma rapida para tipar datos
    // const params = route.params as RouterParams;
    const params = route!.params
    useEffect(() => {
  
        navigation.setOptions({
          title: params.nombre
        })
      }, [])
      
  return (
    <View style={ styles.globalMargin}>
        <Text style ={ styles.title}> 
            {
                JSON.stringify(params, null, 3)
            }
        
        </Text>  
        
    </View>
  )
}
