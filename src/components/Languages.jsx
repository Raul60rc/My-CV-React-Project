import React from 'react'
import { CV } from '../cv';

const Languages = ({Languages}) => {
  return (
    <div>
        <div className='languages card'>
            {CV.education.map((item) => {
                return (
                    <div key = {JSON.stringify(item)}>
                    <p className='langauges levels'>{item.Languages}</p>
                    <p>{item.written}</p>
                    <p>{item.spoken}</p>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default Languages