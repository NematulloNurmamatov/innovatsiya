import React, { useEffect, useState } from 'react';
import { VerticalAlignBottomOutlined, ShareAltOutlined } from '@ant-design/icons';
import Sidebar from '../components/Layout/Sidebar';

const Applications = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        // API dan ma'lumotlarni olish (bu yerda static data ishlatilgan)
        setPrograms([
            { year: 2023, title: "Insonga e'tibor va sifatli ta'lim yili" },
            { year: 2022, title: "\"Inson qadrini ulug'lash va faol mahalla yili\"" },
            { year: 2021, title: "\"Yoshlarni qo‘llab-quvvatlash va aholi salomatligini mustahkamlash yili\" davlat dasturi" },
            { year: 2023, title: "Insonga e'tibor va sifatli ta'lim yili" },
            { year: 2022, title: "\"Inson qadrini ulug'lash va faol mahalla yili\"" },
            { year: 2021, title: "\"Yoshlarni qo‘llab-quvvatlash va aholi salomatligini mustahkamlash yili\" davlat dasturi" },
            { year: 2023, title: "Insonga e'tibor va sifatli ta'lim yili" },
            { year: 2022, title: "\"Inson qadrini ulug'lash va faol mahalla yili\"" },
            { year: 2021, title: "\"Yoshlarni qo‘llab-quvvatlash va aholi salomatligini mustahkamlash yili\" davlat dasturi" },
        ]);
    }, []);

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='pt-4'>
                    <h1 className='!font-black text-2xl'>Davlat dasturlari</h1>
                    <div className='mt-4 space-y-3'>
                        {programs.map((program, index) => (
                            <div key={index} className='border border-gray-300 bg-white p-3 rounded-lg flex items-center justify-between'>
                                <div className='flex items-center space-x-4'>
                                    <div className='bg-[#002E5D] text-white pt-2 px-8 rounded-lg text-center'>
                                        <p className='text-lg font-bold !mb-1'>{program.year} <br /> <span className='font-light'>yil</span></p>
                                    </div>
                                    <p className='text-lg font-semibold'>{program.title}</p>
                                </div>
                                <div className='flex items-center'>
                                    <VerticalAlignBottomOutlined className="text-lg border-2 border-[#005464] !text-[#005464] p-1 rounded-md hover:bg-[#005464] hover:!text-white transition duration-200 cursor-pointer" />
                                    <ShareAltOutlined className="text-lg border-2 border-[#005464] !text-[#005464] p-1 rounded-md hover:bg-[#005464] hover:!text-white transition duration-200 cursor-pointer ml-3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default Applications;
