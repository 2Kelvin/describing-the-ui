import ImageProfile from "./ImageProfile.js";

export default function Ui() {
    return (
        <div className="app">
            <h1>Hey World</h1>
            <ImageProfile />
        </div>
    );
}

// react connection
const rootNode = document.getElementById('rootNode');
const root = ReactDOM.createRoot(rootNode);
root.render(<Ui />);