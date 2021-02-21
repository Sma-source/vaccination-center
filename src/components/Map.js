import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDp3H2O_3ZwsH4parPuRDYKDyvy9Xd_AqA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 45.74846,
    lng: 4.84671,
  },
  zoom: 6,
};
export default Map;
