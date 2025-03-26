import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const regions = [
    "Toshkent shahar", "Qoraqalpog‘iston Respublikasi", "Andijon viloyati", "Buxoro viloyati",
    "Jizzax viloyati", "Qashqadaryo viloyati", "Navoiy viloyati", "Namangan viloyati",
    "Samarqand viloyati", "Sirdaryo viloyati", "Surxondaryo viloyati", "Farg‘ona viloyati",
    "Xorazm viloyati"
];

const items = [
    {
        id: 1,
        name: "Rossiya milliy tadqiqot tibbiyot universitetining Toshkent shahridagi filiali",
        region: "Toshkent shahar",
        type: "Universitet",
        address: "-",
        index: "-",
        phone: "-",
        email: "-",
        website: "-",
        img: "https://ias.gov.uz//static/uploads/0624c4d6-7540-441e-9e86-1f32925ad395.jpg"
    },
    {
        id: 2,
        name: "A.I.Gertsen nomidagi Rossiya davlat pedagogika universiteti",
        region: "Toshkent shahar",
        type: "Universitet",
        address: "Yakkasaroy tumani, Bobur ko‘chasi, 55-uy",
        index: "-",
        phone: "-",
        email: "-",
        website: "https://www.herzen.uz",
        img: "https://ias.gov.uz//static/uploads/0eb6da31-b84e-4567-80e9-e0cb0284dcd9.jpg"
    },
    {
        id: 3,
        name: "AL-BUKHARI universiteti",
        region: "Buxoro viloyati",
        type: "Universitet",
        address: "Toshkent shahar, Shoh Rustaveli ko‘chasi, 154A-uy",
        index: "-",
        phone: "-",
        email: "-",
        website: "-",
        img: "https://ias.gov.uz//static/uploads/bd4814d1-511a-40de-a225-84bebf0b8112jpg"
    }
];

const Organization = () => {
    const [activeRegion, setActiveRegion] = useState('Toshkent shahar');

    // 🔥 **Filtrlash**
    const filteredOrganizations = items.filter(org =>
        activeRegion === "Barchasi" || org.region === activeRegion
    );

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='pt-4'>
                    <h1 className='!font-black text-2xl'>Oliy ta'lim muassasalari</h1>

                    {/* Viloyatlar bo'yicha filter */}
                    <div className='mt-4 flex gap-2 flex-wrap'>
                        <button
                            className={`px-4 py-2 border border-gray-200 rounded-md cursor-pointer ${activeRegion === 'Barchasi' ? 'bg-blue-600 !text-white !border-gray-100' : 'bg-white'}`}
                            onClick={() => setActiveRegion('Barchasi')} // ❗ Bu yerda bo'sh string o'rniga 'Barchasi' qo'ydik
                        >
                            Barchasi
                        </button>

                        {regions.map(region => (
                            <button
                                key={region}
                                className={`px-4 py-2 border border-gray-200 rounded-md cursor-pointer ${activeRegion === region ? 'bg-blue-600 !text-white !border-gray-100' : 'bg-white'}`}
                                onClick={() => setActiveRegion(region)}
                            >
                                {region}
                            </button>
                        ))}
                    </div>


                    <p className="!mt-4 text-gray-600">Tashkilotlar: {filteredOrganizations.length}</p>

                    <div className='mt-4 space-y-4'>
                        {filteredOrganizations.length > 0 ? (
                            filteredOrganizations.map((org, index) => (
                                <div className='border shadow border-gray-200 bg-white p-4 rounded-lg flex items-end justify-between'>
                                    <div key={index} className=' flex items-center space-x-4 max-[888px]:flex-col'>
                                        <img src={org.img} alt={org.name} className=' w-42 h-32 object-cover rounded-md' />
                                        <div className='flex-1'>
                                            <h2 className='text-lg font-semibold'>{org.name}</h2>
                                            <p><strong>Hudud:</strong> {org.region}</p>
                                            <p><strong>Tashkilot turi:</strong> {org.type}</p>
                                            <p><strong>Manzil:</strong> {org.address}</p>
                                            <p><strong>Indeks:</strong> {org.index}</p>
                                            <p><strong>Telefon:</strong> {org.phone}</p>
                                            <p><strong>E-Mail:</strong> {org.email}</p>
                                            <p><strong>Veb-sayt:</strong> {org.website}</p>
                                        </div>
                                    </div>
                                    <Link to={`/organization-details/${org.id}`}>
                                        <Button type='primary' className='text-end'>Batafsil</Button>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Bu hududda oliy ta'lim muassasalari topilmadi.</p>
                        )}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default Organization;
