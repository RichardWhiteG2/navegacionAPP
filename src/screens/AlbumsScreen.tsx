import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const AlbumsScreen = () => {

  const {logOut, authState}= useContext(AuthContext)
  return (
    <View>
        <Text style={styles.title}> AlbumsScreen</Text>

        {/* si no está logeado muestra el boton. */}
        {
          authState.isLoggedIn && <Button title='LogOut' onPress={logOut}/>
        }
    </View>
    
  )
}
