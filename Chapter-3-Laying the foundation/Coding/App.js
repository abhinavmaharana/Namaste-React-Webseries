import React from "react";
import ReactDOM from 'react-dom/client'

// React Element

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Namaste React"
// )

// JSX (transpiled before it reaches the JS Engine) - is not HTML in JS

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1 className="head">Namaste React using JSX</h1>

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component is just a javascript function

const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
}

const HeadingComponent1 = () => (<h1>Namaste React Functional Component</h1>)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);