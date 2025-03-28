import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import { PhoneFilled } from '@ant-design/icons';

const university = {
    // title: `"Innovatsiya texnalogiyalari markazi" ma'suliyati cheklangan jamiyat`,
    name: `"Innovatsiya texnalogiyalari markazi" ma'suliyati cheklangan jamiyat`,
    location: "Toshkent shahar",
    type: "Ilmiy-tadqiqot instituti",
    img: "https://ias.gov.uz//static/uploads/6a251c91-9d77-4f04-9371-20433bb2060e.jpg",
    address: "Yakkasaroy tumani, Bobur ko‘chasi, 55-uy",
    website: "https://www.herzen.uz/",
    established: "2020-yil",
    index: "100084",
    phone: "998 70 717 17 76",
    email: "info@herzen.uz",
    faks: "+998 73 244 49 14",
    description: "-",
    rahbar: "https://ias.gov.uz//static/uploads/fc282763-66c5-4aba-b478-7e9db4e0868a.png",
};

const OrganizationDetails2 = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('umumiy');

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='pt-4 md:col-span-9 col-span-12'>
                        <h1 className='!font-bold text-3xl mb-4 text-center md:text-left'>
                            {university.name}
                        </h1>

                        {/* Navigatsiya tugmalari */}
                        <div className="flex flex-wrap justify-center md:justify-start space-x-4 border-b border-gray-500 pb-2">
                            <button className={`px-4 py-2 ${activeTab === 'umumiy' ? 'border-b-2 border-blue-500 font-bold' : ''}`} onClick={() => setActiveTab('umumiy')}>Umumiy ma'lumot</button>
                            <button className={`px-4 py-2 ${activeTab === 'tashkilot' ? 'border-b-2 border-blue-500 font-bold' : ''}`} onClick={() => setActiveTab('tashkilot')}>Tashkilot haqida</button>
                            <button className={`px-4 py-2 ${activeTab === 'rahbar' ? 'border-b-2 border-blue-500 font-bold' : ''}`} onClick={() => setActiveTab('rahbar')}>Rahbariyat</button>
                            <button className={`px-4 py-2 ${activeTab === 'kontingent' ? 'border-b-2 border-blue-500 font-bold' : ''}`} onClick={() => setActiveTab('kontingent')}>Kontingent</button>
                        </div>

                        {/* Umumiy ma'lumot */}
                        {activeTab === 'umumiy' && (
                            <div className="mt-4">
                                <p className='font-bold text-xl'>{university.title}</p>
                                <div className='flex flex-col md:flex-row gap-5 items-center'>
                                    <img className='w-full md:w-[300px] max-w-full' src={university.img} alt="" />
                                    <div>
                                        <h2 className="text-xl font-semibold">Umumiy ma'lumot</h2>
                                        <p>Hudud: {university.location}</p>
                                        <p>Tashkilot turi: {university.type}</p>
                                        <p>Manzil: {university.address}</p>
                                        <p>Veb-sayt: <a href={university.website} className="text-blue-500">{university.website}</a></p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tashkilot haqida */}
                        {activeTab === 'tashkilot' && (
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold">Tashkilot haqida</h2>
                                <p>Tashkil topgan sana: {university.established}</p>
                                <p>{university.description}</p>
                            </div>
                        )}

                        {/* Rahbariyat */}
                        {activeTab === 'rahbar' && (
                            <div className="mt-4">
                                <div className='border border-gray-500 rounded p-2 flex flex-col md:flex-row gap-5 items-center'>
                                    <img className='w-full md:w-[250px] max-w-full rounded' src={university.rahbar} alt="" />
                                    <div className='pt-4 text-center md:text-left'>
                                        <p className='font-bold text-[18px]'>Popov Vasilii Aleksandrovich</p>
                                        <p>Direktor</p>
                                        <PhoneFilled />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Kontingent */}
                        {activeTab === 'kontingent' && (
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold">Kontingent</h2>
                            </div>
                        )}
                    </div>
                </div>
            </Sidebar>
        </div>

    );
};

export default OrganizationDetails2;
