import React from 'react';
import Sidebar from '../components/Layout/Sidebar';

const memorandums = [
    {
        id: 1,
        name: 'Toshkent davlat yuridik universiteti va Adam Mickiewicz universiteti o‘rtasidagi Anglashuv memoramumi',
        duration: '3 yil muddatga',
        countries: ['🇺🇿 O‘zbekiston', '🇵🇱 Polsha'],
        date: '06.06.2021',
        status: 'Bajarildi'
    },
    {
        id: 2,
        name: 'Toshkent davlat yuridik universiteti va Orenburg davlat universiteti o‘rtasidagi Anglashuv memorandumi',
        duration: '5 yil muddatga',
        countries: ['🇺🇿 O‘zbekiston', '🇷🇺 Rossiya'],
        date: '25.08.2021',
        status: 'Bajarildi'
    },
    {
        id: 3,
        name: 'Toshkent davlat yuridik universiteti va Hindiston yuridik universiteti o‘rtasidagi Anglashuv memorandumi',
        duration: '5 yil muddatga',
        countries: ['🇺🇿 O‘zbekiston', '🇮🇳 Hindiston'],
        date: '28.05.2021',
        status: 'Bajarildi'
    },
    {
        id: 4,
        name: 'Toshkent davlat yuridik universiteti va Rossiya davlat tovar va moliya universiteti o‘rtasidagi Anglashuv memorandumi',
        duration: '5 yil muddatga',
        countries: ['🇺🇿 O‘zbekiston', '🇷🇺 Rossiya'],
        date: '26.08.2021',
        status: 'Bajarildi'
    }
];

export default function Memoriandums() {
    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10 px-6'>
                    <h2 className='text-2xl !font-bold mb-6'>Xorijiy tashkilotlar bilan tuzilgan memorandumlar</h2>

                    {/* Jadval konteyneri */}
                    <div className='overflow-x-auto'>
                        <table className='min-w-full bg-white border border-gray-300 shadow-md hidden md:table'>
                            <thead className='bg-gray-100 border-b'>
                                <tr>
                                    <th className='py-2 px-4 border'>№</th>
                                    <th className='py-2 px-4 border text-left'>Hujjat nomi</th>
                                    <th className='py-2 px-4 border'>Ma’lumot</th>
                                    <th className='py-2 px-4 border'>Ishtirok etgan davlatlar</th>
                                    <th className='py-2 px-4 border'>Sana</th>
                                    <th className='py-2 px-4 border'>Holat</th>
                                </tr>
                            </thead>
                            <tbody>
                                {memorandums.map((memo, index) => (
                                    <tr key={memo.id} className='border-b hover:bg-gray-50'>
                                        <td className='py-2 px-4 border text-center'>{index + 1}</td>
                                        <td className='py-2 px-4 border'>{memo.name}</td>
                                        <td className='py-2 px-4 border text-center'>{memo.duration}</td>
                                        <td className='py-2 px-4 border text-center'>{memo.countries.join(', ')}</td>
                                        <td className='py-2 px-4 border text-center'>{memo.date}</td>
                                        <td className='py-2 px-4 border text-center'>{memo.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Mobil versiya uchun karta shaklida chiqaramiz */}
                        <div className="md:hidden">
                            {memorandums.map((memo, index) => (
                                <div key={memo.id} className="border border-gray-300 p-4 mb-4 shadow-md rounded-lg bg-white">
                                    <h3 className="text-lg font-bold mb-2">{index + 1}. {memo.name}</h3>
                                    <p className="text-sm"><strong>Ma’lumot:</strong> {memo.duration}</p>
                                    <p className="text-sm"><strong>Ishtirok etgan davlatlar:</strong> {memo.countries.join(', ')}</p>
                                    <p className="text-sm"><strong>Sana:</strong> {memo.date}</p>
                                    <p className="text-sm"><strong>Holat:</strong> {memo.status}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
