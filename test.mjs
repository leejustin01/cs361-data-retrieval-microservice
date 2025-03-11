import fetch from 'node-fetch';

const test = async name => {
    const response = await fetch('http://localhost:8080/brawler/' + name);
    const json = await response.json();
    const description = json.description;
    console.log(description);
}

test('Amber');
