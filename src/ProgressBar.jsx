import React from "react";

const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 10,
    width: "25%",
    backgroundColor: "#e0e0de",
    borderRadius: "none",
    margin: "20px",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#0096ff",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: "1px",
    color: "black",
    fontWeight: "bold",
  };

  {
    /** 
  1. Generic HTML elements are HTML tags that don't have a specific 
  function or meaning, but are used to group or style other elements

  2. A div element is a generic block-level element. 
     A block element is a page element that starts a
     new line and has a width equal to the entire page

  3. Span is a generic inline element often used to 
     apply styling to a portion of content.
     An inline element does not start a new line and 
     only takes up as much space on the page as its content.    
  **/
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
