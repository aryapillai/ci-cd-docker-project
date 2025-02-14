const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});

