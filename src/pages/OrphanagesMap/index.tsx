import React from 'react'
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import mapMarkerImg from '../../images/Map-marker.svg';

import '../../styles/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
  return (
    <div>
      <div id="page-map">
        <aside>
          <header>
            <img src={mapMarkerImg} alt="Happy"/>

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </header>

          <footer>
            <strong>Tomé Açu</strong>
            <span>Pará</span>
          </footer>
        </aside>

        <Map
          center={[-2.4245497,-48.2493067]}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>

        <Link to="" className="create-orphanage" >
          <FiPlus size={32} color="#FFF" />
        </Link>
      </div>
    </div>
  )
}

export default OrphanagesMap;
