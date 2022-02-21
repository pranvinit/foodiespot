import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";

import MapView from "react-native-maps";

// components imports
import MapSearch from "../components/map-search.component";
import MapCallout from "../components/map-callout.component";

// contexts imports
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restrauants/restrauant.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export default function MapScreen() {
  const { location } = useContext(LocationContext);
  const { restrauants = [] } = useContext(RestaurantsContext);

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

  console.log(location, restrauants);

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
        {restrauants.map((restrauant) => {
          return (
            <MapView.Marker
              key={restrauant.name}
              coordinate={{
                latitude: restrauant.geometry.location.lat,
                longitude: restrauant.geometry.location.lng,
              }}
              title={restrauant.name}
            >
              <MapView.Callout>
                <MapCallout restrauant={restrauant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
}
