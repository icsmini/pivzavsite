function send() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('mail');
    const phoneField = document.getElementById('phone');
    const messageField = document.getElementById('message');

    if (nameField.value.trim() !== '' && (emailField.value.trim() !== '' || phoneField.value.trim() !== '')) {
      if (messageField.value.trim() !== '') {
        nameField.value = '';
        emailField.value = '';
        phoneField.value = '';
        messageField.value = '';
  
        alert('Сообщение отправлено!');
      } else {
        alert('Пожалуйста, заполните все поля формы.');
      }
    } else {
      alert('Пожалуйста, заполните хотя бы одно из контактных полей.');
    }
}
