import React from 'react'

const Education = ({Education}) => {
  return (
    <div>
        <div className='education card'>
            {Education.map((item) =>{
                return(
                    <div key={JSON.stringify(item)}>
                        <p className="name"> {item.name} </p>
                        <p>{item.where}</p>
                        <p>{item.date}</p>
                        <p>{item.description}</p>
                        </div>
                );
            })}
        </div>
    </div>
  )
}

export default Education