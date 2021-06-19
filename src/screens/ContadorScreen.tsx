import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)




    return (
        <View 
            style={style.container}>
            <Text
                style={style.title}
            >
                Contador: {contador}
            </Text>

            <Fab 
                title="+1"
                onPress={()=> setContador(contador + 1)}
            ></Fab>

            <Fab 
                title="-1"
                onPress={()=> setContador(contador - 1)}
                position='bl'
            ></Fab>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        top: -100
    },
    fabLoactionR: {
        position: 'absolute',
        bottom: 25,
        right: 25,

    },
    fabLoactionL: {
        position: 'absolute',
        bottom: 25,
        left: 25,

    },
    fab: {
        backgroundColor: '#5856D6',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});
