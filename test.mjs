import fetch from 'node-fetch';

const testBrawler = async name => {
    const response = await fetch('http://localhost:8080/brawler/' + name);
    const json = await response.json();
    const description = json.description;
    console.log(description);
}

const testGear = async name => {
    const response = await fetch('http://localhost:8080/gear/' + name);
    const json = await response.json();
    const description = json.description;
    console.log(description);
}

testBrawler('Amber');
testGear('Speed');
