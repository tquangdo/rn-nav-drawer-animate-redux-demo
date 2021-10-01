import React from 'react'
import { View, Text, Button } from 'react-native'

const OnBoarding = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text
            >
                ONBOARDING
            </Text>
            <Button
                color='orange'
                title='Go to Home'
                onPress={() => navigation.replace('Home')}
            />
        </View>
    )
}

export default OnBoarding

