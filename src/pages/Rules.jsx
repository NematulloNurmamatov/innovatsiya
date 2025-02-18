import React from 'react';
import Sidebar from '../components/Layout/Sidebar';

export default function Rules() {
    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10 px-6'>
                    <h2 className='text-2xl font-bold mb-6'>
                        Oliy ta’limdan keyingi ta’lim tizimini tashkilashtirish bo‘yicha Normativ-huquqiy asos
                    </h2>

                    <p className='text-gray-700 leading-relaxed'>
                        O‘zbekiston Respublikasi Vazirlar Mahkamasining “Oliy ta’limdan keyingi ta’lim tizimini yanada takomillashtirish chora-tadbirlari” haqidagi qarori.
                    </p>

                    <div className='mt-6 bg-gray-100 p-4 rounded-lg shadow-md'>
                        <h3 className='text-xl font-semibold mb-3'>Qaror mazmuni</h3>
                        <p className='text-gray-600'>
                            O‘zbekiston Respublikasi Prezidentining 2017-yil 16-fevraldagi PF-4958-son Farmoniga asosan,
                            oliy ta’limdan keyingi ta’lim tizimi quyidagi yo‘nalishlarni qamrab oladi:
                        </p>
                        <ul className='list-disc pl-5 text-gray-600'>
                            <li>Falsafa doktori (PhD) ilmiy darajasini olish;</li>
                            <li>Fan doktori (DSc) ilmiy darajasini olish;</li>
                            <li>Oliy ta’lim muassasalari va ilmiy tashkilotlarda stajyor-tadqiqotchi-izlanuvchilar instituti.</li>
                        </ul>
                    </div>

                    {/* Agar rasm yoki PDF hujjat qo‘shish kerak bo‘lsa */}
                    <div className='mt-6'>
                        <p className='text-gray-700 mb-3'>Rasm yoki hujjat:</p>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
