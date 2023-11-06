const express = require('express')
const app = express()

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

app.post('/api/category', (req, res) => {
    const { name } = req.body
    const createdDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const UpdatedDate = new Date().toISOString().slice(0, 19).replace('T', ' ')

    db.query('INSERT INTO product_category (name,created_date_time,last_updated_date_time) VALUES (?,?,?)',
        [name, createdDate, UpdatedDate], (err, result) => {
            if (err) throw err
            res.status(201).json({ success: true, category: name })
        })

    if (!name || !price || !discount_price) {
        res.status(400).json({ success: false, msg: 'Please provide Category name' })
    }
})

app.put('/api/category/:CategoryID', (req, res) => {
    const { CategoryID } = req.params
    const { name } = req.body
    const UpdatedDate = new Date().toISOString().slice(0, 19).replace('T', ' ')

    db.query('UPDATE product_category SET name=?,last_updated_date_time=? WHERE id=?',
        [name, UpdatedDate, CategoryID], (err, result) => {
            if (err) throw err
            if (result.affectedRows == 0) {
                return res.status(400).json({ success: false, msg: "recored not founded" })
            }
            if (name) {
                res.status(201).json({ success: true, msg: `The record with id= ${CategoryID} has been updated` })
            }
        })
})

app.delete('/api/category/:CategoryID', (req, res) => {
    const { CategoryID } = req.params

    db.query('DELETE FROM product_category WHERE id=?', [CategoryID], (err, result) => {
        if (err) throw err
        if (result.affectedRows == 0) {
            return res.status(400).json({ success: false, msg: "recored not founded" })
        }
        res.status(201).json({ success: true, msg: `The record with id= ${CategoryID} has been deleted` })
    })
})

app.get('/api/category/:CategoryID', (req, res) => {
    const { CategoryID } = req.params

    db.query('SELECT * FROM product_category WHERE id=?', [CategoryID], (err, result) => {
        if (err) throw err
        if (result.length == 0) {
            return res.status(400).json({ success: false, msg: "recored not founded" })
        }
        else {
            res.status(201).json({ success: true, data: result })
        }
    })
})

app.get('/api/category', (req, res) => {

    db.query('SELECT * FROM product_category', (err, result) => {
        if (err) throw err
        res.status(201).json({ success: true, data: result })
    })
})



app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})