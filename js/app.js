const stdForm = document.querySelector('.std_form');
const scrtForm = document.querySelector('.scrt_form');
const normBtn = document.querySelector('#sub-norm');
const srctBtn = document.querySelector('#srctBtn');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

let secret_inputs = document.querySelectorAll('#firstName_scrt, #lastName_scrt, #email_scrt, #conf_password');

const conf_password = document.querySelector('#conf_password');

const validations = {
	first: new RegExp('^[S]{1}[a-zA-Z]+[e|E]{1}[v|V]{1}[a-zA-Z]+$'),
	last: new RegExp('^[a-zA-Z]+[e]{1}[n]{1}[t]{1}[a-zA-Z]+$'),
	email: new RegExp('^[a-zA-Z]+[y]{1}[7]{1}@[a-zA-Z_]+?.[a-zA-Z]{2,3}$'),
	password: new RegExp('^[p]{1}[a]{1}[s]{1}[s]{1}[w]{1}[o]{1}[r]{1}[d]{1}[1]{1}[2]{1}[3]{1}$')
};

let inputValues = {
	first: '',
	last: '',
	email: '',
	password: ''
};

const getInputs = () => {
	inputValues.first = firstName.value;
	inputValues.last = lastName.value;
	inputValues.email = email.value;
	inputValues.password = password.value;
};

const updateViewState = (version) => {
	getInputs();
	updateView(version);
};

const updateView = (version) => {
	if (version === 'scrt') {
		stdForm.style.display = 'none';
		scrtForm.style.display = 'flex';
		document.querySelector('.art').style.backgroundImage =
			'url(https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)';
		document.querySelector('.overlay h2').textContent = '!!!!YOU HAVE BEEN CHOSEN FOR AN AMAZING PRIZE!!!!';
	} else if (version === 'norm') {
		stdForm.style.display = 'flex';
		scrtForm.style.display = 'none';
		document.querySelector('.art').style.backgroundImage =
			'url(https://images.pexels.com/photos/2096543/pexels-photo-2096543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
		document.querySelector('.overlay h2').textContent = 'Register your new account';
	}
};

const validateForm = (updateTo) => {
	if (validations.first.test(firstName.value)) {
		if (validations.last.test(lastName.value)) {
			if (validations.email.test(email.value)) {
				if (validations.password.test(password.value) && password.value === conf_password.value) {
					updateViewState(updateTo);
				}
			}
		}
	}
};

normBtn.addEventListener('click', (e) => {
	e.preventDefault();
	validateForm('scrt');
});

srctBtn.addEventListener('click', (e) => {
	e.preventDefault();
	validateForm('norm');
});
