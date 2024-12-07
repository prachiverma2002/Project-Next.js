import multer from 'multer';
import mysql from 'mysql2/promise';

const upload = multer({ dest: './public/schoolImages' });
const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'your_database',
});

export default async (req, res) => {
    if (req.method === 'POST') {
        upload.single('image')(req, {}, async (err) => {
            if (err) return res.status(500).json({ error: err.message });
            const { name, address, city, state, contact, email_id } = req.body;
            const image = req.file.filename;
            try {
                await db.query(
                    'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    [name, address, city, state, contact, image, email_id]
                );
                res.status(200).json({ success: true });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
