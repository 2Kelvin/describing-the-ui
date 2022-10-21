function ImageProfile() {
    return React.createElement("img", {
        src: "images/profile.jpg",
        alt: "user",
        className: "my_image"
    });
}

export default ImageProfile;

// React component functions must start with a capital letter or they WON'T work!
// if your markup isn’t all on the same line as the `return` keyword, you must wrap it in a pair of parentheses
// Without parentheses, any code on the lines after return will be IGNORED
// if it's in the same line as `return`, just use a semi-colon at the end