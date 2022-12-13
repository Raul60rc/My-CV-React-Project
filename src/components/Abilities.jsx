import React from 'react'

const Abilities = ({Abilities}) => {
  return (
    <div>
        <div className='"abilities card'>
            {Abilities.map((item) => {
                return(
                    <div key={JSON.stringify(item)}>
                        <p className="abilities">{item.Abilities}</p>

                    </div>
                );
            })}
            </div>
    </div>
  );
};

export default Abilities