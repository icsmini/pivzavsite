function send() {
    // Получаем значения полей формы
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('mail');
    const phoneField = document.getElementById('phone');
    const messageField = document.getElementById('message');
  
    // Проверяем, что хотя бы одно из контактных полей заполнено
    if (nameField.value.trim() !== '' && (emailField.value.trim() !== '' || phoneField.value.trim() !== '')) {
      // Проверяем, что все поля заполнены
      if (messageField.value.trim() !== '') {
        // Очищаем поля формы
        nameField.value = '';
        emailField.value = '';
        phoneField.value = '';
        messageField.value = '';
  
        // Выводим уведомление об отправке сообщения
        alert('Сообщение отправлено!');
      } else {
        // Выводим сообщение об ошибке
        alert('Пожалуйста, заполните все поля формы.');
      }
    } else {
      // Выводим сообщение об ошибке
      alert('Пожалуйста, заполните хотя бы одно из контактных полей.');
    }
}
