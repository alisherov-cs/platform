import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Map() {
  // Sample data for markers
  const locations = [
    {
      id: 1,
      name: "Maktab 1",
      type: "Maktab",
      position: [41.55, 60.63],
      population: 32,
      houses: 10,
      mahalla: "Amir Temur MFY",
      color: "#8B5CF6",
    },
    {
      id: 2,
      name: "Maktab 2",
      type: "Maktab",
      position: [41.57, 60.65],
      population: 45,
      houses: 15,
      mahalla: "Yangi mahalla",
      color: "#3B82F6",
    },
    {
      id: 3,
      name: "Bog'cha 1",
      type: "Bog'cha",
      position: [41.53, 60.61],
      population: 28,
      houses: 8,
      mahalla: "Markaziy MFY",
      color: "#10B981",
    },
    // Add more locations...
  ];

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
          center={[41.55, 60.63]}
          zoom={12}
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

          {locations.map((location) => (
            <CircleMarker
              iconSize={10}
              key={location.id}
              center={location.position}
              radius={10}
              fillColor={location.color}
              color={location.color}
              weight={2}
              opacity={0.8}
              fillOpacity={0.6}
            >
              <Popup>
                <div style={{ minWidth: "150px" }}>
                  <h3 style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
                    {location.name}
                  </h3>
                  <p style={{ margin: "5px 0", fontSize: "14px" }}>
                    <strong>Tur:</strong> {location.type}
                  </p>
                  <p style={{ margin: "5px 0", fontSize: "14px" }}>
                    <strong>Aholi:</strong> {location.population}
                  </p>
                  <p style={{ margin: "5px 0", fontSize: "14px" }}>
                    <strong>Xonadon:</strong> {location.houses}
                  </p>
                  <p style={{ margin: "5px 0", fontSize: "14px" }}>
                    <strong>Mahalla:</strong> {location.mahalla}
                  </p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
