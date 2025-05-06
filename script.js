function setView(view) {
      document.getElementById('calendar').innerText = `Поточний режим: ${view}`;
    }

    function searchEvents() {
      const query = document.getElementById('searchEvent').value.toLowerCase();
      const events = document.querySelectorAll('#event-list li');
      events.forEach(event => {
        if (event.innerText.toLowerCase().includes(query)) {
          event.style.display = '';
        } else {
          event.style.display = 'none';
        }
      });
    }

    const todayTasks = [
      { title: "Домашнє завдання з математики", done: false },
      { title: "Прочитати розділ з історії", done: true }
    ];

    function renderTodayTasks() {
      const taskList = document.getElementById('today-tasks');
      taskList.innerHTML = '';
      todayTasks.forEach(task => {
        const li = document.createElement('li');
        li.innerText = `${task.title} - ${task.done ? '✅ Виконано' : '❌ Не виконано'}`;
        taskList.appendChild(li);
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      setView('month');
      renderTodayTasks();
    });


    function login(event) {
      event.preventDefault();
      alert("Вхід виконано!"); // Заміни на реальну логіку пізніше
      // window.location.href = "dashboard.html"; // Наприклад, для переходу
    }

    
  function login(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы
    // Здесь можно вставить проверку логина/пароля, если нужно
    window.location.href = 'success.html'; // Переход на страницу "успішно"
  }