import React, { useState } from 'react';
import './BookmarkCard.scss';

import { Card, CardBody, CardTitle, Button, CardText } from 'reactstrap';

const TOKEN =
  'pk.eyJ1IjoibWNmbHkyNSIsImEiOiJjazhrZDVrN3YwMGozM3NubzhrNWlvY3NhIn0.wsGfQf6wcW47fVsuoZlTUg';

const BookmarkCard = ({ marker, index, visible, handleDelete, removed }) => {
  const [isRemoved, setIsRemoved] = useState(removed);

  return (
    <Card
      style={{
        display: visible ? (isRemoved ? 'none' : 'flex') : 'none',
      }}>
      <div className="image">
        <div className="dot"></div>
        <img
          alt="static Mapbox map of the San Francisco bay area"
          src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${marker._lngLat.lng},${marker._lngLat.lat},9.67,0.00,0.00/320x180@2x?access_token=${TOKEN}`}
        />
      </div>
      <CardBody>
        <CardTitle>Marker #{index + 1}</CardTitle>
        <CardText>
          <h6>Longitude: {marker._lngLat.lng}</h6>
          <h6>Latitude: {marker._lngLat.lat}</h6>
        </CardText>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={() => {
              handleDelete(index);
              setIsRemoved(true);
            }}
            className="btn-icon"
            color="primary">
            <i className="fa fa-trash" />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default BookmarkCard;
