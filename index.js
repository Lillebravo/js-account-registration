const allInputSections = document.querySelectorAll('.input-section')
const form = document.querySelector('form')
const submitButton = document.querySelector('input[type="submit"]')

const inputFields = document.querySelectorAll('input:not([type="submit"])')

for (const inputSection of allInputSections) {
    const label = inputSection.querySelector('label')
    const input = inputSection.querySelector('input')

    label.addEventListener('click', () => {
        input.focus()
    })
}

form.addEventListener('input', () => {
    console.log('Input event triggered');
    const isValid = isValidForm();
    console.log('Form validity:', isValid);
    submitButton.disabled = !isValid;
})

function isValidForm() {
    const passwordInput = document.querySelector('input[name="password"]')
    const confirmPasswordInput = document.querySelector('input[name="confirm-password"]')

    for (let input of inputFields) {
        console.log(`Checking input ${input.name}:`, 
            'Value:', input.value, 
            'Validity:', input.checkValidity(),
            'Trimmed value empty:', input.value.trim() === ''
        );

        if (input.value.trim() === '' || !input.checkValidity()) {
            console.log(`Invalid input: ${input.name}`);
            return false;
        }
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        console.log('Passwords do not match');
        confirmPasswordInput.setCustomValidity('Passwords do not match')
        return false;
    } else {
        confirmPasswordInput.setCustomValidity('')
    }

    return true;
}