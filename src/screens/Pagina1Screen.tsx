import { DrawerScreenProps } from '@react-navigation/drawer'
import { StackScreenProps } from '@react-navigation/stack'
// import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{};
// interface Props extends DrawerScreenProps<any, any>{};
export const Pagina1Screen = ({navigation}: Props) => {

  // useEffect(() => {
    
  //   navigation.setOptions({
  //     headerLeft: ()=>{
  //       return <Button
  //         title='Menu'
  //         onPress={() => navigation.toggleDrawer()} />
  //     }
  //   })
  // }, [])
  


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
