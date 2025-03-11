const express = require('express');
const fs = require('fs');

const PORT = 8080;
const app = express();

let arr = [];


const retrieveBrawlers = async () => {
    fs.readFile('brawler-descriptions.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }

        arr = JSON.parse(data);
    });
};

app.post('/brawler', async (req, res) => {
    const name = req.body.name;
    console.log(name);
    await retrieveBrawlers();

    for (let brawler of arr) {
        if (brawler.name === name) {
            console.log("Sending: ", brawler.description);
            res.send(brawler.description);
        }
    }
});

app.listen(PORT, () => {
    console.log(`Data retrieval microservice listening on port ${PORT}...`);
})
