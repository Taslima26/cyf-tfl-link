import React, {useState, useEffect} from 'react';
import FetchLineData from './FetchLineData';
const TransportModeSelect = ({displayData}) => {
  const [change, handleChange] = useState('bus');
  const handleSelect = (e) => {
    console.log(e);
    handleChange(e);
  };

  return (
    <div>
      <select onChange={(e) => handleChange(e.currentTarget.value)}>
        {displayData.map((transportMode) => (
          <option value={transportMode.modeName} key={transportMode.value}>
            {transportMode.modeName}
          </option>
        ))}
      </select>
      <h4>You have selected:{change}</h4>

      <FetchLineData modeOfTransport={change} />
    </div>
  );
};
export default TransportModeSelect;
