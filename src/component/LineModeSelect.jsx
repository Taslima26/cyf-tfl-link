import React, { useState } from 'react';
import FetchLineRoutes from './FetchLineRoutes';




const LineModeSelect = ({lineData}) => {
    
    console.log('lineData', lineData);
    const [select, setSelect] = useState('');
    const handleSelect = (event) => {
        setSelect(event.target.value);
    }
    
    return (<div>
        <select onChange={(e) => handleSelect(e)}>
            {lineData.map((line) => (
                <option value={line.id} key={line.id}>
                    {line.id}
                </option>
            ))}
            
        </select>
        <h4>You have selected:{select}</h4>
        <FetchLineRoutes selectedLine={select} />
           
    </div> );
}
 
export default LineModeSelect;