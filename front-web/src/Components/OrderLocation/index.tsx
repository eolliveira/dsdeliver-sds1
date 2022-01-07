import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './styles.css'

function OrderLocation() {

    const position = {
        lat: -24.0382012,
        lng: -52.37572   
    }

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o pedido deve ser entregue:
               </h3>
                <div className="filter-container">
                teste-filter
                </div>
                <MapContainer
                    center={position}
                    zoom={13}
                    key={position.lat}
                    scrollWheelZoom
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Meu marcador
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
        </div>
    )
}

export default OrderLocation;