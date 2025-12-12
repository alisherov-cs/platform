import {
  MapContainer,
  TileLayer,
  Marker,
  Polygon,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import neighborhoods from "../data/neighborhoods.json";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";

import { useEffect } from "react";

// const createCircularCountIcon = (userCount, color = "#1E88E5") => {
//   const html = ReactDOMServer.renderToString(
//     <div
//       className="flex items-center justify-center rounded-full border-2 border-white shadow-lg"
//       style={{
//         backgroundColor: color,
//         width: "44px",
//         height: "44px",
//       }}
//     >
//       <span className="text-white font-bold text-base">{userCount}</span>
//     </div>
//   );

//   return L.divIcon({
//     html,
//     className: "simple-circle-count",
//     iconSize: [44, 44],
//     iconAnchor: [22, 22],
//   });
// };

const addHoverEffect = (e) => {
  e.target.setStyle({
    weight: 4,
    color: "#05f",
    fillOpacity: 0,
  });
  e.target.bringToFront();
};

const removeHoverEffect = (e, color) => {
  e.target.setStyle({
    weight: 2,
    color,
    fillOpacity: 0.2,
  });
  e.target.bringToBack();
};

function Map() {
  useEffect(() => {
    console.log({ neighborhoods });
  }, []);

  // Create custom icon function

  return (
    <div
      id="map-section"
      style={{
        padding: "20px",
        backgroundColor: "#1e293b",
      }}
      className="content-card"
    >
      <div class="card-header">
        <div class="card-title-section">
          <h2>Xarita</h2>
          <p class="card-description">Obyektlarning geografik joylashuvi</p>
        </div>
      </div>

      <div className="map-container">
        <MapContainer
          center={[41.5567841574877, 60.617264968262404]}
          zoom={13}
          style={{
            height: "600px",
            borderRadius: "12px",
            border: "1px solid #334155",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {neighborhoods.data.map((neighborhood) => (
            <Polygon
              key={neighborhood.id}
              positions={neighborhood.coords}
              pathOptions={{
                color: neighborhood.color,
              }}
              eventHandlers={{
                mouseover: addHoverEffect,
                mouseout: (e) => removeHoverEffect(e, neighborhood.color),
              }}
            >
              <Tooltip sticky>{neighborhood.uz.name} MFY</Tooltip>

              {/* <Marker
                position={L.latLngBounds(neighborhood.coords).getCenter()}
                icon={createCircularCountIcon(neighborhood.household_count)}
              /> */}
            </Polygon>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
