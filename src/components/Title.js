import React from "react";

const TitleStyle = {
    width: 'fit-content',
    fontVariant: 'small-caps',
    position: 'relative',
    display: 'grid',
    placeItems: 'center'
}

const Title = ({text}) => {
  return(
    <div style={TitleStyle}>
        <h4>{text || 'Titolo' }</h4>
        <div className="underline"></div>
    </div>
  );
};

export default Title;