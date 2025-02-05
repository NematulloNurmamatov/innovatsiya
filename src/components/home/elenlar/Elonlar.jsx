import { ClockCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import { Link } from "react-router-dom";

const Elonlar = () => {
    return (
        <div className='container '>
            <div className='flex items-center justify-between mt-8'>
                <h2 className=' mb-3 !font-bold  text-3xl'>Elonlar</h2>
                <Link className='text-blue-600'>Все новости</Link>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 sm:px-4'>
                <div className='rounded-2xl bg-gray-100'>
                    <img className='w-full h-[250px] rounded-t-2xl object-cover' src="https://s0.rbk.ru/v6_top_pics/media/img/6/92/347301815801926.jpeg" alt="" />
                    <div className='p-5'>
                        <h3 className='!font-bold text-[20px] mb-2'>Vengriya Qishloq xo'jaligi va tabiiy fanlar universitetiga qisqa muddatli stajirovkalarga tanlov e'lon qilinadi</h3>
                        <p className='text-[15px] text-gray-800'>Innovatsion rivojlanish vazirligi 2021-yil 29-noyabr 2-dekabr kunlari Vengriya Respublikasiga amalga oshirilgan delegatsiya tashrifi davomida erishilgan kelishuv natijalariga muvofiq 25 nafar yosh olimlarni Vengriya Qishloq xo'jaligi va tabiiy fanlar universitetiga 1 oylik qisqa.</p>
                        <div className='flex flex-col sm:flex-row items-center sm:justify-between mt-4 gap-3'>
                            <Button className="w-full sm:w-[45%] !border-1 !bg-gray-100 border-[#0099B5] text-[#0099B5] !text-[18px] !h-9" color="primary" variant="outlined">
                                Подробнее
                            </Button>
                            <p className='text-[16px] text-gray-600 flex items-center gap-2'><ClockCircleOutlined /> 12.02.2022</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl bg-gray-100'>
                    <img className='w-full h-[250px] rounded-t-2xl object-cover' src="https://s0.rbk.ru/v6_top_pics/media/img/6/92/347301815801926.jpeg" alt="" />
                    <div className='p-5'>
                        <h3 className='!font-bold text-[20px] mb-2'>Vengriya Qishloq xo'jaligi va tabiiy fanlar universitetiga qisqa muddatli stajirovkalarga tanlov e'lon qilinadi</h3>
                        <p className='text-[15px] text-gray-800'>Innovatsion rivojlanish vazirligi 2021-yil 29-noyabr 2-dekabr kunlari Vengriya Respublikasiga amalga oshirilgan delegatsiya tashrifi davomida erishilgan kelishuv natijalariga muvofiq 25 nafar yosh olimlarni Vengriya Qishloq xo'jaligi va tabiiy fanlar universitetiga 1 oylik qisqa.</p>
                        <div className='flex flex-col sm:flex-row items-center sm:justify-between mt-4 gap-3'>
                            <Button className="w-full sm:w-[45%] !border-1 !bg-gray-100 border-[#0099B5] text-[#0099B5] !text-[18px] !h-9" color="primary" variant="outlined">
                                Подробнее
                            </Button>
                            <p className='text-[16px] text-gray-600 flex items-center gap-2'><ClockCircleOutlined /> 12.02.2022</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="!mt-[50px] flex flex-col-reverse lg:flex-row justify-between items-center gap-10 bg-gray-100 rounded-2xl">
                {/* Matn qismi */}
                <div className="w-full lg:w-1/2 text-center mbuttond:text-left p-6">
                    <h3 className="text-2xl !font-black">
                        Vengriya Qishloq xo'jaligi va tabiiy fanlar universitetiga qisqa muddatli stajirovkalarga tanlov e'lon qilinadi
                    </h3>
                    <p className="text-gray-600 mt-4">
                        Innovatsion rivojlanish vazirligi 2021-yil 29-noyabr 2-dekabr kunlari Vengriya Respublikasiga amalga oshirilgan delegatsiya tashrifi davomida erishilgan kelishuv natijalariga muvofiq 25 nafar yosh olimlarni Vengriya Qishloq xo'jaligi va tabiiy fanlar universitetiga
                    </p>
                    <div className="flex flex-col items-center !justify-between md:flex-row md:justify-start mt-6 gap-4">
                        <Button className="w-full md:w-[40%] !border-1 !bg-gray-100 border-[#0099B5] text-[#0099B5] !text-[18px] !h-9" color="primary" variant="outlined">
                            Подробнее
                        </Button>
                        <p className="text-[16px] text-gray-600 flex items-center gap-2">
                            <ClockCircleOutlined /> 12.02.2022
                        </p>
                    </div>
                </div>

                {/* Rasm qismi */}
                <div className="w-full lg:w-1/2">
                    <img className="rounded-t-2xl lg:rounded-r-2xl lg:rounded-l-none w-full object-cover" src="https://zira.uz/wp-content/uploads/2017/03/glavnaya-ziry.png" alt="Vengriya universiteti" />
                </div>
            </div>

            <br /><br /><br />
        </div>
    )
}

export default Elonlar