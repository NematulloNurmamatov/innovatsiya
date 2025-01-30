import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/f.png'
const Footer = () => {
    return (
        <div className='bg-[#005464]'>
            <div className='container'>
                <div className='py-10 flex items-center justify-between text-white gap-5 max-[1200px]:flex-wrap'>
                    <Link to="/" className="w-80 flex title-font font-medium items-center mb-4 md:mb-0">
                        <img
                            className="w-16"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/2012px-Emblem_of_Uzbekistan.svg.png"
                            alt="Uzbekistan Emblem"
                        />
                        <span className="ml-3 text-xl">O'zbekiston Respublikasi <span className='font-black'>MILLIY ILMIY PORTALI</span></span>
                    </Link>
                    <Link className='hover:text-amber-400 transition text-white'>
                        Главная
                    </Link>
                    <Link className='hover:text-amber-400 transition text-white'>
                        О портале
                    </Link>
                    <Link className='hover:text-amber-400 transition text-white'>
                        Карта портала
                    </Link>
                    <Link className='hover:text-amber-400 transition text-white'>
                        Вопросы
                    </Link>
                    <Link className='hover:text-amber-400 transition text-white'>
                        Связь
                    </Link>
                    <Link className='hover:text-amber-400 transition text-white'>
                        Условия использования информации
                    </Link>
                </div>
                <hr className="border-t-2 border-white" />
                <div className='flex gap-5 justify-between mb-2 max-[950px]:flex-wrap'>
                    <div>
                        <div className='mt-10 flex flex-col text-white gap-2'>
                            <h3 className='!font-bold '>Ilm-fan va innovatsiyalar sohasidagi <br />
                                davlat boshqaruvi</h3>
                            <Link className='text-[14px]'>Normativ-huquqiy hujjatlar</Link>
                            <Link className='text-[14px]'>Davlat dasturlari</Link>
                            <Link className='text-[14px]'>Davlat boshqaruv organlari</Link>
                            <Link className='text-[14px]'>Oliy ta'lim muassasalari</Link>
                            <Link className='text-[14px]'>Ilmiy-tadqiqot muassasalari</Link>
                            <Link className='text-[14px]'>Hududiy salohiyat</Link>
                        </div>
                        <div className='text-white mt-4 flex flex-col gap-2'>
                            <h3 className='!font-bold'>Ilmiy va innovatsion infratuzilma</h3>
                            <Link className='text-[14px]'>Texnoparklar</Link>
                            <Link className='text-[14px]'>Startup akseleratorlar</Link>
                        </div>
                        <div className='text-white mt-4 flex flex-col gap-2'>
                            <h3 className='!font-bold'>Milliy ilmiy texnik axborot resurslari</h3>
                            <Link className='text-[14px]'>Texnoparklar</Link>
                            <Link className='text-[14px]'>Startup akseleratorlar</Link>
                        </div>
                        <div className='text-white mt-4 flex flex-col gap-2'>
                            <Link className='!font-bold'>Xalqaro hamkorlik</Link>
                            <Link className='text-[14px]'>Xalqaro tashkilotlar va moliya institutlari</Link>
                        </div>
                    </div>
                    <div>
                        <div className='mt-10 flex flex-col text-white gap-2'>
                            <h3 className='!font-bold '>Doktorantura</h3>
                            <Link className='text-[14px]'>Doktorantura haqida</Link>
                            <Link className='text-[14px]'>Normativ-huquqiy asos</Link>
                            <Link className='text-[14px]'>Qabul kvotalari</Link>
                            <Link className='text-[14px]'>Yo'nalishlar bo yicha ilmiy </Link>
                            <Link className='text-[14px]'>Kengashlar</Link>
                            <Link className='text-[14px]'>Ixtisoslik shifrlari</Link>
                            <Link className='text-[14px]'>Ro yxatga olish jarayoni</Link>
                        </div>
                        <div className='text-white mt-4 flex flex-col gap-2'>
                            <h3 className='!font-bold'>Xalqaro grantlar dasturi</h3>
                            <Link className='text-[14px]'>Startup akseleratorlar</Link>
                            <Link className='text-[14px]'>Erasmus+</Link>
                            <Link className='text-[14px]'>Horizon Europe</Link>
                        </div>
                    </div>
                    <div>
                        <div className='mt-10 flex flex-col text-white gap-2'>
                            <h3 className='!font-bold '>Ilmiy stajirovka</h3>
                            <Link className='text-[14px]'>Ilmiy stajirovka haqida</Link>
                            <Link className='text-[14px]'>Normativ-huquqiy asos</Link>
                            <Link className='text-[14px]'>Ilmiy stajirovka bo'yicha </Link>
                            <Link className='text-[14px]'>Qo'llanma </Link>
                            <Link className='text-[14px]'>Hujjatlar na'munalari</Link>
                            <Link className='text-[14px]'>Hujjatlar ro'yxati</Link>
                            <Link className='text-[14px]'>Ilmiy-stajirovkada amaliyot </Link>
                            <Link className='text-[14px]'>o'tab kelganlar</Link>
                        </div>
                    </div>
                    <div>
                        <div className='mt-10 flex flex-col text-white gap-2'>
                            <h3 className='!font-bold '>Ilmiy stajirovka</h3>
                            <Link className='text-[14px]'>Yangiliklar</Link>
                            <Link className='text-[14px]'>E'lonlar</Link>
                            <Link className='text-[14px]'>Loyihalar turlari</Link>
                            <Link className='text-[14px]'>Konferensiyalar</Link>
                            <Link className='text-[14px]'>Innovatsion rivojlanish </Link>
                            <Link className='text-[14px]'>vazirligi Hay'ati yig'ilishlari</Link>
                            <Link className='text-[14px]'>Innovatsion rivojlanish </Link>
                            <Link className='text-[14px]'>vazirligi Ilmiy-texnik kengash </Link>
                            <Link className='text-[14px]'>yig'ilishlari</Link>
                            <Link className='text-[14px]'>Innovatsion g'oyalar </Link>
                            <Link className='text-[14px]'>ma'lumotlar bazasi</Link>
                            <Link className='text-[14px]'>Davlat tomonidan qo'llab <br /> quvvatlash chora-tadbirlari</Link>
                            <Link className='text-[14px]'>Tadbirlar</Link>
                            <Link className='text-[14px]'>Muvaffaqiyat tarixi</Link>
                            <Link className='text-[14px]'>Dayjest va tahliliy </Link>
                            <Link className='text-[14px]'>Ma'lumotnoma</Link>
                            <Link className='text-[14px]'>Fotogalereya</Link>
                            <Link className='text-[14px]'>Videogalereya</Link>
                            <Link className='text-[14px]'>Portal haqida</Link>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between py-6 text-white text-lg'>
                    <div>
                        <Link>2022 (C) Все права защищены</Link>
                    </div>
                    <div className='flex text-xl gap-3 text-[#005464]'>
                        <LinkedinOutlined className='rounded-full bg-gray-200 px-1' />
                        <InstagramOutlined className='rounded-full bg-gray-200 px-1' />
                        <FacebookOutlined className='rounded-full bg-gray-200 px-1' />
                    </div>
                </div>
                <hr className="border-t-2 border-white !mb-6" />
                <div className='flex justify-between items-center pb-6'>
                    <div className='text-white flex gap-5 justify-between w-[80%] max-[800px]:flex-wrap'>
                        <Link>Toshkent shahar, Olmazor tumani Universitet ko'chasi, 7-uy 100174 </Link>
                        <Link>Email: info@mininnovation.uz</Link>
                        <Link>Ishonch telefon: (371) 203 32-31</Link>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer