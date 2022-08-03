const showNav = () => {

	const navIcon = document.getElementById('nav__btn'),
		  navBar = document.getElementById('navbar');

	navIcon.classList.toggle('open');
	navBar.classList.toggle('show');
}

export { showNav }