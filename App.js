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
root.render(heading); // we are telling react to render the created root