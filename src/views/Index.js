import React, { useState } from 'react';
import './Index.scss';

// Import components.
import Accordion from '../components/Accordion/Accordion';
import Bookmark from '../components/Bookmark/Bookmark';
import MapboxGLMap from '../components/MapboxGLMap/MapboxGLMap';
import Markers from '../components/Markers/Markers';

const Index = () => {
  const [markers, setMarkers] = useState([]); // Array of Mapbox Map.
  const [markersDeleteFlag, setMarkersDeleteFlag] = useState([]); // Array of delete flags for Markers (true = deleted).
  const [active, setActive] = useState(false); // Setting Bookmark to view (false = Map bookmark is displayed).

  // Function for toggling bookmark to display.
  // If bookmark is fold, its (bookmark || bookmark title) component sholud fire function.
  const toggleBookmark = (e) => {
    if (e.target.id === 'map' || e.target.id === 'map-title') {
      setActive(false);
    }

    if (e.target.id === 'markers' || e.target.id === 'markers-title') {
      setActive(true);
    }
  };

  return window.innerWidth > 1240 ? ( // Application made for PC's only (for now)
    <Accordion>
      {/* MAP BOOKMARK */}
      <Bookmark
        title="map"
        background="#4EADAF"
        full={!active}
        clickHandler={toggleBookmark}
        left>
        {/* MAP BOOKMARK CHILDREN */}
        <MapboxGLMap
          markers={markers}
          setMarkers={(markers) => setMarkers(markers)}
          setMarkersDeleteFlag={(flags) => setMarkersDeleteFlag(flags)}
        />
      </Bookmark>

      {/* MARKERS BOOKMARK */}
      <Bookmark
        title="markers"
        background="#377A98"
        full={active}
        clickHandler={toggleBookmark}
        right>
        {/* MARKERS BOOKMARD CHILDREN */}
        <Markers
          markers={markers}
          setMarkers={(markers) => setMarkers(markers)}
          setMarkersDeleteFlag={(flags) => setMarkersDeleteFlag(flags)}
          markersDeleteFlag={markersDeleteFlag}
          visible={active}
        />
      </Bookmark>
    </Accordion>
  ) : (
    <Info /> // If app is run on mobiles this Info is showed
  );
};

const Info = () => {
  return (
    <div className="mobile">
      <h1
        style={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
        }}>
        <i className="far fa-frown"></i> sorry, no mobile version yet
      </h1>
      <h6>
        visit me on <a href="http://www.github.com/mc21fly">github</a>
      </h6>
    </div>
  );
};

export default Index;
