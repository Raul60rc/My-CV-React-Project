import React from 'react'

const Experience = ({Experience}) => {
  return (
    <div>
        <div className='experience card'>
            {Experience.map((item) => {
                return(
                  <div key={JSON.stringify(item)}>
                    <p className='"name'> {item.name}</p>
                    <p> {item.where} </p>
                    <p> {item.date} </p>
                    </div>

                );
            })}
        </div>
    </div>
  )
}

export default Experience