import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Language from "./Language";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Conditional Rendering</h1>
      <h3>Challenge 1</h3>
      <p>
        Create a new Component Hello return a h2 with the word "Hello" in it.
        Include the component here.
      </p>
      <Hello />
      <h3>Challenge 2</h3>
      <p>
        Send a property language and the component should render "Bonjour" if
        language is french and "Hello" in other cases. Include the component
        here for English and French
      </p>
      <Language language="French" />
      <Language language="Urdu" />
      <h3>Challenge 3</h3>
      <p>
        Add the ability for the component to render "Hola" for Spanish. Include
        the component here for Spanish
      </p>
      <Language language="Spanish" />

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
