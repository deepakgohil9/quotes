const express = require("express")
const hbs = require("hbs")
const fs = require("fs")
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static("./public")) //this will render static css and images
app.set("view engine", "hbs")   //this will set view engine to hbs

let data = fs.readFileSync("quotes_db.json", "utf-8")
data = JSON.parse(data)

app.get("/", (req, res) => {

    const random = parseInt((Math.random() * 1643) - 1);
    res.render("index", {
        quote: data[random].text
    })
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
