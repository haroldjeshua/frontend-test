for (let i = 0; i < 500; i++) {
	const num = document.querySelector('.number')
	const numValue = Number(num.getAttribute('data-value'))
	let counter = 0;

	setInterval(() => {
		if (counter !== numValue) {
			counter++
			num.innerHTML = `${counter}%`
		}
	}, 80);
}