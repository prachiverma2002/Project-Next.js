import mysql from 'mysql2/promise';

export default async (req, res) => {
    if (req.method === 'GET') {
        const db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'your_database',
        });
        const [rows] = await db.query('SELECT id, name, address, city, image FROM schools');
        res.status(200).json(rows);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
