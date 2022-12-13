import React from "react";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="" />
      <div className="card">
        <h2>
          {hero.name} {hero.lastname}
        </h2>
        <p> From: {hero.city}, {hero.country} </p>
        <p>
            Birtdate: {hero.birthdate} </p>
        <p> {hero.phonenumber} </p>
        <p> Email: 
          <a href={"mailto:" + hero.email}>contact@wallstballer.com</a>
        </p>
        <p>
          {" "}
          <a href={hero.github}>Github</a>
        </p>
        <p>
          {" "}
          <a href={hero.linkedIn}>LinkedIn</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
