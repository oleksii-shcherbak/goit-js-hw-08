const inputNameField = document.querySelector('#name-input');
const spanNameField = document.querySelector('#name-output');

function onInputNameFieldChange(event) {
  spanNameField.textContent =
    event.currentTarget.value.trim() === ''
      ? 'Anonymous'
      : event.currentTarget.value.trim();
}

inputNameField.addEventListener('input', onInputNameFieldChange);
