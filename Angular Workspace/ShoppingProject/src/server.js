// Dependecies
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
// const { json } = require('body-parser')

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
const database = "ShoppingProject"
const db = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
})

// Verify whether db is connected
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

// Get all products
app.get('/getProducts', (req, res) => {
    const query = "select * from Products"
    db.query(query, (err, result) => {
        if (err) {
            console.error("Error in fetching all products from db", err)
            res.status(500).json({
                error: "Error in fetching all products from db"
            })
        } else {
            res.status(200).json(result)
            // console.log('All product details returned')
        }
    })
})

// Get product by id
app.get('/getProduct/:Id', (req, res) => {
    const Id = req.params.Id
    const query = "select * from Products where Id = ?"
    db.query(query, [Id], (err, result) => {
        if (err) {
            console.error("Error in fetching product from db", err)
            res.status(500).json({
                error: "Error in fetching product from db with Id - " + Id
            })
        } else {
            res.status(200).json(result)
            // console.log('Product details returned')
        }
    })
})

// Insert product in db
app.post('/addProduct', (req, res) => {
    const {Id, Type, Description, ImageLink, Price} = req.body
    const query = "insert into Products values(?, ?, ?, ?, ?)"
    db.query(query, [Id, Type, Description, ImageLink, Price], (err, result) => {
        if (err) {
            console.error("Error in adding product to db", err)
            res.status(500).json({
                error: "Error in adding product to db"
            })
        } else {
            res.status(200).json({
                message: "Product added successfully"
            })
        }
    })
})

// Update a product in db
app.put('/updateProduct', (req, res) => {
    const {Id, Type, Description, ImageLink, Price} = req.body
    const query = "update Products set Type = ?, Description = ?, ImageLink = ?, Price = ? where Id = ?"
    db.query(query, [Type, Description, ImageLink, Price, Id], (err, result) => {
        if (err) {
            console.error("Error in updating product in db", err)
            res.status(500).json({
                error: "Error in updating product in db with Id - " + Id
            })
        } else {
            res.status(200).json({
                message: "Product with Id - " + Id + " updated successfully"
            })
        }
    })
})

// Delete a product in db
app.delete('/deleteProduct/:Id', (req, res) => {
    const Id = req.params.Id
    const query = "delete from Products where Id = ?"
    db.query(query, [Id], (err, result) => {
        if (err) {
            console.error("Error in deleting product in db", err)
            res.status(500).json({
                error: "Error in deleting product in db with Id - " + Id
            })
        } else {
            res.status(200).json({
                message: "Product with Id - " + Id + " deleted successfully"
            })
        }
    })
})