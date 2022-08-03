const handleSubmit = formEntry => {

	// If the input is verified send HTTP request
	Client.postData('http://localhost:8081/sentiment-analysis', formEntry)
	// Update UI
	.then((newData) => {
		document.getElementById('preview').innerHTML = newData.text.substr(0, 500);
		document.getElementById('results').innerHTML = newData.polarity;
	});
}

export { handleSubmit }