const inputGroups = document.querySelectorAll('.input-group');
const form = document.querySelector('form');

for (const inputGroup of inputGroups) {
	const label = inputGroup.querySelector('label')
	const input = inputGroup.querySelector('input')

	label.addEventListener('click', () => {
		input.focus()
	})
}

const isValidInput = () => value >= 8;