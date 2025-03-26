import { ClockCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const newsData = [
    {
        id: 1,
        title: "Vengriya Qishloq xo'jaligi va tabiiy fanlar universitetiga qisqa muddatli stajirovkalarga tanlov e'lon qilinadi",
        description: "Innovatsion rivojlanish vazirligi 2021-yil 29-noyabr 2-dekabr kunlari Vengriya Respublikasiga amalga oshirilgan delegatsiya tashrifi davomida erishilgan kelishuv natijalariga muvofiq 25 nafar yosh olimlarni Vengriya Qishloq xo'jaligi va tabiiy fanlar universitetiga 1 oylik qisqa.",
        date: "12.02.2022",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/6/92/347301815801926.jpeg"
    },
    {
        id: 2,
        title: "Vengriya Qishloq xo'jaligi va tabiiy fanlar universitetiga qisqa muddatli stajirovkalarga tanlov e'lon qilinadi",
        description: "Innovatsion rivojlanish vazirligi 2021-yil 29-noyabr 2-dekabr kunlari Vengriya Respublikasiga amalga oshirilgan delegatsiya tashrifi davomida erishilgan kelishuv natijalariga muvofiq 25 nafar yosh olimlarni Vengriya Qishloq xo'jaligi va tabiiy fanlar universitetiga 1 oylik qisqa.",
        date: "12.02.2022",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/6/92/347301815801926.jpeg"
    }
];

const Elonlar = () => {
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl font-bold'>Elonlar</h2>
                <Link className='text-blue-600' to='/news'>Все новости</Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                {newsData.map(news => (
                    <div key={news.id} className='bg-gray-100 rounded-2xl overflow-hidden shadow-lg'>
                        <img className='w-full h-64 object-cover' src={news.image} alt={news.title} />
                        <div className='p-5'>
                            <h3 className='text-xl max-[600px]:!text-[16px] font-bold mb-2'>{news.title}</h3>
                            <p className='text-gray-700 max-[600px]:text-[13px] leading-6 max-[600px]:leading-4'>{news.description}</p>
                            <div className='flex flex-col sm:flex-row items-center sm:justify-between mt-4 gap-3'>
                                <Button className='w-full sm:w-auto border border-[#0099B5] text-[#0099B5]' size='large'>Подробнее</Button>
                                <p className='text-gray-600 flex items-center gap-2'><ClockCircleOutlined /> {news.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Elonlar;