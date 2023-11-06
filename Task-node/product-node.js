const express = require('express')
const app = express()

const { readFileSync, writeFileSync } = require('fs')
const path = require('path')
const multer = require('multer')

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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post('/api/products', upload.single('image'), (req, res) => {
    const { name, price, discount_price, category_id } = req.body
    const createdDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const UpdatedDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const image = path.join(__dirname, 'uploads', req.file.filename)
    const readimage = readFileSync(image)

    db.query('INSERT INTO products (name,price,discount_price,created_date_time,last_updated_date_time,category_id,image) VALUES (?,?,?,?,?,?,?)',
        [name, price, discount_price, createdDate, UpdatedDate, category_id, readimage], (err, result) => {
            if (err) throw err
            res.status(201).json({
                success: true, data: [{
                    name: name, price: price, discount_price: discount_price,
                    createdDate: createdDate, UpdatedDate: UpdatedDate,
                    category_id: category_id
                }]
            })
        })

    if (!name || !price || !discount_price) {
        res.status(400).json({ success: false, msg: 'Please provide the required data' })
    }
})

app.put('/api/products/:ProductID', upload.single('image'), (req, res) => {
    const { ProductID } = req.params
    const { name, price, discount_price } = req.body
    const UpdatedDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
    if (req.file) {
        const image = path.join(__dirname, 'uploads', req.file.filename)
        var readimage = readFileSync(image)
    }

    db.query('UPDATE products SET name=COALESCE(NULLIF(?,""),name),price=COALESCE(NULLIF(?,""),price),discount_price=COALESCE(NULLIF(?,""),discount_price),last_updated_date_time=?,image=COALESCE(NULLIF(?,""),image) WHERE id=?',
        [name, price, discount_price, UpdatedDate, readimage, ProductID], (err, result) => {
            if (err) throw err
            if (result.affectedRows == 0) {
                return res.status(400).json({ success: false, msg: "recored not founded" })
            }
            if (readimage) {
                console.log('uploaded')
            }
            if (name || price || discount_price || readimage) {
                return res.status(201).json({ success: true, msg: `The record with id= ${ProductID} has been updated` })
            }
            else {
                return res.status(400).json({ success: false, msg: 'Please change data in record' })
            }
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

