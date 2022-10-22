import ImageProfile from "./ImageProfile.js";

function Gallery() {
    return (
        <section className="gallery">
            <ImageProfile _src="images/fox.jpg" />
            <ImageProfile _src="images/profile.jpg" />
            <ImageProfile _src="images/chameleon.jpg" />
            <ImageProfile _src="images/code.jpg" />
            <ImageProfile _src="images/cats.jpg" />
            <ImageProfile _src="images/brasil.jpg" />
            <ImageProfile _src="images/cycle.jpg" />
            <ImageProfile _src="images/waterfall.jpg" />
            <ImageProfile _src="images/scene.jpg" />
        </section>
    );
}

export default Gallery;