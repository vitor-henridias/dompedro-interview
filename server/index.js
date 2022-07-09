const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Teste@2022',
    database: 'db_dompedro'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err, result) => {
        //console.log(result);
        res.send(result)
    })
})

// app.get('/', (req, res) => {
    
//     const sqlInsert = "INSERT INTO users (usersName, usersEmail, createAt) VALUES ('Dom Pedro', 'dp@gmail.com', 'October 12, 1798')"
//     db.query(sqlInsert, (err, result) => {
//         res.send("hello Dom Pedro");
//     });
// });

app.post("/api/insert", (req, res) => {

    const usersName = req.body.usersName
    const usersEmail = req.body.usersEmail
    const createAt = req.body.createAt
    
    const sqlInsert = "INSERT INTO users (usersName, usersEmail, createAt) VALUES (?,?,?)"
    db.query(sqlInsert, [usersName, usersEmail, createAt], (err, result) => {
        console.log(result);
    })
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
