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