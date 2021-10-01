import React from 'react'
import { View, Text } from 'react-native'

const Home = () => {
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
                HOME CONTENT
            </Text>
        </View>
    )
}

export default Home

