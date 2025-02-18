import React from 'react';
import Sidebar from '../components/Layout/Sidebar';

export default function Erasmus() {
    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10 px-6'>
                    <h2 className='text-3xl font-bold mb-4'>Erasmus+ Oliy ta'lim hamkorlik dasturi</h2>
                    <p className='mb-4'>
                        <strong>Erasmus+ dasturi</strong> - ta’lim, professional ta’limni taraqqiy ettirish, yoshlarni kamolotga yetkazish va
                        sportni rivojlantirish sohalari bo’yicha 2014-2020 yillar uchun mo’ljallangan
                        Yevropa Ittifoqi tomonidan moliyalashtiriladigan dasturdir.
                    </p>

                    <h3 className='text-xl font-semibold mt-6 mb-2'>📌 Dastur quyidagi yo'nalishlarni qamrab oladi:</h3>
                    <ul className='list-disc pl-6 space-y-2'>
                        <li>Uzluksiz ta’lim dasturi (<em>Erasmus, Leonardo da Vinci, Comenius, Grundtvig va Jean Monnet</em>)</li>
                        <li>Yoshlar yo’nalishi dasturi</li>
                        <li>5ta xalqaro hamkorlik dasturi (<em>Tempus, Erasmus Mundus, Alfa, Edulink</em> va sanoati rivojlangan mamlakatlar bilan hamkorlik dasturi)</li>
                        <li>Sportni rivojlantirish dasturi</li>
                    </ul>

                    <h3 className='text-xl font-semibold mt-6 mb-2'>🌍 Hamkorlik va moliyalashtirish</h3>
                    <p className='mb-4'>
                        Ushbu dastur turli yo’nalishlari bo’yicha <strong>Yevropa davlatlari va Hamkor-davlatlar</strong>
                        o’rtasida hamkorlik o’rnatish va uni moliyalashtirish imkoniyatini beradi.
                    </p>

                    <h3 className='text-xl font-semibold mt-6 mb-2'>🎓 Oliy ta'lim sohasidagi yo’nalishlar</h3>
                    <ul className='list-disc pl-6 space-y-2'>
                        <li>
                            <strong>Xalqaro kredit safarbarligi (CM)</strong> va <strong>Erasmus Mundus Qo’shma Magisterlik Dasturi (EMJMD)</strong>
                            (Key Action 1) - Talabalar, professor-o’qituvchi va xodimlarning almashinuv dasturlarini qo’llab-quvvatlash.
                        </li>
                        <li>
                            <strong>Oliy ta’limda salohiyatni oshirish (CBHE)</strong> (Key Action 2) - Oliy ta’lim muassasalarini
                            zamonaviylashtirish va xalqaro hamkorlikni rivojlantirish.
                        </li>
                        <li>
                            <strong>Milliy ekspertlar komandasi (HEREs)</strong> (Key Action 3) - Siyosiy muloqot olib borish,
                            xalqaro bitiruvchilar assotsiatsiyalari va oliy ta’lim tizimlarini takomillashtirish.
                        </li>
                        <li>
                            <strong>Jean Monnet dasturi</strong> - Yevropa Ittifoqi tadqiqotlari sohasida ta’lim va ilmiy-tadqiqot faoliyatini rivojlantirish.
                        </li>
                    </ul>

                    <h3 className='text-xl font-semibold mt-6 mb-2'>🌍 Erasmus+ Dasturida kimlar ishtirok etishi mumkin?</h3>
                    <p><strong>Dasturga to‘liq ishtirok etuvchi davlatlar:</strong></p>
                    <ul className='list-disc pl-6 space-y-2'>
                        <li>Yevropa Ittifoqiga a’zo 28 davlat</li>
                        <li>5 Yevropa Ittifoqiga a’zo bo‘lmagan davlat: <em>Makedoniya, Islandiya, Lixtenshteyn, Norvegiya, Turkiya</em></li>
                    </ul>

                    <p className='mt-4'><strong>Hamkor-davlatlar:</strong></p>
                    <ul className='list-disc pl-6 space-y-2'>
                        <li>Sharqiy Yevropa</li>
                        <li>Janubiy O'rta yer dengizi mamlakatlari</li>
                        <li>G'arbiy Bolqon</li>
                        <li>Rossiya Federatsiyasi</li>
                        <li>Markaziy Osiyo davlatlari</li>
                    </ul>
                </div>
            </Sidebar>
        </div>
    );
}
