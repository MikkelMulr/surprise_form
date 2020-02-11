const normBtn = document.querySelector('#sub-norm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const conf_password = document.querySelector('#conf_password');

const validations = {
	first: new RegExp('^[S]{1}[a-zA-Z]+[e|E]{1}[v|V]{1}[a-zA-Z]+$'),
	last: new RegExp('^[a-zA-Z]+[e]{1}[n]{1}[t]{1}[a-zA-Z]+$'),
	email: new RegExp('^[a-zA-Z]+[y]{1}[7]{1}@[a-zA-Z_]+?.[a-zA-Z]{2,3}$'),
	password: new RegExp('^[p]{1}[a]{1}[s]{1}[s]{1}[w]{1}[o]{1}[r]{1}[d]{1}[1]{1}[2]{1}[3]{1}$')
};

let view = {
	showError: false
};

const updateView = () => {
	view.showError = !view.showError;
};

console.log(view.showError);

const validateForm = () => {
	if (validations.first.test(firstName.value)) {
		console.log('yeye - F');
		if (validations.last.test(lastName.value)) {
			console.log('yeye - L');
			if (validations.email.test(email.value)) {
				console.log('yeye - E');
				if (validations.password.test(password.value) && password.value === conf_password.value) {
					console.log('yeye - P');
					updateView();
				}
			}
		}
	}
	console.log(view.showError);
};

normBtn.addEventListener('click', (e) => {
	e.preventDefault();
	validateForm();
});
