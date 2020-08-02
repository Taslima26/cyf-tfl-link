import React, { useState, useEffect } from 'react';


import LineModeSelect from './LineModeSelect';
// Show another selector for the different lines available for the
//selected mode of transport.So for example, if tube is selected,
//the second selector shows all of the tube lines.

// The app should fetch data
//from https://api.tfl.gov.uk/Line/Mode/${SELECTED_MODE_OF_TRANSPORT}
//when a mode of transport is selected.The documentation for this API is available here

// Using this data, the app should show second < select >
//with all of the line ids returned from the API

// When an option in this < select > is selected, it should show that id on screen {useEffect(() => {

const FetchLineData = ({modeOfTransport}) => {
  // debugger;
  console.log(modeOfTransport);
  const [lineData, setLineData] = useState([]);
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Mode/${modeOfTransport}`)
      .then((res) => res.json())
      .then((data) => setLineData(data));
  }, [modeOfTransport]);
  console.log('line data from linemodeselect', lineData);

  return (
    <div>
      <LineModeSelect lineData={lineData} />
    </div>
  );
};

export default FetchLineData;
