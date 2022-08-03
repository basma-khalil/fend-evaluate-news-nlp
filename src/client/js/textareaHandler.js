const textSubmit = event => {

	event.preventDefault();

	console.log("::: Form Submitted :::");

    // check what text was put into the form field
    let text = document.getElementById('text').value;

	console.log("::: Running checkInput :::", text);

	// Check if the textarea is empty
	(text === '')
	? alert('Please enter a text for analysis.')
	// If the textarea has a value
    : Client.handleSubmit({text: text});
}

export { textSubmit }