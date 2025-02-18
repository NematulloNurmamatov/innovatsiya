import React from 'react';
import Sidebar from '../components/Layout/Sidebar';

const steps = [
    "Ommaviy axborot vositalarida qabul kvotalariga muvofiq o’qish uchun talabgorlarning hujjatlarini qabul qilish to’g’risida e’lon berish jarayoni yilning 1-Sentabridan boshlanadi.",
    "Yagona elektron tizim orqali hujjatlarni qabul qilib olish maxsus qoidalarni belgilash jarayoni Sentabr oyining 15-chisiga qadar davom etiladi.",
    "Yagona elektron tizimda ro’yxatdan o’tish uchun tegishli ma’lumotlarni kiritish va hujjatlarni elektron nusxasini yuklash jarayoni 10-oktabrgacha davom etadi.",
    "15-Oktabrgacha Yagona elektron tizimga o’qish uchun talabgorlar tomonidan kiritilgan tegishli ma’lumotlar va yuklangan hujjatlar belgilangan tartibda ko’rib chiqish va qabul qilinganini tasdiqlash jarayoni bo’lib o’tadi.",
    "25-Oktabrgacha O’qish uchun talabgorlarning imtihon va suhbat o’tkazish grafigini tuzdirish va elektron raqamli imzo (ERI) bilan tasdiqlanadi.",
    "O’qish uchun talabgorlarning imtihon va suhbat natijalarini Yagona elektron tizimga kiritish jarayoni 25-noyabrgacha bo’lib o’tadi.",
    "O’qish uchun talabgorlarning imtihon va suhbat natijalarini Yagona elektron tizimga kiritish jarayoni 25-noyabrgacha bo’lib o’tadi.",
    "O’qish uchun talabgorlarning imtihon va suhbat natijalarini Yagona elektron tizimga kiritish jarayoni 25-noyabrgacha bo’lib o’tadi."
];

export default function Register() {
    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10 px-6'>
                    <h2 className='text-2xl !font-bold mb-6'>Ro'yxatga olish jarayoni</h2>
                    <div className="relative border-l-4 border-[#005464] pl-8 space-y-6">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex items-start space-x-4">
                                {/* Raqamlar uchun doira */}
                                <div className="absolute -left-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#005464] text-white text-lg font-bold">
                                    {index + 1}
                                </div>
                                {/* Matn */}
                                <p className="text-gray-700 pl-8 bg-white p-4 rounded-lg shadow-md">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
