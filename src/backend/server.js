const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'your_password',
   database: 'client_management'
});
db.connect((err) => {
   if (err) throw err;
   console.log('Connected to MySQL');
});
app.post('/register', (req, res) => {
   const { username, password } = req.body;
   db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
       if (err) res.status(500).send(err);
       else res.send({ message: 'User registered successfully!' });
   });
});
app.post('/login', (req, res) => {
   const { username, password } = req.body;
   db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
       if (err) res.status(500).send(err);
       else if (results.length > 0) res.send({ message: 'Login successful!', user: results[0] });
       else res.status(401).send({ message: 'Invalid credentials!' });
   });
});
app.post('/schedule-meeting', (req, res) => {
   const { topic, attendees, scheduled_time } = req.body;
   db.query('INSERT INTO meetings (topic, attendees, scheduled_time) VALUES (?, ?, ?)', [topic, attendees, scheduled_time], (err) => {
       if (err) res.status(500).send(err);
       else res.send({ message: 'Meeting scheduled successfully!' });
   });
});
app.get('/meetings', (req, res) => {
   db.query('SELECT * FROM meetings', (err, results) => {
       if (err) res.status(500).send(err);
       else res.send(results);
   });
});
app.listen(3000, () => console.log('Server running on http://localhost:3000'));