import React, {useState, useEffect} from 'react';
import TransportModeSelect from './TransportModeSelect';

const FetchData = () => {
  const [transportData, setTransportData] = useState([]);
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Meta/Modes`)
      .then((res) => res.json())
      .then((data) => setTransportData(data));
  }, []);

  return (
    <div>
      <TransportModeSelect displayData={transportData} />
    </div>
  );
};

export default FetchData;
