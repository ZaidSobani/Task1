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
    console.log('My SQL connected')
})


app.use(express.json())

app.get('/', (req, res) => {
    res.send('testing....')
})

app.post('/api/faq', (req, res) => {

    const { question, answer } = req.body
    const createdDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const UpdatedDate = new Date().toISOString().slice(0, 19).replace('T', ' ')

    db.query('INSERT INTO faq (question,answer,created_date_time,last_updated_date_time) VALUES(?,?,?,?)',
        [question, answer, createdDate, UpdatedDate], (err, result) => {
            if (err) throw err
            console.log('Inserted into faq table')
            res.status(201).json({ success: true, question: question, answer: answer })
    })

    if (!question || !answer) {
        return res.status(400).json({ success: false, msg: "Please provide question or answer" })
    }

})

app.put('/api/faq/:faqID', (req, res) => {
    const { faqID } = req.params
    const { id, question, answer } = req.body
    const UpdatedDate = new Date().toISOString().slice(0, 19).replace('T', ' ')

    db.query('UPDATE faq SET question=COALESCE(NULLIF(?,""),question),answer=COALESCE(NULLIF(?,""),answer),last_updated_date_time=? WHERE id=?',
        [question, answer, UpdatedDate, faqID], (err, result) => {
            if (err) throw err

            if (result.affectedRows == 0) {
                return res.status(400).json({ success: false, msg: "recored not founded" })
            }

            res.status(201).json({ success: true, msg: `The record with id= ${faqID} has been updated` })

        })
})



app.delete('/api/faq/:faqID', (req, res) => {
    const { faqID } = req.params

    db.query('DELETE FROM faq WHERE id=?', [faqID], (err, result) => {
        if (err) throw err

        if (result.affectedRows == 0) {
            return res.status(400).json({ success: false, msg: "recored not founded" })
        }

        res.status(201).json({ success: true, msg: `The record with id= ${faqID} has been deleted` })
    })
})

app.get('/api/faq/:faqID', (req, res) => {
    const { faqID } = req.params

    db.query('SELECT * FROM faq WHERE id=?', [faqID], (err, result) => {
        if (err) throw err
        if (result.length == 0) {
            return res.status(400).json({ success: false, msg: "recored not founded" })
        }
        else {
            res.status(201).json({ success: true, data: result })
        }
    })
})

app.get('/api/faq', (req, res) => {

    db.query('SELECT * FROM faq', (err, result) => {
        if (err) throw err
        res.status(201).json({ success: true, data: result })
    })

})


app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})


