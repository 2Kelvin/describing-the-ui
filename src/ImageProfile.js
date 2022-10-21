function ImageProfile() {
    return (
        <img
            src="images/profile.jpg"
            alt="user"
            className="my_image"
        />
    );
}

export default ImageProfile;

// React component functions must start with a capital letter or they WON'T work!
// tags in lowercase, react interprets them as JSX markup
// tags starting with a capital letter, react interprets as Components
// components have a lot more HTML/JSX markup in them 
// if your markup isn’t all on the same line as the `return` keyword, you must wrap it in a pair of parentheses
// Without parentheses, any code on the lines after return will be IGNORED
// if it's in the same line as `return`, just use a semi-colon at the end

// DO NOT define/initialize a component inside another component
//  define a component by itself (at top level/ outside other functions) then nest it in other components