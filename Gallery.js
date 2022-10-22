import ImageProfile from "./ImageProfile.js";

function Gallery() {
    return React.createElement(
        "section",
        { className: "gallery" },
        React.createElement(ImageProfile, { _src: "images/fox.jpg" }),
        React.createElement(ImageProfile, { _src: "images/profile.jpg" }),
        React.createElement(ImageProfile, { _src: "images/chameleon.jpg" }),
        React.createElement(ImageProfile, { _src: "images/code.jpg" }),
        React.createElement(ImageProfile, { _src: "images/cats.jpg" }),
        React.createElement(ImageProfile, { _src: "images/brasil.jpg" }),
        React.createElement(ImageProfile, { _src: "images/cycle.jpg" }),
        React.createElement(ImageProfile, { _src: "images/waterfall.jpg" }),
        React.createElement(ImageProfile, { _src: "images/scene.jpg" })
    );
}

export default Gallery;