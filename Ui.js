import Gallery from "./Gallery.js";

function Ui() {
    return React.createElement(
        "div",
        { className: "app" },
        React.createElement(
            "h1",
            null,
            "My React Gallery"
        ),
        React.createElement(Gallery, null)
    );
}

// react connection
var rootNode = document.getElementById('rootNode');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Ui, null));

export default Ui;