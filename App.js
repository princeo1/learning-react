import React from 'react';
import ReactDOM from 'react-dom/client';


// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     [
//         React.createElement(
//             "div",
//             {id: "child1"},
//             [React.createElement("h1",{id: "heading1"},"I am a h1 from child1"),
//             React.createElement("h2",{id: "heading2"},"I am a h2 from child1"),
//             React.createElement("h3",{id: "heading3"},"I am a h3 from child1")]
//         ),
//         React.createElement(
//             "div",
//             {id: "child2"},
//             [React.createElement("h1",{id: "heading"},"I am a h1 from child2"),
//             React.createElement("h2",{id: "heading"},"I am a h2 from child2"),
//             React.createElement("h3",{id: "heading"},"I am a h3 from child2")]
//         )
//     ]
// )




// const heading = React.createElement(
//     'h1',
//     {
//         id:"heading", // here we give attributes to out element
//         xyz: "abc"    // we can define our own attributes for our element
//     }, 
//     "Hello World from React"
// );
     // we are creating a heading h1 tag using core of react

 // This is an object
const elementWithCoreReact = React.createElement('h1', {id:"coreReact"}, 'I am h1 made from core react');
console.log(elementWithCoreReact);
console.log(elementWithCoreReact);

// This is creating react element using JSX
const elem = <div>I am a div with JSX</div>;
console.log(elem);

// This is creating react element using JSX
const elemWithMultipleLines = (
    <div className="parent">
        <div className='child'>
            <h1>I am a multiliner h1 with parent inside me</h1>
        </div>
    </div>
);
console.log(elemWithMultipleLines);
// Creating a react functional component 
// This is a function which returns JSX

const ChotuReactComponent = function () {
    return (
        <div className="chotu">
            <h3>I am chotu React Component</h3>
        </div>
    )
}
console.log(ChotuReactComponent);
const ReactComponent = () =>  
    (
        <div className="parent">
            <div className='child'>
                <h1>I am a React functional component</h1>
                <h2>I am a multiliner h1 with parent inside me</h2>
                <ChotuReactComponent/>
                {<ChotuReactComponent/>}
            </div>
        </div>
    )

console.log(ReactComponent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ReactComponent());