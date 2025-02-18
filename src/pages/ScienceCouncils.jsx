import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';

const data = {
    'Aniq va tabiiy fanlar': [
        { id: 1, code: '01.00.00', name: "O'zbekiston Milliy universiteti", chairman: 'Sadullaev Azimboy' },
        { id: 2, code: '01.00.00', name: 'Matematika instituti', chairman: 'Rozikov Utkir' },
        { id: 3, code: '01.00.00', name: 'Astronomiya instituti', chairman: 'Egamberdiyev Shuxrat' },
    ],
    'Ijtimoiy-gumanitar fanlar': [
        { id: 4, code: '07.00.00', name: 'Milliy arxeologiya markazi', chairman: 'Shirinov Temur' },
        { id: 5, code: '07.00.00', name: 'Tarix instituti', chairman: 'Hamidov Azamat' },
    ],
    'Tibbiyot fanlari': [
        { id: 6, code: '14.00.00', name: 'Toshkent tibbiyot akademiyasi', chairman: 'Karimov Shavkat' },
        { id: 7, code: '14.00.00', name: 'Samarqand tibbiyot instituti', chairman: 'Ismoilov Bahodir' },
    ]
};

export default function ScienceCouncils() {
    const [selectedCategory, setSelectedCategory] = useState('Aniq va tabiiy fanlar');

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10 px-6'>
                    <h2 className='text-2xl font-bold mb-6'>Yo'nalishlar bo'yicha ilmiy kengashlar</h2>
                    <select
                        className='border p-2 mb-6'
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {Object.keys(data).map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <table className='w-full border-collapse border border-gray-300'>
                        <thead>
                            <tr className='bg-gray-200'>
                                <th className='border p-2'>Ixtisoslik shifri</th>
                                <th className='border p-2'>Ilmiy kengash</th>
                                <th className='border p-2'>IK raisi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data[selectedCategory].map((item) => (
                                <tr key={item.id} className='hover:bg-gray-100'>
                                    <td className='border p-2'>{item.code}</td>
                                    <td className='border p-2'>{item.name}</td>
                                    <td className='border p-2'>{item.chairman}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Sidebar>
        </div>
    );
}
