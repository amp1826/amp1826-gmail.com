
const express = require('express');



const path = require('path');

const app = express();



app.use(express.static(path.join(__dirname, 'public'),
	{
    extensions: ['html', 'htm']}


));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('menu.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/menu.html'));
});

app.get('order.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/order.html'));
});

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
