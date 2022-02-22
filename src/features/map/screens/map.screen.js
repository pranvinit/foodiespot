import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";

import MapView from "react-native-maps";

// components imports
import MapSearch from "../components/map-search.component";
import MapCallout from "../components/map-callout.component";

// contexts imports
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export default function MapScreen({ navigation }) {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const { viewport, lat, lng } = location;

  const [latDelta, setLatDelta] = useState(0);
  const [langDelta, setLangDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const northeastLong = viewport.northeast.lng;

    const southwestLat = viewport.southwest.lat;
    const southwestLong = viewport.southwest.lng;

    const latitudeDelta = northeastLat - southwestLat;
    const longitudeDelta = northeastLong - southwestLong;

    setLatDelta(latitudeDelta);
    setLangDelta(longitudeDelta);
  }, [location]);

  return (
    <>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: langDelta,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              title={restaurant.name}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} navigation={navigation} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
}
