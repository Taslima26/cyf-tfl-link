import React, { useState } from 'react';
import FetchLineData from './FetchLineData';


const LineModeSelect = ({lineData}) => {
    
    console.log(lineData);
    return (<div>
        {lineData.map((tubeLines) => {
            console.log(tubeLines.id)
        })}
        
    </div> );
}
 
export default LineModeSelect;