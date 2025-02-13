import React from 'react';
import Sidebar from '../components/Layout/Sidebar';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const item = [
    {
        id: 1,
        img: 'https://nsp.gov.uz/static/uploads/accelators_file2d07f436-aaad-4e7e-ba2a-a319f2797547.png',
        bir: 'Yashnabod Texnopark'
    },
    {
        id: 2,
        img: "https://nsp.gov.uz/static/uploads/accelators_filed09a06f6-5706-4eea-b272-b3751b368bb9.png",
        bir: 'Texnopark MCHJ'
    },
    {
        id: 3,
        img: 'https://nsp.gov.uz/static/uploads/accelators_filefbb4f85d-524f-4420-834e-3e7673e6c494.png',
        bir: 'Buxoro Texnopark'
    },
    {
        id: 4,
        img: "https://nsp.gov.uz/static/uploads/accelators_fileb5540ca4-2951-4c2a-8903-8dc6648ea7d7.jpg",
        bir: "INNO Texnopark"
    },
    {
        id: 5,
        img: "https://nsp.gov.uz/static/uploads/applicationd2482749-9279-4f15-9163-b4f6d531225c.jpg",
        bir: "Andijon Yoshlar texnoparki"
    },
    {
        id: 6,
        img: "https://nsp.gov.uz/static/uploads/application2cd02997-d0fd-48de-90bb-e069b33b4aea.jpg",
        bir: "Samarqand Yoshlar texnoparki"
    },
    {
        id: 7,
        img: "https://nsp.gov.uz/static/uploads/application3238a975-7dc9-4284-9a4d-65028e2d92de.png",
        bir: "Xorazm Innovatsion texnoparki"
    },
    {
        id: 8,
        img: "https://nsp.gov.uz/static/uploads/accelators_file1232f8c5-94db-4497-b2fa-009b8b8c1323.png",
        bir: "Qashqadaryo IT Texnopark"
    },
    {
        id: 9,
        img: "https://nsp.gov.uz/static/uploads/accelators_file91441472-f055-493c-82a1-80f54a0b92e4.jpg",
        bir: "Qoraqalpog'iston Yoshlar texnopark"
    },
    {
        id: 10,
        img: "https://nsp.gov.uz/static/uploads/application9019df59-b204-4ac6-a88b-67e779e4704b.jpg",
        bir: "Toshkent Yoshlar texnoparki"
    },
    {
        id: 11,
        img: "https://nsp.gov.uz/static/uploads/accelators_file577d8c34-4fc4-41b7-bf6f-26012fd867b1.jpg", bir: "Novoiy yoshlar texnoparki"
    },
];


export default function Technos() {
    const navigate = useNavigate()

    const HandleData = (id) => {
        console.log('ishladi');
        navigate(`/technos-details/${id}`)
    }

    return (
        <div className=" fullContainer bg-gradient-to-b from-blue-50 to-white min-h-screen">
            <Sidebar>
                <div className='py-10 px-4 md:px-10'>
                    <p className='text-3xl font-black text-center md:text-left'>Texnoparklar</p>

                    <div className='border p-4 md:p-6 rounded-lg shadow-lg bg-white border-gray-300 mt-6 flex flex-col xl:flex-row !max-[1200px]:flex-col justify-between items-end'>
                        <div>
                            <p className='font-black text-xl md:text-2xl mb-2'>Texnoparklar haqida</p>
                            <p className='text-gray-600'>Texnopark, bu — hududiy, ilmiy, texnologik va innovatsion loyihalarni amaliyotga tadbiq etuvchi texnologik baza hisoblanadi.</p>
                            <p className='text-gray-600 mt-2'>Texnopark — ilmiy-tadqiqot institutlari, sanoat obyektlari, biznes markazlari va taʼlim muassasalarini o‘z ichiga oladi.</p>
                            <p className='text-gray-600 mt-2'>Texnoparklar innovatsion gʻoyalar shakllanadigan va yangi texnologiyalarni joriy etish uchun muhim platforma hisoblanadi.</p>
                        </div>
                        <Button type='link' className='mt-3 md:mt-0 md:self-end'>To'liq ma'lumot</Button>
                    </div>

                    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {
                            item.map((item) => (
                                <div onClick={() => HandleData(item.id)} key={item.id} className='border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer'>
                                    <img className='w-full h-48 object-cover' src={item.img} alt={item.bir} />
                                    <div className='p-3 bg-white text-center'>
                                        <p className='font-semibold text-gray-700'>{item.bir}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}