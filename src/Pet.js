import React from "react";

const Pet = (props) => {
  return React.createElement("div", {}, [
    // [] to add more elements
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

export default Pet;
