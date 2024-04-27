/**
 * Arrow functions cannot be accessed before they are initialised like regular function
 */
arrow()

let arrow = () => {
	console.log("Hello");  //ReferenceError: Cannot access 'arrow' before initialization
};
