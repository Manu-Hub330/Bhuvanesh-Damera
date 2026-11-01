const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// Home endpoint
app.get('/', (req, res) => {
res.send('Welcome to my Node.js and Express Server!');
});

// API information
app.get('/api', (req, res) => {
res.json({
message: 'Welcome to my Express API',
status: 'Success'
});
});

// Student information
app.get('/student', (req, res) => {
res.json({
name: 'Your Name',
course: 'B.Tech',
subject: 'Node.js and Express'
});
});

// Server status
app.get('/status', (req, res) => {
res.json({
server: 'Running',
port: PORT
});
});

app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`);
});
// API information
app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to my Express API',
        status: 'Success'
    });
});

// Student information
app.get('/student', (req, res) => {
    res.json({
        name: 'Bhuvanesh Damera',
        course: 'B.Tech',
        subject: 'Node.js and Express'
    });
});

// Server status
app.get('/status', (req, res) => {
    res.json({
        server: 'Running',
        port: PORT
    });
});