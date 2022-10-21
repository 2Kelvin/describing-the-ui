import ImageProfile from "./ImageProfile.js";

export default function Ui() {
    return React.createElement(
        "div",
        { className: "app" },
        React.createElement(
            "h1",
            null,
            "Hey World"
        ),
        React.createElement(ImageProfile, null)
    );
}

// react connection
var rootNode = document.getElementById('rootNode');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Ui, null));