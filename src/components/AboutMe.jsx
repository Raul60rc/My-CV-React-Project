import React from 'react'

const AboutMe = ({AboutMe}) => {
  return (
    <div>
        <div className="aboutme card">
            {AboutMe.map((item) => {
            return (
                <div key={JSON.stringify(item)}>
                    <p className="name"> {item.name} </p>
                    <p> {item.info1} </p>
                    <p> {item.info2} </p>
                    <p> {item.info3} </p>
                    </div>
            );
            })}
        </div>
    </div>
  )
}

export default AboutMe