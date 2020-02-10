const normBtn = document.querySelector('#sub-norm');
const firstName = document.querySelector('#firstName');

let view = {
	showError: false
};

normBtn.addEventListener('click', (e) => {
	e.preventDefault();

	let secret_name = /^[a-zA-Z]+[s|S]{1}[e|E]{1}[v|V]{1}$/;

	if (firstName.value == secret_name) {
	}
});
