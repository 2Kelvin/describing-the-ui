import ImageProfile from "./ImageProfile.js";

function Gallery() {
    return React.createElement(
        "section",
        { className: "gallery" },
        React.createElement(ImageProfile, null),
        React.createElement(ImageProfile, null),
        React.createElement(ImageProfile, null),
        React.createElement(ImageProfile, null)
    );
}

export default Gallery;