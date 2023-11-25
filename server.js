// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

let clickCount = 0;

app.post('/api/click', (req, res) => {
    // Increment the click count (you can use a database for a persistent count)
    clickCount++;
    console.log(`Click Count: ${clickCount}`);
    res.sendStatus(200);
});

app.get('/api/click/count', (req, res) => {
    // Send the current click count as JSON
    res.json({ clickCount });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


