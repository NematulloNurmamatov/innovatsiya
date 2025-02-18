import React from 'react';
import Sidebar from '../components/Layout/Sidebar';

export default function IlmiyStajirovka() {
    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10 px-6'>
                    <h2 className='text-3xl font-bold mb-4'>Ilmiy Stajirovka</h2>

                    <p className='mb-4'>
                        Yosh olimlarni yetakchi xorijiy ilmiy tashkilotlarda (markazlar, universitetlar va boshqalar),
                        shu jumladan, ilmiy laboratoriyalarni jihozlash uchun sotib olinadigan yuqori texnologik
                        asbob-uskunalarda ishlash metodikasini o‘zlashtirish uchun qisqa muddatli ilmiy stajirovkalarga
                        yuborish maqsadida ularni tanlov asosida saralash tartibi to‘g‘risidagi nizom
                        <strong> Adliya vazirligida davlat ro‘yxatidan o‘tkazilgan.</strong>
                    </p>

                    <h3 className='text-xl font-semibold mt-6 mb-2'>📌 Tanlov va talablar</h3>
                    <p className='mb-4'>
                        Ilmiy stajirovkalarga yuborish bo‘yicha takliflarni umumlashtirish, nomzodlarni saralash, tanlovni
                        tashkil etish va o‘tkazish <strong> O‘zbekiston Respublikasi Innovatsion rivojlanish vazirligi</strong>
                        tomonidan amalga oshiriladi.
                    </p>

                    <ul className='list-disc pl-6 space-y-2'>
                        <li>Nomzodning yoshi <strong> 25 dan 45 gacha</strong> bo‘lishi kerak.</li>
                        <li>Xorijiy tillarni <strong>ish faoliyatini amalga oshirish darajasida</strong> bilishi zarur.</li>
                        <li>Ilmiy stajirovkalar muddati:
                            <ul className='list-disc pl-6 space-y-1'>
                                <li>Yosh olimlar uchun <strong>6 oygacha</strong></li>
                                <li>Texnologik jihozlarda ishlash uchun <strong>3 oygacha</strong></li>
                            </ul>
                        </li>
                    </ul>

                    <h3 className='text-xl font-semibold mt-6 mb-2'>📅 Tanlov jarayoni</h3>
                    <p className='mb-4'>
                        Innovatsion rivojlanish vazirligi tanlov haqida e’lonni <strong> 1 oy oldin</strong> rasmiy veb-saytida va
                        ommaviy axborot vositalarida e’lon qiladi.
                    </p>

                    <h3 className='text-xl font-semibold mt-6 mb-2'>📄 Talab qilinadigan hujjatlar</h3>
                    <ul className='list-disc pl-6 space-y-2'>
                        <li>Ilmiy stajirovka rejasi</li>
                        <li>Ilmiy kengash qarori</li>
                        <li>Ilmiy stajirovka taklifnomasi</li>
                        <li>Nomzodning ma’lumotnoma-obyektivkasi</li>
                        <li>Diplom nusxasi</li>
                        <li>Ilmiy darajani tasdiqlovchi hujjatlar (agar mavjud bo‘lsa)</li>
                        <li>Mehnat daftarchasi nusxasi</li>
                        <li>Fuqarolik pasporti nusxasi</li>
                        <li>3x4 sm o‘lchamdagi 4 dona fotosurat</li>
                        <li>Chet tilidan bilim darajasini tasdiqlovchi sertifikat (agar mavjud bo‘lsa)</li>
                    </ul>

                    <h3 className='text-xl font-semibold mt-6 mb-2'>✅ Tanlov natijalari</h3>
                    <p className='mb-4'>
                        Nomzodlarning hujjatlari maxsus ekspert guruhi tomonidan <strong>1 oy</strong> ichida ko‘rib chiqiladi.
                        Nomzodlar ilmiy stajirovka dasturlarini <strong>chet tilida prezentatsiya shaklida himoya</strong> qilishlari talab etiladi.
                    </p>

                    <p>
                        Yakuniy xulosalar Innovatsion rivojlanish vazirligiga taqdim etilib,
                        tasdiqlangan nomzodlar ilmiy stajirovkaga yuboriladi.
                    </p>
                </div>
            </Sidebar>
        </div>
    );
}
