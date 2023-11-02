const express = require('express')
const app = express()

const { readFileSync, writeFileSync } = require('fs')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'nodemysql'
})

db.connect((err) => {
    if (err) throw err
    console.log('MYSQL connected')
})

app.use(express.json())

app.post('/api/products', (req, res) => {
    const { name, price, discount_price, category_id} = req.body
    const createdDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const UpdatedDate = new Date().toISOString().slice(0, 19).replace('T', ' ')

    db.query('INSERT INTO products (name,price,discount_price,created_date_time,last_updated_date_time,category_id) VALUES (?,?,?,?,?,?)',
        [name, price, discount_price, createdDate, UpdatedDate, category_id], (err, result) => {
            if (err) throw err
            res.status(201).json({ success: true, msg: 'Product has been added' })
        })

    if (!name) {
        res.status(400).json({ success: false, msg: 'Please provide Product name' })
    }
})

app.put('/api/products/:ProductID', (req, res) => {
    const { ProductID } = req.params
    const { name, price, discount_price} = req.body
    const UpdatedDate = new Date().toISOString().slice(0, 19).replace('T', ' ')

    db.query('UPDATE products SET name=COALESCE(NULLIF(?,""),name),price=COALESCE(NULLIF(?,""),price),discount_price=COALESCE(NULLIF(?,""),discount_price),last_updated_date_time=? WHERE id=?',
        [name, price, discount_price, UpdatedDate, ProductID], (err, result) => {
            if (err) throw err
            console.log(result)
            if (result.affectedRows == 0) {
                return res.status(400).json({ success: false, msg: "recored not founded" })
            }
            if(!name) {
                res.status(400).json({ success: false, msg: 'Please change the name' })
            }
            res.status(201).json({ success: true, msg: `The record with id= ${ProductID} has been updated` })
        })
})

app.delete('/api/products/:ProductID', (req, res) => {
    const { ProductID } = req.params

    db.query('DELETE FROM products WHERE id=?', [ProductID], (err, result) => {
        if (err) throw err
        if (result.affectedRows == 0) {
            return res.status(400).json({ success: false, msg: "recored not founded" })
        }
        res.status(201).json({ success: true, msg: `The record with id= ${ProductID} has been deleted` })
    })
})

app.get('/api/products/:ProductID', (req, res) => {
    const { ProductID } = req.params

    db.query('SELECT * FROM products WHERE id=?', [ProductID], (err, result) => {
        if (err) throw err
        if (result.length == 0) {
            return res.status(400).json({ success: false, msg: "recored not founded" })
        }
        else {
            res.status(201).json({ success: true, data: result })
        }
    })
})

app.get('/api/products', (req, res) => {

    db.query('SELECT * FROM products', (err, result) => {
        if (err) throw err
        res.status(201).json({ success: true, data: result })
    })
})


app.listen(5000, () => [
    console.log('Server is listening on 5000')
])

