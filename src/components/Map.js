import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

const Map = ({ vaccineData, center, zoom }) => {
  const markers = vaccineData.map((ev) => {
    return (
      <LocationMarker
        lat={ev.properties.c_lat_coor1}
        lng={ev.properties.c_long_coor1}
      />
    );
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDp3H2O_3ZwsH4parPuRDYKDyvy9Xd_AqA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 45.74846,
    lng: 4.84671,
  },
  zoom: 8,
};
export default Map;
