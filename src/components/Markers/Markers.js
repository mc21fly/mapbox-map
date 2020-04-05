import React from 'react';

import MarkersStyles from './MarkersStyles';
import BookmarkCard from '../BookmarkCard/BookmarkCard';

const Markers = ({
  markers,
  setMarkers,
  setMarkersDeleteFlag,
  markersDeleteFlag,
  visible,
}) => {
  const styles = MarkersStyles(visible); // Styles that depends on props

  // Function for deleting marker
  const deleteMarker = (index) => {
    markers[index].marker.remove(); // Remove marker from Mapbox map
    markersDeleteFlag[index] = true; // Set delete flag to true
    setMarkers(markers); // Send array to parent
    setMarkersDeleteFlag(markersDeleteFlag); // Send array to parent
  };

  return markers.length ? ( // If there are markers set
    markersDeleteFlag.some((flag) => flag === false) ? ( // Checking if some markers delete flag are set
      markers.map((marker, index) => (
        <BookmarkCard
          key={index}
          marker={marker.marker}
          index={index}
          visible={visible}
          removed={markersDeleteFlag[index]}
          handleDelete={(index) => deleteMarker(index)}
        />
      ))
    ) : (
      // If there are all markers deleted
      <h1 style={styles.info}>All markers have been deleted</h1>
    )
  ) : (
    // If there is no markers set at beggining
    <h1 style={styles.info}>There is no markers set yet.</h1>
  );
};

export default Markers;
