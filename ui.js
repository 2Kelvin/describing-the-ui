export default function Ui() {
    return;
}

// react connection
var rootNode = document.getElementById('rootNode');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Ui, null));