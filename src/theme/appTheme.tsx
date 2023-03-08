import { StyleSheet } from "react-native";

export const Colores =  {
    primary:'#5856d6',
}

export const styles = StyleSheet.create({

    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize:30,
        marginBottom:10
    },
    botonGrande:{
        width:100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop:10
    },
    botonGrandeTexto: {
        color:'white',
        fontSize:18,
        fontWeight: 'bold'    
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:100
    },
    avatarContainer:{
        backgroundColor:'white',
        alignItems:'center',
        marginTop:40,
        marginBottom:10
    }
})