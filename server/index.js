import {readFile} from 'fs/promises'
import express from "express"
import bodyParser from "body-parser"


(async () => {

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

        app.get('/api/:game/:id', (req, res,) => {
            res.set('Access-Control-Allow-Origin', '*')
            return res.send(data[`${req.params.game}/${req.params.id}`])
        });
        app.listen(port, () => {
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();