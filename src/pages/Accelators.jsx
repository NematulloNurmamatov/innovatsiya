import React from 'react';
import Sidebar from '../components/Layout/Sidebar';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const item = [
    {
        id: 1,
        img: 'https://cat-sa.uz/wp-content/themes/clean_by_saxap/images/logo.png',
        bir: 'C.A.T. Science Accelerator'
    },
    {
        id: 2,
        img: "https://nsp.gov.uz/static/uploads/blutten2b7467b0-1b5f-456f-a758-d7baa3824de7.png",
        bir: 'Technovation Girls Uzbekistan'
    },
    {
        id: 3,
        img: 'https://nsp.gov.uz/static/uploads/bluttenc99f0eab-bd38-4540-ae47-f938d9f79af9.png',
        bir: 'Suv eritmasi innovatsion labaratoriya'
    },
    {
        id: 4,
        img: "https://nsp.gov.uz/static/uploads/blutten92328202-9be5-489b-b7b5-4009e905dcb5.png",
        bir: "Yashil biznes innovatsiyasi"
    },
];


export default function Technos() {
    const navigate = useNavigate()

    const HandleData = (id) => {
        console.log('ishladi');
        navigate(`/accelators-details/${id}`)
    }

    return (
        <div className="fullContainer bg-gradient-to-b from-blue-50 to-white min-h-screen">
            <Sidebar>
                <div className='py-10 px-4 md:px-10'>
                    <p className='text-3xl font-black text-center md:text-left'>Startup akseleratorlar</p>
                    <div className='border p-4 md:p-6 rounded-lg shadow-lg bg-white border-gray-300 mt-6 flex flex-col xl:flex-row !max-[1200px]:flex-col justify-between items-end'>
                        <div>
                            <p className='font-black text-xl md:text-2xl mb-2'>Startup akselerator haqida</p>
                            <p className='text-gray-600'>Startup akselerator — bu biznesi boshqa kompaniyalarga (akselerator rezidentlariga) yordam berishdan iborat bo'lgan kompaniya.</p>
                            <p className='text-gray-600 mt-2'>Startup akseleratorlar rezidentlarga jamoaga biznes-modelni "charxlash"da, zarur kontaktlarga ega bo'lishda va savdoni oshirishda yordam beradigan dasturni taklif qiladi. Dastur uch oydan yarim yilgacha davom etadi. Odatda, akseleratorning kovorkingi bo'lib, rezident kompaniyalar akseleratsiya chog'ida o'sha yerda bo'ladi.</p>
                            <p className='text-gray-600 mt-2'>Startup akseleratorlar kompaniyada ulushga ega bo'lib, keyinroq ushbu ulushni sotishdan daromad oladi.</p>
                        </div>
                        <Button type='link' className='mt-3 md:mt-0 md:self-end'>To'liq ma'lumot</Button>
                    </div>

                    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            item.map((item) => (
                                <div onClick={() => HandleData(item.id)} key={item.id} className='border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer'>
                                    <img className='w-[90%] mx-auto py-2 h-[75%]' src={item.img} alt={item.bir} />
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