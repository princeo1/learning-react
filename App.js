const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1",{id: "heading"},"I am a h1"),
        React.createElement("h2",{id: "heading"},"I am a h2"),
        React.createElement("h3",{id: "heading"},"I am a h3")]
    )
)




const heading = React.createElement(
    'h1',
    {
        id:"heading", // here we give attributes to out element
        xyz: "abc"    // we can define our own attributes for our element
    }, 
    "Hello World from React"
);
     // we are creating a heading h1 tag using core of react
const root = ReactDOM.createRoot(document.getElementById('root')); // we are creating a root which will be rendered in browsers using React DOM
root.render(parent); // we are telling react to render the created root