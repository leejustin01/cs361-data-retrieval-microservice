const express = require('express');
const fs = require('fs');

const PORT = 8080;
const app = express();

let brawlers = [];


const retrieveBrawlers = async () => {
    fs.readFile('brawler-descriptions.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }

        brawlers = JSON.parse(data);
    });
};

app.get('/brawler/:name', async (req, res) => {
    const name = req.params.name;

    for (brawler of brawlers) {
        if (brawler.name === name) {
            res.status(200).json(brawler);
            return;
        }
    }
    res.status(400).json({ ErrorMessage: "Brawler not found." });
});

app.listen(PORT, () => {
    retrieveBrawlers();
    console.log(`Data retrieval microservice listening on port ${PORT}...`);
})
