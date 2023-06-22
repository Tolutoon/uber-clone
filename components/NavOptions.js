import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

const data = [
    {
        id: '12',
        title: 'Get a ride',
        image: 'https://links.parareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '34',
        title: 'Order Food',
        image: 'https://links.parareact.com/28w',
        screen: 'EatScreen',
    },
]

const NavOptions = () => {
  return (
    <FlatList 
    data={data}
    horizontal
    renderItem={({ item }) => (
        <TouchableOpacity>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})