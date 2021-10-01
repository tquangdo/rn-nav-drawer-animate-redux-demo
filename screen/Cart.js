import React from 'react'
import { View, Text } from 'react-native'

const Cart = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text
                style={{
                    color: 'red',
                }}
            >
                CART CONTENT
            </Text>
        </View>
    )
}

export default Cart

