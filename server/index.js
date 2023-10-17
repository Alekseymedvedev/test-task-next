import { readFile } from 'fs/promises'
import express from "express"
 import bodyParser from "body-parser"

// var fs = require('fs');
// var obj;
// fs.readFile('file', 'utf8', function (err, data) {
//     if (err) throw err;
//     obj = JSON.parse(data);
// })



(async () => {
//    const obj = fs.readFile('./data/data.json', 'utf8', function (err, data) {
//     return data.json();
// })
//     const a =fs.readFile('./data/data.json', 'utf8')
    let obj;
    let data = JSON.parse(await readFile("./data/data.json", "utf8"))
    try {

        const app = express();

        const port = 5000;
        app.use(bodyParser.json());

        app.get('/api', (req, res,) => {
            res.set('Access-Control-Allow-Origin', '*')
            return res.send(data)
        });
         app.get('/api/1spin4win/:id', (req, res,) => {
            res.set('Access-Control-Allow-Origin', '*')
            console.log(req.params.id)
            return res.send(data['1spin4win/'+req.params.id])
        });
        app.listen(port, () => {});
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();