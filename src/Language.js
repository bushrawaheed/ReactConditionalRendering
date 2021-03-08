import React from "react";
export default function Language(props) {
  let Language;

  switch (props.language) {
    case "French":
      Language = "Bonjour";
      break;
    case "Spanish":
      Language = "Hola";
      break;

    default:
      Language = "Hello";
  }

  let response = <h2>{Language}</h2>;

  return response;
}
