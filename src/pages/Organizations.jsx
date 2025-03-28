import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const items = [
    {
        id: 1,
        name: "O'zbekiston Respublikasi Oliy ta'lim fan va innovatsiyalar vazirligi",
        region: "Toshkent shahar",
        type: "Vazirlik",
        address: "Olmazor tumani, Universitet ko'ch., 7-uy",
        index: "100174",
        phone: "+998 71 203-23-23",
        email: "edu@gov.uz",
        website: "gov.uz",
        otm: "5",
        huzuridagi: "3",
        img: "https://ias.gov.uz//static/uploads/f9a3abcf-6c35-4d62-b47a-1ca48b1c453e.jpg"
    },
    {
        id: 2,
        name: "O'zbekiston Respublikasi Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi",
        region: "Toshkent shahar",
        type: "Vazirlik",
        address: "Amir Temur shoh ko'chasi 4",
        index: "100000",
        phone: "+998 71 238-41-45",
        email: "info@mitc.uz",
        website: "mitc.uz",
        otm: "7",
        huzuridagi: "12",
        img: "https://ias.gov.uz//static/uploads/44844d4d-7bb7-4fe6-8e8e-c1c44ac97810.png"
    },
    {
        id: 3,
        name: "O'zbekiston Respublikasi Yoshlar ishlari agentligi",
        region: "Toshkent shahar",
        type: "Agentlik",
        address: "Mustaqillik shoh ko'chasi 12",
        index: "100200",
        phone: "+998 71 123-45-67",
        email: "info@youth.uz",
        website: "youth.uz",
        otm: "2",
        huzuridagi: "1",
        img: "https://ias.gov.uz//static/uploads/5d589277-9ca8-4a54-81d5-a7bfdbe36ed4jpeg"
    },
    {
        id: 4,
        name: "O'zbekiston Respublikasi Yoshlar ishlari agentligi",
        region: "Toshkent shahar",
        type: "Qo'mita",
        address: "Mustaqillik shoh ko'chasi 12",
        index: "100200",
        phone: "+998 71 123-45-67",
        email: "info@youth.uz",
        website: "youth.uz",
        otm: "2",
        huzuridagi: "1",
        img: "https://ias.gov.uz//static/uploads/27983083-319b-46d5-8225-f84c69d51194jpg"
    },
    {
        id: 5,
        name: "O'zbekiston Respublikasi Yoshlar ishlari agentligi",
        region: "Toshkent shahar",
        type: "Akademiya",
        address: "Mustaqillik shoh ko'chasi 12",
        index: "100200",
        phone: "+998 71 123-45-67",
        email: "info@youth.uz",
        website: "youth.uz",
        otm: "2",
        huzuridagi: "1",
        img: "https://ias.gov.uz//static/uploads/e520f6c0-5357-4156-bf6a-bcdccb0b87c5jpg"
    },
    {
        id: 6,
        name: "O'zbekiston Respublikasi Yoshlar ishlari agentligi",
        region: "Toshkent shahar",
        type: "Aksiyadorlik jamiyati",
        address: "Mustaqillik shoh ko'chasi 12",
        index: "100200",
        phone: "+998 71 123-45-67",
        email: "info@youth.uz",
        website: "youth.uz",
        otm: "2",
        huzuridagi: "1",
        img: "https://ias.gov.uz//static/uploads/3d72006c-c4ab-4d27-9fde-b928a6361740jpeg"
    },
    {
        id: 7,
        name: "O'zbekiston Respublikasi Yoshlar ishlari agentligi",
        region: "Toshkent shahar",
        type: "Assotsiatsiya",
        address: "Mustaqillik shoh ko'chasi 12",
        index: "100200",
        phone: "+998 71 123-45-67",
        email: "info@youth.uz",
        website: "youth.uz",
        otm: "2",
        huzuridagi: "1",
        img: "https://ias.gov.uz//static/uploads/df62e9d2-00f8-409a-a01c-674046b9fe3b.jpg"
    },
];

const Organizations = () => {
    const [activeTab, setActiveTab] = useState('Vazirlik');

    // 🔥 **Filtrlash**
    const filteredOrganizations = items.filter(org => org.type === activeTab);

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='pt-4'>
                    <h1 className='!font-black text-2xl'>Davlat boshqaruv organlari</h1>
                    <div className="mt-4 flex flex-wrap gap-3">
                        {['Vazirlik', 'Qo\'mita', 'Agentlik', 'Akademiya', 'Aksiyadorlik jamiyati', 'Assotsiatsiya'].map(tab => (
                            <button
                                key={tab}
                                className={`px-5 py-2 cursor-pointer rounded-lg font-medium border transition-all duration-300 shadow
                ${activeTab === tab
                                        ? 'bg-blue-600 !text-white border-blue-600 shadow-md scale-105'
                                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-500 hover:!text-white hover:border-blue-500'}
            `}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className='mt-4 space-y-4'>
                        {filteredOrganizations.length > 0 ? (
                            filteredOrganizations.map((org, index) => (
                                <div className='border border-gray-200 shadow bg-white p-4 rounded-lg max-[600px]:flex-col flex items-end justify-between'>
                                    <div key={index} className=' flex items-center space-x-4 max-[600px]:flex-col'>
                                        <img src={org.img} alt={org.name} className=' w-42 max-[600px]:!w-full h-32 object-cover rounded-md' />
                                        <div className='flex-1'>
                                            <h2 className='text-lg pt-1 !font-bold'>{org.name}</h2>
                                            <p><strong>Hudud:</strong> {org.region}</p>
                                            <p><strong>Tashkilot turi:</strong> {org.type}</p>
                                            <p><strong>Manzil:</strong> {org.address}</p>
                                            <p><strong>Indeks:</strong> {org.index}</p>
                                            <p><strong>Telefon:</strong> {org.phone}</p>
                                            <p><strong>E-Mail:</strong> {org.email}</p>
                                            <p><strong>Veb-sayt:</strong> {org.website}</p>
                                        </div>
                                    </div>
                                    <Link to={`/organizations-details/${org.id}`}>
                                        <Button type='primary' className='text-end'>Batafsil</Button>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Bu toifadagi tashkilotlar topilmadi.</p>
                        )}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default Organizations;
