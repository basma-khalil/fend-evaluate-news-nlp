const linkSubmit = event => {

	event.preventDefault();

	console.log("::: Form Submitted :::");

    // check what text was put into the form field
    let link = document.getElementById('link').value,
		verifiedEntry = Client.checkURL(link);

	// Check if the link input is empty
	(link === '')
	? alert('Please enter an URL for analysis.')
	// Check if the link input is a valid url
	: (verifiedEntry)
    	? Client.handleSubmit({url: link})
		// If the link input validation fails
		: alert('Please enter a valid URL for analysis.');
}

export { linkSubmit }