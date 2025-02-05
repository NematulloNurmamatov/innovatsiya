import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';

const NewsDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <Sidebar>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='pt-4 col-span-9'>
                        <h1 className='!font-bold text-3xl'>Ilmiy loyihalar monitoringi o‘tkazilmoqda</h1>
                        <p> Details for article ID: {id}</p>
                        <img className='w-[400px] mb-5' src="https://nsp.gov.uz/static/uploads/news_img09c69724-1542-4ae6-b909-9f1844182fab.jpg" alt="" />
                        <p>Ilmiy faoliyatga oid davlat dasturlari doirasida amalga oshirilayotgan 253 ta ilmiy loyihaning bajarilishini o‘rganish maqsadida Innovatsion rivojlanish agentligi va Ilmiy-texnik axborot markazi xodimlari hamda mustaqil ekspertlardan iborat ishchi guruhlar 16-21-dekabr kunlari monitoring o‘tkazmoqda.</p>
                        <p>Hususan, Qoraqalpog‘iston Respublikasi va barcha viloyatlardagi jami 110 ta oliy ta’lim va ilmiy-tadqiqot muassasalarida amalga oshirilayotgan ilmiy loyihalarning samaradorligi tahlil qilinib, mavjud muammolar bevosita joylarda o‘rganilmoqda.

                        </p>
                        <p>Monitoring jarayonida ilmiy-tadqiqot ishlarining imzolangan shartnoma va uning kalendar rejasiga asosan bajarilishi, ijrochi tashkilot tomonidan zarur shart-sharoitlar yaratib berilganligi, qo‘lga kiritilgan muhim ilmiy natijalar va ularning mavjud ehtiyojlarga mosligi, davlat byudjeti mablag‘larining maqsadli sarflanganligi, ilmiy asbob-uskunalar xaridi, nufuzli mahalliy va xorijiy jurnallarda maqolalar chop etish natijalari o‘rganilishi rejalashtirilgan.

                        </p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, ea laborum vel perspiciatis ab officia quisquam, quae perferendis aspernatur impedit, temporibus corrupti. Tempore aliquam magnam incidunt, unde fugit rerum beatae.</p>
                    </div>
                    <div className='col-span-3 flex flex-col gap-4 pt-5'>
                        <h1 className='text-xl !font-black'>So'nggi yangiliklar</h1>
                        <div className='border border-gray-500 rounded p-2 bg-gray-50 hover:shadow-lg'>
                            <p>17.12.2024</p>
                            <p>Ilmiy loyihalar monitoringi o‘tkazilmoqda</p>
                        </div>
                        <div className='border border-gray-500 rounded p-2 bg-gray-50 hover:shadow-lg'>
                            <p>06.12.2024</p>
                            <p>Dunyodagi eng qimmat startap maʼlum boʻldi</p>
                        </div>
                        <div className='border border-gray-500 rounded p-2 bg-gray-50 hover:shadow-lg'>
                            <p>28.05.2024</p>
                            <p>Yangilangan Konstitutsiya — O‘zbekistonda innovatsiyalar va axborot texnologiyalarini rivojlantirish poydevori</p>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    )
}

export default NewsDetails;