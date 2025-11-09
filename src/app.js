const express = require('express');
const app = express();
const port = 3000;

// 簡単なXSS脆弱性を含むサンプル
app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`<h1>Hello, ${name}!</h1>`); // ⚠️ XSS注意（ZAPが検知）
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});