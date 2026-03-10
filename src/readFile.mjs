// Procesamiento de Flujos (Streams)
import fs from 'fs';

async function readFileTest() {
    try {
        const data = await fs.createReadStream('samples/test_file.txt');
        data.on('data', function (chunk) {
            console.log(chunk.toString());
            console.log(chunk);
        });
    } catch (err) {
        console.error("Error reading file: ", err);
    }
}

readFileTest();