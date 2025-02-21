import React from 'react'
import Sidebar from '../components/Layout/Sidebar'

export default function Faq() {
    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10'>
                    <p className='text-2xl font-black'>Ko'p so'raladigan savollar</p>
                    <p><strong>DOI nima?</strong> <br /> <br />
DOI yoki raqamli ob'ekt identifikatori - bu global Internetdagi elektron hujjatga berilgan raqam, bu materiallarni qidirish va ulardan foydalanishni ancha soddalashtiradi. Oddiy qilib aytganda, bu ma'lum bir ob'ektga havola. Bu texnologiya ko'pincha akademiyada qo'llaniladi. Asosiy xususiyati shundaki, identifikatori bo'lgan ob'ektlarni faqat nashriyot, ya'ni uni joylashtirgan tashkilot o'chirishi mumkin.

Havola ikki qismdan iborat - prefiks va qo'shimchaga kirill formatidagi raqamlar va harflarni o'z ichiga olishi mumkin. Prefikslar nashriyotni aniqlaydi, qo'shimchasi esa ob'ekt raqamining o'zi. Bitta nashriyotda cheksiz ko'p sonli materiallar bo'lishi muhim, ammo ularning har birining qo'shimchasi o'ziga xos bo'lishi kerak.

Doi beruvchi tashkilotlar saytiga o'tish https://www.crossref.org/</p>
                </div>
            </Sidebar>
        </div>
    )
}
