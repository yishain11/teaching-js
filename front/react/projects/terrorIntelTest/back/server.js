import express from "express"
import { readFileSync } from "fs"

const app = express()
const PORT = 4545

app.use((req, res, next) => {
    console.log(`incoming: url: ${req.url} method: ${req.method}`);
    next()
})

app.use((req, res, next) => {
    res.appendHeader("Access-Control-Allow-Origin", "*")
    res.appendHeader("Access-Control-Allow-Methods", "*")
    next()
})

app.get('/data', (req, res) => {
    let file = readFileSync("./data/terrorData.csv", "utf8")
    file = file.split("\n")
    const finalData = []
    for (let row of file) {
        row = row.split(",")
        finalData.push(row)
    }
    const sliced = finalData.slice(0, 20)
    console.log("len", sliced.length)
    res.end(JSON.stringify(sliced))
})

app.listen(PORT, () => { console.log(`listening on port ${PORT}`) })