// Show the start and end locations for the selected line.
//So for example, if the Victoria line is selected,
//display Walthamstow Central Underground Station and Brixton
//Underground Station.

// - The app should fetch data from`https://api.tfl.gov.uk/Line/${SELECTED_LINE}/Route` ** when a line is selected **.The documentation
//for this API is available[here](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_LineRoutesByIds).

//- Using this data, the app show the`originationName
//`(start of the line) and`destinationName`(end of the line)
//from the ** first ** item in the`routeSections` array.

import React, {useState, useEffect} from 'react';

const FetchLineRoutes = ({selectedLine}) => {
  const [endLocations, setEndLocation] = useState([]);
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/${selectedLine}/Route`)
      .then((res) => res.json())
      .then((data) => setEndLocation(data));
  }, [selectedLine]);

  console.log('selected line from fetch line routes', selectedLine);
  console.log('end locations value', endLocations.routeSections);
  return (
    <div>
      {endLocations.routeSections ? (
        endLocations.routeSections.map((item) => (
          <div>
            {' '}
            {item.destinationName}
            {item.originationName}
          </div>
        ))
      ) : (
        <p>empty</p>
      )}
    </div>
  );
};

export default FetchLineRoutes;
