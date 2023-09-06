// Dependecies
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

// Define the express operation
const app = express()
const port = 3000

// Defining the cors - cross origin by receiving data in json format
app.use(cors())
app.use(bodyParser.json())

// Establish connection with database
const host = "localhost"
const user = "root"
const password = "123456"
const database = "ClientManagement"
const db = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
})

// Verify db connection
db.connect(err => {
    if (err) {
        console.error("Connection not established with db", err)
    } else {
        console.log("Connected to db " + database)
    }
})

app.listen(port, () => {
    console.log("Server port established on " + port)
})

// Define the endpoints

// Insert client in db
app.post('/createClient', (req, res) => {
    const {emailId, password, name, address} = req.body
    const query = "insert into Clients values(?, ?, ?, ?)"
    db.query(query, [emailId, password, name, address], (err, result) => {
        if (err) {
            console.error("Error in adding client to db", err)
            res.status(500).json({
                error: "Error in adding client to db"
            })
        } else {
            res.status(200).json({
                message: "Client added successfully"
            })
        }
    })
})

// Insert meeting in db
app.post('/scheduleMeeting', (req, res) => {
    const {meetingTopic, numberOfPeople, startDate, startTime, endDate, endTime, meetingId} = req.body
    const query = "insert into Meetings values(?, ?, ?, ?, ?, ?, ?)"
    db.query(query, [meetingTopic, numberOfPeople, startDate, startTime, endDate, endTime, meetingId], (err, result) => {
        if (err) {
            console.error("Error in inserting neeting to db", err)
            res.status(500).json({
                error: "Error in inserting neeting to db"
            })
        } else {
            res.status(200).json({
                message: "Meeting scheduled successfully"
            })
        }
    })
})