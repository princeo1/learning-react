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

 // JSX syntax
// This is React Element
const jsxHeading = (<h1 id="jsxHeading">
        I am heading from JSXwa
    </h1>)

// This is React Functional Component

const HeadingComponent1 = () => {
    return <h1 id="jsxHeading">I am HeadingComponent1</h1>
}

const HeadingComponent2 = () => {
        <div>
            <HeadingComponent1/>
            <h1> I am Heading Component 2</h1>
        </div>
    } 


const root = ReactDOM.createRoot(document.getElementById('root')); // we are creating a root which will be rendered in browsers using React DOM
root.render(<HeadingComponent2/>); // we are telling react to render the created root