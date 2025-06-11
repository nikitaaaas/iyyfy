// Імпортуємо модуль http
const http = require('http');

// Встановлюємо порт
const port = 3000;

// Створюємо сервер
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Код відповіді
  res.setHeader('Content-Type', 'text/plain'); // Тип контенту
  res.end('Привіт! Це мій перший сервер на Node.js\n'); // Відповідь
});

// Запускаємо сервер
server.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}/`);
});
