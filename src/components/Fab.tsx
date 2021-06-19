import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native'

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}


export const Fab = ({title, onPress, position = 'br'}: Props) => {

    const ios = () => {

        return (
            <TouchableOpacity
                style= {[
                    style.fabLoaction,
                    (position === 'bl')
                        ? style.btLeft
                        : style.btRight
                ]} 
                activeOpacity={0.7} 
            >  
                <View style={style.fab}>
                    <Text style={style.fabText}>
                            {title}
                    </Text>
                </View> 
            </TouchableOpacity>
        )
    };
    const android = () => {
        return (
            <View
                style= {
                    [
                        style.fabLoaction,
                        (position === 'bl')
                            ? style.btLeft
                            : style.btRight
                    ]
                    //         ? style.fabLoactionL
                    //         : style.fabLoactionR
                }
                // style={
                //     (position === 'bl')
                //         ? style.fabLoactionL
                //         : style.fabLoactionR
                // }  
            >
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('red', true, 30)}
                    onPress={onPress}
                >
                    <View style={style.fab}>
                        <Text style={style.fabText}>
                                {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    };

    return (Platform.OS === 'ios' ? ios() : android());
}

const style = StyleSheet.create({
    fabLoaction: {
        position: 'absolute',
        bottom: 25
    },
    btRight: {
        right:25
    },
    btLeft: {
        left:25
    },
    // fabLoactionR: {
    //     position: 'absolute',
    //     bottom: 25,
    //     right: 25,

    // },
    // fabLoactionL: {
    //     position: 'absolute',
    //     bottom: 25,
    //     left: 25,

    // },
    fab: {
        backgroundColor: '#5856D6',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24
    },
    fabText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});
