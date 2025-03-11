import fetch from 'node-fetch';

const test = async () => {
    const response = await fetch('http://localhost:8080/brawler', {
        method: "POST",
        body: JSON.stringify({ name: "Amber" })
    });
    
    console.log(response.json());
}

test();
