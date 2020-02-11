const normBtn = document.querySelector('#sub-norm');
const firstName = document.querySelector('#firstName');

let view = {
	showError: false
};

normBtn.addEventListener('click', (e) => {
	e.preventDefault();

	let secret_name = /^([A-Za-z])\w+[S|s]{1}[E|e]{1}[V|v]{1}$/;

	if (secret_name.test(firstName.value)) {
		console.log('yeehaw');
	}
});
