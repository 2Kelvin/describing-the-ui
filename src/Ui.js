import Gallery from "./Gallery.js";

function Ui() {
    return (
        <div className="app">
            <h1>My React Gallery</h1>
            <Gallery />
        </div>
    );
}

// react connection
const rootNode = document.getElementById('rootNode');
const root = ReactDOM.createRoot(rootNode);
root.render(<Ui />);

export default Ui;

// In Create React App, your app lives in src/App.js
// 3 steps of making a component a module component that can be exported & imported
    // Make a new JS file for the component
    // Export your function component from that file (default or named)
    // Import the file where you want to use the component (in the other js files)

// when importing js modules, don't forget to add a '.js' file extension in the end; 
// ...mostly if you're working with native javascript or just adding some react to your project
// if you used 'create-react-app', the import will still work even without the '.js' extension
// "default" export of a js module can only be one, but named exports can be as many as you like in one module
// How you export your component dictates how you must import it
// i.e you can't import a default function as if it's a named import and vice versa
// *** named imports use curly braces {}
// *** in named imports, the {name} has to match what you're importing
// *** in default imports you can rename what you're importing however you want
// use default exports if the file exports only one component
// use named exports if the file exports multiple components and values