import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import { PhoneFilled } from '@ant-design/icons';

const university = {
    title: "A.I.Gertsen nomidagi Rossiya davlat pedagogika universiteti' Federal davlat byudjeti oliy ta'lim muassasasining Toshkent filiali",
    name: "O'zbekiston Respublikasi Oliy-ta'lim fan va innovatsiyalar vazirligi",
    location: "Toshkent shahar",
    type: "Universitet",
    img: "https://ias.gov.uz//static/uploads/6a251c91-9d77-4f04-9371-20433bb2060e.jpg",
    address: "Yakkasaroy tumani, Bobur ko‘chasi, 55-uy",
    website: "https://www.herzen.uz/",
    established: "2020-yil",
    description: "Tashkil topgan sana2017 yil 30 noyabr Tashkilotning maqsadiOʻzbekiston Respublikasini innovatsion va ilmiy- texnik rivojlantirish sohasida jamiyat va davlat hayotini har tomonlama rivojlantirishga, mamlakatning intellektual va    texnologik salohiyatini oshirishga qaratilgan yagona davlat siyosatini amalga oshiradi; Innovatsion faoliyatni uning samaradorligi indikatorlari asosida baholaydi, ilgʻor texnologiyalarni birinchi darajada joriy etish talab qilinadigan tegishli tarmoq va sohalarni rivojlantirishning asosiy yoʻnalishlarini belgilaydi; innovatsion gʻoyalar, ishlanmalar va texnologiyalarni joriy etish masalalari boʻyicha davlat boshqaruvi organlari, ilmiy - tadqiqot va axborot - tahlil muassasalari hamda boshqa tashkilotlarning faoliyatini muvofiqlashtiradi;",
    rahbar: "https://ias.gov.uz//static/uploads/24e8decf-df2a-4251-91e2-eae54555b2a5.jpg",
    contingent: {
        faculties: 0,
        students: 0,
        bachelors: 0,
        masters: 0,
        professors: 0,
        employees: 0
    },
    otm: [
        {
            name: "Qo‘qon Universiteti",
            location: "Farg‘ona viloyati",
            address: "Qo‘qon shahri, Turkiston ko‘chasi, 28-A uy",
            phone: "+998 73 545-55-55",
            email: "info@kokanduni.uz",
            website: "www.kokanduni.uz",
            img: "https://ias.gov.uz//static/uploads/49c94c3a-7cce-40ef-967b-da633dd04031.jpg"
        },
        {
            name: "Jizzax Universiteti",
            location: "Jizzax viloyati",
            address: "Jizzax shahri, Turkiston ko‘chasi, 28-A uy",
            phone: "+998 90 067-77-96",
            email: "info@kokanduni.uz",
            website: "www.kokanduni.uz",
            img: "https://example.com/kokanduni.jpg"
        },
    ],
    itm: [
        {
            name: "Xalqaro molekulyar allergologiya markazi",
            location: "Toshkent shahar",
            address: "Toshkent sh., Shifokorlar, 3",
            phone: "+998 988880846",
            email: "b.ruziyev@mininnovation.uz",
            website: "https://www.minicma.uz",
            img: "https://example.com/minicma.jpg"
        }
    ]
};

const OrganizationsDetails = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('umumiy');

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
                    <div className='pt-4 md:col-span-9'>
                        <h1 className='!font-bold text-2xl md:text-3xl mb-4'>
                            {university.name}
                        </h1>

                        {/* Navigatsiya tugmalari */}
                        <div className="flex flex-wrap gap-2 md:gap-4 border-b border-gray-500 pb-2">
                            {['umumiy', 'tashkilot', 'rahbar', 'otm', 'itm'].map(tab => (
                                <button key={tab}
                                    className={`px-4 py-2 text-sm md:text-base ${activeTab === tab ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                                    onClick={() => setActiveTab(tab)}>
                                    {tab === 'umumiy' ? "Umumiy ma'lumot" :
                                        tab === 'tashkilot' ? "Tashkilot haqida" :
                                            tab === 'rahbar' ? "Rahbariyat" :
                                                tab === 'otm' ? "Huzuridagi OTM" : "Huzuridagi ITM"}
                                </button>
                            ))}
                        </div>

                        {/* Umumiy ma'lumot */}
                        {activeTab === 'umumiy' && (
                            <div className="mt-4 ">
                                <p className='font-bold text-lg md:text-xl'>{university.title}</p>
                                <div className='flex flex-col md:flex-row gap-5 items-center'>
                                    <img className='w-full md:w-[300px]' src={university.img} alt="" />
                                    <div>
                                        <h2 className="text-lg md:text-xl font-semibold">Umumiy ma'lumot</h2>
                                        <p>Hudud: {university.location}</p>
                                        <p>Tashkilot turi: {university.type}</p>
                                        <p>Manzil: <a href={`https://www.google.com/maps/search/${encodeURIComponent(university.address)}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{university.address}</a></p>
                                        <p>Veb-sayt: <a href={university.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{university.website}</a></p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tashkilot haqida */}
                        {activeTab === 'tashkilot' && (
                            <div className="mt-4">
                                <h2 className="text-lg md:text-xl font-semibold">Tashkilot haqida</h2>
                                <p>Tashkil topgan sana: {university.established}</p>
                                <p>{university.description}</p>
                            </div>
                        )}

                        {activeTab === 'rahbar' && (
                            <div className="mt-4">
                                <div className='border bg-white border-gray-400 rounded p-2 flex flex-col md:flex-row gap-5'>
                                    <img className='w-full md:w-[250px] rounded' src={university.rahbar} alt="" />
                                    <div className='pt-4'>
                                        <p className='font-bold text-lg'>Popov Vasilii Aleksandrovich</p>
                                        <p>Direktor</p>
                                        <PhoneFilled />
                                    </div>
                                </div>
                            </div>
                        )}

                        {['otm', 'itm'].includes(activeTab) && (
                            <div className="mt-4">
                                {(activeTab === 'otm' ? university.otm : university.itm).map((item, index) => (
                                    <div key={index} className='bg-white border border-gray-400 rounded p-2 flex flex-col md:flex-row gap-5 mb-4'>
                                        <img className='w-full md:w-[250px] rounded' src={item.img} alt={item.name} />
                                        <div className='pt-4'>
                                            <p className='font-bold text-lg'>{item.name}</p>
                                            <p>Hudud: {item.location}</p>
                                            <p>Manzil: {item.address}</p>
                                            <p>Telefon: {item.phone}</p>
                                            <p>Email: <a href={`mailto:${item.email}`} className="text-blue-500 hover:underline">{item.email}</a></p>
                                            <p>Veb-sayt: <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{item.website}</a></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default OrganizationsDetails;
