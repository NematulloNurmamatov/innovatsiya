import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { sidebar_items } from '../constants/sidebarItems';
import Sidebar from '../components/Layout/Sidebar';

const Portal = () => {



    return (
        <Sidebar>
            <div className='pt-4'>
                <h1 className='!font-black text-2xl'>Portal haqida</h1>

                <h2 className='!font-black text-xl'>Asos</h2>

                <p>O`zbekiston Respublikasi Prezidentining 2020 yil 29 oktyabrdagi <strong>"Ilm-fanni 2030-yilgacha rivojlantirish konsepsiyasini tasdiqlash"</strong> to`g`risida <strong> PF-6097-sonli </strong> farmonining 2-ilovasi 38-bandida <strong>“Mamlakatning ilmiy salohiyatiga oid barcha ma'lumotlarni o'z ichiga olgan Milliy ilmiy portalni yaratish”</strong> nazarda tutilgan.</p>

                <h1 className='!font-black text-2xl'>O'zbekiston Respublikasi Milliy Ilmiy portali</h1>

                <p>O‘zbekiston Respublikasi Milliy ilmiy portali – bu ilm-fan sohasida respublikamizda amalga oshirilayotgan keng qo‘lamli ishlar borasida umumiy ma'lumotlar bazasini faoliyatini yo'lga qo'yish, statistik ma'lumotlarni yig‘ish, foydalanuvchilar uchun to‘liq ilm-fan sohasi to‘g‘risida eng oxirgi yangiliklar bilan tanishtirish hamda boshqa ko‘plab imkoniyatlarga ega bo‘lishlari mumkin bo‘lgan ma'lumotlar bazasi hisoblanadi.</p>

                <h1 className='!font-black text-2xl'>O‘zbekiston Respublikasi Milliy ilmiy portalining asosiy maqsadi quyidagilardan iborat:</h1>

                <ul className='space-y-4'>
                    <li>• Ilmiy yangiliklarni portalga muntazam yuklab borish;</li>
                    <li>• Ilmiy loyihalar, patentlar, dissertasiyalar va fanga oid statistik ma'lumotlarni to‘plash;</li>
                    <li>• Mamlakatning barcha universitetlari va ilmiy-tadqiqot institutlari va ularning moddiy-texnik bazasi haqida ma'lumotlarni shakllantirish;</li>
                    <li>• Respublika miqyosidagi dolzarb ilmiy yangiliklarni olib borish;</li>
                    <li>• Qulay va samarali tadqiqot blogini yaratish;</li>
                    <li>• O‘zbekiston Respublikasida himoyalangan ilmiy ishlar (dissertasiya, tezislar, doktorantlar, nomzodlar, PhD) to‘g‘risida yagona ma'lumotlar bazasini yaratish;</li>
                    <li>• Innovasiyalar va bank patentlari bilan ishlash imkoniyati;</li>
                    <li>• Davlat byudjetidan moliyalashtiriladigan fundamental, amaliy va innovasion loyihalar ma'lumotlar bazasini yaratish;</li>
                    <li>• Davlat byudjeti tomonidan moliyalashtirilgan loyihalar orasidan tanlab olingan eng samarali loyihalar ro‘yxatini shakllantirish;</li>
                    <li>• Chet el nashriyotlari bilan tuzilgan shartnomalar to‘g‘risida ma'lumotlar bazasini yaratish;</li>
                    <li>• Rasmiy ilmiy ma'lumotlarni tarqatish va yetkazib berishda vaqtni kechiktirishni minimallashtirish;</li>
                    <li>• Foydalanuvchini qiziqtirgan bo‘limlarda yoki hujjatlarda (ma'lumotlarda) sodir bo‘lgan o‘zgarishlar to‘g‘risida xabardor qilish va elektron xabar berish mexanizmlarini amalga oshirish;</li>
                    <li>• Axborot makonini shakllantirish va tizimlashtirishga yagona yondashuvni ta'minlash;</li>
                    <li>• Ma'lumotlarni qo‘lay va samarali qidirish imkoniyatlarini taqdim etish;</li>
                    <li>• Umumiy axborot resurslarini yaratish (yangiliklar, voqealar, asosiy ma'lumotlar, media-kontent);</li>
                    <li>• G‘oyalarni yig‘ish va qayta ishlash tizimini yaratish.</li>
                </ul>

                <h1 className='!font-black text-2xl'>O‘zbekiston milliy ilmiy portali tizimining asosiy vazifalari quyidagilardan iborat:</h1>
                <ul className="space-y-4">
                    <li>• Ilm-fan haqida yagona ma'lumotlar bazasini yaratish;</li>
                    <li>• Milliy ilmiy portal doirasida mamlakatning ilmiy salohiyatiga oid barcha ma'lumotlarni o‘z ichiga olgan yagona akademik makon, ilmiy-tadqiqot loyihalarini moliyalashtirish uchun arizalarni avtomatik tarzda topshirish va ro‘yxatdan o‘tkazish modulini ishlab chiqish;</li>
                    <li>• Ilm-fan taraqqiyotiga ko‘maklashadigan zamonaviy axborot muhitini shakllantirish;</li>
                    <li>• Davlat ilmiy-texnika dasturlarini shakllantirish, amalga oshirish va ular ijrosining hamda mamlakatni ijtimoiy-iqtisodiy rivojlantirishda ilmiy-tadqiqot ishlari natijalaridan foydalanishning tizimli monitoring qilish modulini ishlab chiqish;</li>
                    <li>• Mamlakatda faoliyat ko‘rsatayotgan ilmiy-tadqiqot institutlarining innovatsiyalar va ilmiy salohiyati bo‘yicha yagona tizimini yaratish;</li>
                    <li>• Fan va texnologiyalar sohasida xalqaro hamkorlikni rivojlantirish, xorijiy investisiyalar va grantlarni jalb yetish, xorijiy hamkorlar bilan qo‘shma ilmiy-texnik loyihalar va innovatsion ishlanmalar bajarilishini tashkil etish;</li>
                    <li>• Davlat byudjeti mablag‘lari hisobidan moliyalashtiriladigan loyihalarning yagona ma'lumotlar bazasini yaratish;</li>
                    <li>• Investorlar uchun arizalarni avtomatlashtirilgan tizim orqali yuborish modulini ishlab chiqish;</li>
                    <li>• Portal foydalanuvchilari uchun interaktiv xaritada qiziqarli ma'lumotlar bazasini yaratish;</li>
                    <li>• O‘zbekistondagi texnoparklar hamda kovorking binolarida ijaraga joy olish imkoniyatini yaratish modulini ishlab chiqish;</li>
                    <li>• Texnologik xizmatlardan foydalanish modulini ishlab chiqish;</li>
                    <li>• Milliy ilmiy portalda innovasion ob'ektlar va ta'lim infratuzilmasi to‘g‘risida dolzarb ma'lumotlar olish hamda ularning hizmatlaridan foydalanish modulini ishlab chiqish;</li>
                    <li>• Innovasion biznesni rivojlantirish bo‘yicha mintaqaviy tashabbuslar bilan tanishish modulini ishlab chiqish;</li>
                    <li>• Bundan tashqari, O‘zbekiston milliy ilmiy portali rivojlanishda qaratiladigan quyidagi asosiy yo'nalishlar bo‘yicha ishlar amalga oshiriladi:</li>
                    <li>• Ma'lumotlar to‘plash, analiz qilish va ilmiy texnik axborotlarni baholash va tizimini ishlab chiqish;</li>
                    <li>• Davlat byudjetidan moliyalashtiriladigan ilmiy-tadqiqot loyihalar bo‘yicha hisobotlar to‘plash va tizimini ishlab chiqish;</li>
                    <li>• Fan doktorlari (DSc) va falsofa doktorlari (PhD) ma'lumotlarni to‘plash va bazasini yaratish;</li>
                    <li>• O‘zbekistoning ilmiy jurnallarida chop etilgan maqolalar bazasi shakllantirish;</li>
                    <li>• Intellektual mulk uchun patentlar bazasi shakllantirish.</li>
                </ul>

            </div>
        </Sidebar>

    );
};

export default Portal;
