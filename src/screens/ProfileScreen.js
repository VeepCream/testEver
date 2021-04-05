// In App.js in a new project

import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';

import ButtonCPN from '../components/ButtonCPN';

export default () => {

    const [ever, setEver] = useState(1);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Text>{`Ever${ever}`}</Text>
            <ButtonCPN
                colors={"blue"}
                text={"add"}
                onPress={() => {
                    if (ever < 5) {
                        setEver(ever + 1);
                    }
                }} />
        </View>
    );
}