import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import tw from "tailwind-react-native-classnames";


const data = [
  {
    id: "12",
    icon: "home",
    location: "Home",
    destination: "47A, Iwaya Road, Yaba, Lagos",
  },
  {
    id: "34",
    icon: "briefcase",
    location: "Work",
    destination: "Work Station, Marylan, Lagos",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={()=> <View style={tw`bg-gray-200 h-0.5`}/>}
      renderItem={({ item: { location, destination, icon} }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon 
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color='white'
            size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
