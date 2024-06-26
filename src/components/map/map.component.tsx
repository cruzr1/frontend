import {useRef, useEffect } from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { IconParams, Location, LocationsCoordinates, MapStyle } from '../../const';

export type MapProps = {
  location: Location;
}

export default function MapComponent({location}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  useEffect(() => {
    const icon = new Icon(IconParams);
    let isMounted = true;
    if (isMounted && map) {
      const markerLayer = layerGroup().addTo(map);
      new Marker({
        lat: LocationsCoordinates[location].latitude,
        lng: LocationsCoordinates[location].longitude
      }).setIcon(icon).addTo(markerLayer);
      return () => {
        map.removeLayer(markerLayer);
      };
    }
    return () => {
      isMounted = false;
    };
  }, [map, location]);

  return (
    <div className="popup__content popup__content-map" data-testid='map-element'>
      <div className="popup__map" style={MapStyle} ref={mapRef}>
      </div>
    </div>
  );
}
