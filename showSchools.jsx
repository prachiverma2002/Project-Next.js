import React, { useEffect, useState } from 'react';

export default function ShowSchools() {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const fetchSchools = async () => {
            const res = await fetch('/api/getSchools');
            const data = await res.json();
            setSchools(data);
        };
        fetchSchools();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Schools List</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                {schools.map((school) => (
                    <div key={school.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
                        <img src={`/schoolImages/${school.image}`} alt={school.name} style={{ width: '100%' }} />
                        <h3>{school.name}</h3>
                        <p>{school.address}</p>
                        <p>{school.city}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
