import {
    FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import NavigateCard from "./NavigateCard";

const data = [
    {
        id: 'Uber-X-12',
        title: 'UberX',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn',
    },
    {
        id: 'Uber-XL-34',
        title: 'UberXL',
        multiplier: 1.2,
        image: 'https://links.papareact.com/5w8',
    },
    {
        id: 'Uber-LUX-56',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf',
    },
]

const RideOptionsCard = () => {
  const navigation = useNavigation();
    const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>

      <FlatList 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item:{id, title, multiplier, image}, item}) => (
        <TouchableOpacity 
        onPress={()=> setSelected(item)}
        style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && 'bg-gray-200'}`}>
            <Image 
            style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
            }}
            source={ {uri: image} }
            />
            <View style={tw `-ml-6`}>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>Travel time...</Text>
            </View>
            <Text style={tw`text-xl font-semibold`}>N3,500</Text>
        </TouchableOpacity>
      )

      }
      />
      <View>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
            <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
