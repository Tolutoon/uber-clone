import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import React, { useEffect, useRef } from "react";
import { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slice/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAP_APIKEY } from "../screens/HomeScreen";

const Map = () => {
const origin = useSelector(selectOrigin);
const destination = useSelector(selectDestination);
const mapRef = useRef(null);

useEffect(() => {
  if (!origin || !destination) return;

  //Zoom & Fit Markers to Screen
  mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], { edgePadding: {top: 50, right: 50, left: 50},})
}, [origin, destination])

{/*useEffect(()=> {
  if (!origin || !destination) return;
  const getTravelTime = async() => {
    fetch (`https://maps.googleapis.com/maps/api/distancematrix/json
    ?units=imperial
    &origins=${origin.description}
    &destinations=${destination.description}
    &key=${GOOGLE_MAP_APIKEY}
  `).then((res) => res.json())
  .then((data) => {
    console.log(data)
  });
  };

  getTravelTime();
}, [origin, destination, GOOGLE_MAP_APIKEY])*/}

  return (
    <MapView
    style={tw`flex-1`}
    mapType="mutedStandard"
    ref={mapRef}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections 
        origin={origin.description}
        destination={destination.description}
        apikey={GOOGLE_MAP_APIKEY}
        strokeWidth={3}
        strokeColor="black"
        />
      )}

      {origin?.location && (
        <Marker 
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        title="Origin"
        description={origin.description}
        identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker 
        coordinate={{
          latitude: destination.location.lat,
          longitude: destination.location.lng,
        }}
        title="Destination"
        description={destination.description}
        identifier="destination"
        />
      )}
      </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
