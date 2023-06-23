import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_APIKEY } from '../screens/HomeScreen';

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Tolu</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete 
        styles={toInputBoxStyles}
        placeholder='Where to?'
        fetchDetails={true}
        enablePoweredByContainer={false}
        query={{
            key: GOOGLE_MAP_APIKEY,
            language: 'en'
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        />
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
})