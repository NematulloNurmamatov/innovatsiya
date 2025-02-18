import React from 'react';
import Sidebar from '../components/Layout/Sidebar';

export default function Horizon() {
    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10 px-6'>
                    <h2 className='text-3xl !font-bold mb-4'>Horizon Europe</h2>
                    <p className='mb-4'>
                        <strong>“Horizon Europe”</strong> — Yevropa Ittifoqining 2021-2027-yillarga moʻljallangan
                        <strong> 95,5 milliard yevrolik </strong> tadqiqot va innovatsion grand dasturi boʻlib,
                        Horizon 2020 dasturining davomi hisoblanadi. Hozirgi kunga qadar bu eng yirik tadqiqot va
                        innovatsion dastur sanaladi.
                    </p>

                    <h3 className='text-xl font-semibold mt-6 mb-2'>📌 Strategik reja va moliyalashtirish</h3>
                    <p className='mb-4'>
                        Horizon Europe ishchi dasturi Yevropa Ittifoqining 2021-2024-yillarga moʻljallangan
                        <strong> tadqiqot va innovatsion ustuvorliklarini</strong> belgilash uchun
                        <strong>2021-yil mart oyida</strong> qabul qilingan Horizon Europe strategik rejasiga asoslanadi.
                        Moliyalashtirishning katta qismi ishchi dasturlarda belgilangan tanlov takliflari asosida ajratiladi.
                    </p>

                    <h3 className='text-xl font-semibold mt-6 mb-2'>🚀 Dastur bosqichlari</h3>
                    <ul className='list-disc pl-6 space-y-2'>
                        <li><strong>Fevral 2021:</strong> Horizon Europe Komissiyasi doirasida birinchi Yevropa tadqiqot kengashi chaqiruvlari ishga tushdi.</li>
                        <li><strong>Mart 2021:</strong> Yevropa innovatsion kengashining yangi moliyalashtirish imkoniyatlari yaratildi.</li>
                        <li><strong>Aprel 2021:</strong> Koronavirus variantlari boʻyicha tadqiqot va innovatsiyalar uchun <strong>123 million yevro</strong> ajratildi.</li>
                        <li><strong>22-iyun 2021:</strong> Moliyalashtirish va tender oʻtkazish portali yoʻlga qoʻyildi.</li>
                        <li><strong>23-24-iyun 2021:</strong> Yevropa tadqiqot va innovatsiya kunlari tashkil qilindi.</li>
                        <li><strong>28-iyun - 9-iyul 2021:</strong> Salohiyatli izlanuvchilar uchun <strong> “Ochiq eshiklar kuni”</strong> oʻtkazildi.</li>
                    </ul>
                </div>
            </Sidebar>
        </div>
    );
}
