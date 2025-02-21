import React from 'react';
import Sidebar from '../components/Layout/Sidebar';
import { useNavigate } from 'react-router-dom';

const banks = [
    {
        id: 1,
        name: 'Jahon banki',
        logo: 'https://nsp.gov.uz/static/uploads/outinst_2987af30-32c2-4a0d-96a5-5dfa086fc99f.jpg',
        address: '1225 Connecticut Ave, Washington, DC, USA',
        phone: '+1 202 458 1876',
        email: 'info@worldbank.org',
        website: 'www.worldbank.org'
    },
    {
        id: 2,
        name: 'Islom taraqqiyot banki',
        logo: 'https://nsp.gov.uz/static/uploads/outinst_e313cc1f-3330-4d0f-89ba-db465b209b1a.png',
        address: 'Jidda, Saudiya Arabistoni',
        phone: '+966 12 636 1400',
        email: 'info@isdb.org',
        website: 'www.isdb.org'
    },
    {
        id: 3,
        name: 'Osiyo taraqqiyot banki',
        logo: 'https://nsp.gov.uz/static/uploads/outinst_63f09a1a-d776-4a72-98c8-9440a7cbf5aa.jpg',
        address: 'Manila, Filippin',
        phone: '+63 2 632 4444',
        email: 'info@adb.org',
        website: 'www.adb.org'
    },
    {
        id: 4,
        name: 'Evropa tiklanish va taraqqiyot banki',
        logo: 'https://nsp.gov.uz/static/uploads/outinst_1d9bf3ea-7342-4438-bbc6-aec82f53ceb8.jpg',
        address: 'One Exchange Square, London, UK',
        phone: '+44 20 7338 6000',
        email: 'info@ebrd.com',
        website: 'www.ebrd.com'
    },
    {
        id: 5,

        name: 'Xalqaro Valyuta Jamg‘armasi',
        logo: 'https://nsp.gov.uz/static/uploads/outinst_1268aa91-ffb1-4f52-9f1b-f2456753f689.jpg',
        address: '700 19th St NW, Washington, DC, USA',
        phone: '+1 202 623 7000',
        email: 'info@imf.org',
        website: 'www.imf.org'
    },
    {
        id: 6,
        name: 'Ko‘p tarmoqli investitsiyalarni kafolatlash agentligi',
        logo: 'https://nsp.gov.uz/static/uploads/outinst_edfc469d-9737-4524-bd1c-05b233a8d093.jpg',
        address: 'Washington, DC, USA',
        phone: '+1 202 458 2076',
        email: 'info@miga.org',
        website: 'www.miga.org'
    }
];

export default function Outinst() {
    const navigate = useNavigate();

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10 px-6'>
                    <h2 className='text-2xl !font-bold mb-6'>Xalqaro tashkilotlar va moliya institutlari</h2>

                    {/* Xalqaro moliya institutlari */}
                    <h2 className='text-xl !font-semibold mb-6'>Xalqaro moliya institutlari</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
                        {banks.map((bank) => (
                            <div key={bank.id} className='relative border border-gray-300 shadow-md rounded-lg p-6 bg-white'>
                                <img src={bank.logo} alt={bank.name} className='h-32 mx-auto mb-4' />
                                <hr />
                                <h3 className='text-lg font-bold my-2'>{bank.name}</h3>
                                <p className='text-sm text-gray-600'>{bank.address}</p>
                                <p className='text-sm mt-1'><strong>Tel:</strong> {bank.phone}</p>
                                <p className='text-sm'><strong>Email:</strong> {bank.email}</p>
                                <p className='text-sm'>
                                    <a href={`https://${bank.website}`} target='_blank' className='text-blue-500 hover:underline'>
                                        {bank.website}
                                    </a>
                                </p>
                                <button
                                    onClick={() => navigate(`/outinst-details/${bank.id}`)}
                                    className="absolute bottom-3 right-3 bg-[#005464] !text-white py-2 px-4 rounded-md hover:bg-[#005364e3] cursor-pointer"
                                >
                                    Batafsil
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Xalqaro tashkilotlar */}
                    <h2 className='text-xl !font-semibold mb-6'>Xalqaro tashkilotlar</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {banks.map((bank) => (
                            <div key={bank.id} className='border border-gray-300 relative shadow-md rounded-lg p-6 bg-white'>
                                <img src={bank.logo} alt={bank.name} className='h-32 mx-auto mb-4' />
                                <hr />
                                <h3 className='text-lg font-bold my-2'>{bank.name}</h3>
                                <p className='text-sm text-gray-600'>{bank.address}</p>
                                <p className='text-sm mt-1'><strong>Tel:</strong> {bank.phone}</p>
                                <p className='text-sm'><strong>Email:</strong> {bank.email}</p>
                                <p className='text-sm'>
                                    <a href={`https://${bank.website}`} target='_blank' className='text-blue-500 hover:underline'>
                                        {bank.website}
                                    </a>
                                </p>
                                <button
                                    onClick={() => navigate(`/outinst-details/${bank.id}`)}
                                    className="absolute bottom-3 right-3 bg-[#005464] !text-white py-2 px-4 rounded-md hover:bg-[#005364e3] cursor-pointer"
                                >
                                    Batafsil
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}