import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{};
export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={ styles.globalMargin}>
        <Text style ={ styles.title}> Pagina1Screen</Text>  
        <Button
          title='Ir a pagina 2'
          onPress={()=> navigation.navigate('Pagina2Screen')}
        />
        <Text>Navegar con Argumentos</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={ {
              ...styles.botonGrande,
              backgroundColor:'green'
            
            }}
            onPress={()=> navigation.navigate('PersonaScreen',
            {
              id: 1,
              nombre: 'Pedro'
            })}
            >
            <Text style={styles.botonGrandeTexto}>Pedro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.botonGrande}
            onPress={()=> navigation.navigate('PersonaScreen',
            {
              id: 2,
              nombre: 'Maria'
            })}
          >
            <Text style={styles.botonGrandeTexto}>Maria</Text>
          </TouchableOpacity>
        </View>
        {/* <Button
          title='Ir a Persona'
          onPress={()=> navigation.navigate('PersonaScreen')}
        /> */}
    </View>
  )
}
