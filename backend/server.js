const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8081;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1417@anku',
    database: 'employee_db',
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected');
});

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const sql = "SELECT * FROM employees";
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});

app.post('/submit-form', (req, res) => {
    const { id, name, id_number, department, dob, gender, designation, salary, email, phone_No, Age, bloodgroup , native} = req.body;
    const sql = 'INSERT INTO employees (id, name, id_number, department, dob, gender, designation, salary, email, phone_No, Age, bloodgroup, native) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [id, name, id_number, department, dob, gender, designation, salary, email, phone_No,Age, bloodgroup, native];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log('Data inserted:', result);
        return res.status(200).json({ message: 'Data inserted successfully' });
    });
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM employees WHERE id = ?';
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log('Data deleted:', result);
        return res.status(200).json({ message: 'Data deleted successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
