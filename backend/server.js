const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());
// เปิดใช้งานการอ่าน JSON จาก request body
app.use(express.json());

// สร้างการเชื่อมต่อ
const connection = mysql.createConnection({
    host: 'localhost',   
    user: 'root',      
    password: '',        
    database: 'management' 
});

// ทดสอบการเชื่อมต่อ
connection.connect((err) => {
    if (err) {
        console.error('การเชื่อมต่อล้มเหลว:', err);
        return;
    }
    console.log('เชื่อมต่อกับฐานข้อมูลสำเร็จ!');
});

app.get('/api/users', (req, res) => {
    const sqlSelect = 'SELECT * FROM users';  // คำสั่ง SQL เพื่อดึงข้อมูลทั้งหมดจากตาราง users

    connection.execute(sqlSelect, (err, results) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', err);  // ข้อความแสดงข้อผิดพลาดในคอนโซล
            res.status(500).json({ error: `เกิดข้อผิดพลาดในการดึงข้อมูล: ${err.message}` });  // ส่งข้อความผิดพลาดไปยัง client
            return;
        }
        console.log('ข้อมูลถูกดึงสำเร็จ:', results);  // ข้อความแสดงผลลัพธ์ที่ดึงข้อมูลได้
        res.status(200).json({ message: 'ข้อมูลถูกดึงสำเร็จ!', data: results });  // ส่งข้อมูลที่ดึงมาให้ client
    });
});


app.post('/api/insert', (req, res) => {
    const { fullName, nickname, birthDate,  gender } = req.body;

    const sqlInsert = `
      INSERT INTO users (full_name, nickname, birth_date, gender) 
      VALUES (?, ?, ?, ?)
    `;
    connection.execute(sqlInsert, [fullName, nickname, birthDate, gender], (err, results) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการเพิ่มข้อมูล:', err);
            res.status(500).json({ message: `เกิดข้อผิดพลาด: ${err.message}` });
            return;
        }
        res.status(200).json({ message: 'เพิ่มข้อมูลสำเร็จ!' });
    });
});

app.put('/api/update/:id', (req, res) => {
    const { id } = req.params;  // รับ id จากพารามิเตอร์
    const { fullName, nickname, birthDate, gender } = req.body;

    // ตรวจสอบว่า id มีค่าหรือไม่
    if (!id) {
        return res.status(400).json({ message: 'ID ไม่ถูกต้อง' });
    }

    // ตรวจสอบข้อมูลที่ส่งมาครบถ้วนหรือไม่
    if (!fullName || !nickname || !birthDate || !gender) {
        return res.status(400).json({ message: 'ข้อมูลที่ส่งมาไม่ครบถ้วน' });
    }

    // SQL สำหรับอัปเดตข้อมูล
    const sqlUpdate = `
        UPDATE users
        SET full_name = ?, nickname = ?, birth_date = ?, gender = ?
        WHERE id = ?
    `;

    connection.execute(sqlUpdate, [fullName, nickname, birthDate, gender, id], (err, results) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการอัปเดตข้อมูล:', err);
            return res.status(500).json({ message: `เกิดข้อผิดพลาด: ${err.message}` });
        }

        // ตรวจสอบว่ามีแถวที่ถูกอัปเดตหรือไม่
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'ไม่พบข้อมูลที่ต้องการอัปเดต' });
        }

        // ส่งข้อความสำเร็จกลับไป
        res.status(200).json({ message: 'อัปเดตข้อมูลสำเร็จ!' });
    });
});




// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
