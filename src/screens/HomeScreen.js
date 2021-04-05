// In App.js in a new project

import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Linking, FlatList, Image } from 'react-native';

import ButtonCPN from '../components/ButtonCPN';

import GetUSER_API from '../actions/GetUSER';

export default (props) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        GetUSER()
    }, [])

    const GetUSER = async () => {
        GetUSER_API()
            .then((v) => {
                setList(v.data)
            })
            .catch((err) => {

            })
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ButtonCPN
                text={"go to www.ever.healthcare"}
                colors={"blue"}
                onPress={() => {
                    const url = "https://www.ever.healthcare";
                    Linking.canOpenURL(url).then(supported => {
                        if (supported) {
                            Linking.openURL(url);
                        } else {
                            console.log("Don't know how to open URI: " + url);
                        }
                    });
                }} />
            <ButtonCPN
                colors={"blue"}
                text={"go to 1112"}
                onPress={() => {
                    Linking.openURL(`tel:1112`)
                }} />
            <ButtonCPN
                colors={"blue"}
                text={"go to profile"}
                onPress={() => {
                    props.navigation.navigate({
                        name: 'ProfileScreen',
                        params: { title: 'I Love Ever.' }
                    })
                }} />
            <FlatList
                data={list}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                flexDirection: "row",
                            }}>
                            <Image
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 40
                                }}
                                source={{
                                    uri: item.avatar,
                                }} />
                            <View
                                style={{
                                    marginLeft: 15
                                }}>
                                <Text>{`email: ${item.email}`}</Text>
                                <Text>{`first name: ${item.first_name}`}</Text>
                                <Text>{`last name: ${item.last_name}`}</Text>
                            </View>
                        </View>
                    )
                }} />
        </View>
    );
}