import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";


const GOOGLE_MAP_APIKEY = 'AIzaSyAwGiFqtvsk03aTOkJ0EGqymctLSPZrb7E';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

<GooglePlacesAutocomplete
    nearbyPlacesAPI="GooglePlaceSearch"
    debounce={400}
    placeholder="Where From?"
    styles={{
        container: {
            flex: 0,
        },
        textInput: {
            fontSize: 18,
        }
    }}
    query={{
        key: GOOGLE_MAP_APIKEY,
        language: 'en',
    }}
    />

        <NavOptions/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});