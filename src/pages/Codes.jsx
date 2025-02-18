import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import { Select } from 'antd';

const data = {
    "01.01.00 - Matematika": [
        { id: 1, code: "01.01.01", name: "Matematik analiz", field: "Fizika-Matematika fanlari" },
        { id: 2, code: "01.01.02", name: "Differensial tenglamalar va matematik fizika", field: "Fizika-Matematika fanlari" }
    ],
    "01.02.00 - Mexanika": [
        { id: 3, code: "01.02.01", name: "Nazariy mexanika", field: "Fizika-Matematika fanlari, Texnika fanlari" },
        { id: 4, code: "01.02.02", name: "Mashinalar, asboblar va uskunalar dinamikasi va mustahkamligi", field: "Fizika-Matematika fanlari, Texnika fanlari" }
    ]
};

export default function Codes() {
    const [selectedCategory, setSelectedCategory] = useState(null); // Dastlab hammasi chiqishi uchun null

    // Agar `selectedCategory` null bo'lsa, barcha ma'lumotlarni olish
    const filteredData = selectedCategory ? { [selectedCategory]: data[selectedCategory] } : data;

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10 px-6'>
                    <h2 className='text-2xl font-bold mb-6'>Doktorantura va tayanch doktorantura ixtisoslik shifrlari</h2>

                    {/* Dropdown Select */}
                    <Select
                        className="p-2 !mb-6 w-full"
                        value={selectedCategory}
                        onChange={(value) => setSelectedCategory(value)}
                        allowClear
                        placeholder="Ixtisoslikni tanlang"
                        options={Object.keys(data).map(key => ({ value: key, label: key }))}
                    />

                    {/* Jadval */}
                    <table className='w-full border-collapse border border-gray-300'>
                        <thead>
                            <tr className='bg-gray-200'>
                                <th className='border p-2'>Ixtisoslik shifri</th>
                                <th className='border p-2'>Nomi</th>
                                <th className='border p-2'>Ilm-fan tarmog'i</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(filteredData).map((category) => (
                                <>
                                    {/* Bo'lim sarlavhasi */}
                                    <tr key={category} className="bg-white font-bold">
                                        <td colSpan="3" className="border p-2">{category}</td>
                                    </tr>
                                    {/* Bo'lim ichidagi ma'lumotlar */}
                                    {filteredData[category].map((item) => (
                                        <tr key={item.id} className='hover:bg-gray-100'>
                                            <td className='border p-2'>{item.code}</td>
                                            <td className='border p-2'>{item.name}</td>
                                            <td className='border p-2'>{item.field}</td>
                                        </tr>
                                    ))}
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Sidebar>
        </div>
    );
}
