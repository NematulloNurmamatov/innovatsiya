import { ClockCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Yangiliklar = () => {
    return (
        <div className='container'>
            <div className='flex items-center justify-between mt-8'>
                <h2 className='!font-black text-3xl'>Yangiliklar</h2>
                <Link className='text-[#0099B5]'>Все новости</Link>
            </div>
            <section class="text-gray-600 body-font">
                <div class=" px-5  ">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="p-4">
                            <div class="h-full  overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl " src="https://storage.kun.uz/source/thumbnails/_medium/11/QhEkptcFB_RDrvWGh0pw7C0SQ5oyoKBr_medium.jpg" alt="blog" />
                                <div class="py-6">
                                    <p class="leading-6 mb-3 font-bold text-black">
                                        Aholining yurak qon-tomir kasalliklari
                                        genetik xaritasi yaratiladi
                                    </p>
                                    <p className="leading-6 text-[14px] line-clamp-3">
                                        Innovatsion rivojlanish vazirligi Hayatining navbatdagi yig`ilishida qator
                                        ilmiy loyihalar moliyalashtirishga tavsiya etildi. Xususan, “Tibbiyot fanlar”
                                        yo`nalishi bo`yicha to`rtta, “Farmatsevtika va farmakologiya fanlari”
                                        yo`nalishi bo`yicha ikkita, “Qishloq xo`jaligi va atrof-muhitni muhofaza
                                        qilish fanlari” yo`nalishi bo`yicha oltita.
                                    </p>

                                    <div class="flex items-center flex-wrap justify-between ">
                                        <Button className='w-[50%] !bg-[#0099B5]' type="primary">
                                            Подробнее
                                        </Button>
                                        <div className='text-gray-400'>
                                            <p className='text-[15px]' > <ClockCircleOutlined /> 12.02.2022</p>
                                            <p class=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3  border-r-2 border-gray-200">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </p>
                                            <span class=" inline-flex items-center leading-none text-sm">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="h-full  overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl " src="https://storage.kun.uz/source/thumbnails/_medium/11/QhEkptcFB_RDrvWGh0pw7C0SQ5oyoKBr_medium.jpg" alt="blog" />
                                <div class="py-6">
                                    <p class="leading-6 mb-3 font-bold text-black">
                                        Aholining yurak qon-tomir kasalliklari
                                        genetik xaritasi yaratiladi
                                    </p>
                                    <p className="leading-6 text-[14px] line-clamp-3">
                                        Innovatsion rivojlanish vazirligi Hayatining navbatdagi yig`ilishida qator
                                        ilmiy loyihalar moliyalashtirishga tavsiya etildi. Xususan, “Tibbiyot fanlar”
                                        yo`nalishi bo`yicha to`rtta, “Farmatsevtika va farmakologiya fanlari”
                                        yo`nalishi bo`yicha ikkita, “Qishloq xo`jaligi va atrof-muhitni muhofaza
                                        qilish fanlari” yo`nalishi bo`yicha oltita.
                                    </p>

                                    <div class="flex items-center flex-wrap justify-between ">
                                        <Button className='w-[50%] !bg-[#0099B5]' type="primary">
                                            Подробнее
                                        </Button>
                                        <div className='text-gray-400'>
                                            <p className='text-[15px]' > <ClockCircleOutlined /> 12.02.2022</p>
                                            <p class=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3  border-r-2 border-gray-200">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </p>
                                            <span class=" inline-flex items-center leading-none text-sm">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="h-full  overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl " src="https://storage.kun.uz/source/thumbnails/_medium/11/QhEkptcFB_RDrvWGh0pw7C0SQ5oyoKBr_medium.jpg" alt="blog" />
                                <div class="py-6">
                                    <p class="leading-6 mb-3 font-bold text-black">
                                        Aholining yurak qon-tomir kasalliklari
                                        genetik xaritasi yaratiladi
                                    </p>
                                    <p className="leading-6 text-[14px] line-clamp-3">
                                        Innovatsion rivojlanish vazirligi Hayatining navbatdagi yig`ilishida qator
                                        ilmiy loyihalar moliyalashtirishga tavsiya etildi. Xususan, “Tibbiyot fanlar”
                                        yo`nalishi bo`yicha to`rtta, “Farmatsevtika va farmakologiya fanlari”
                                        yo`nalishi bo`yicha ikkita, “Qishloq xo`jaligi va atrof-muhitni muhofaza
                                        qilish fanlari” yo`nalishi bo`yicha oltita.
                                    </p>

                                    <div class="flex items-center flex-wrap justify-between ">
                                        <Button className='w-[50%] !bg-[#0099B5]' type="primary">
                                            Подробнее
                                        </Button>
                                        <div className='text-gray-400'>
                                            <p className='text-[15px]' > <ClockCircleOutlined /> 12.02.2022</p>
                                            <p class=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3  border-r-2 border-gray-200">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </p>
                                            <span class=" inline-flex items-center leading-none text-sm">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="h-full  overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl " src="https://storage.kun.uz/source/thumbnails/_medium/11/QhEkptcFB_RDrvWGh0pw7C0SQ5oyoKBr_medium.jpg" alt="blog" />
                                <div class="py-6">
                                    <p class="leading-6 mb-3 font-bold text-black">
                                        Aholining yurak qon-tomir kasalliklari
                                        genetik xaritasi yaratiladi
                                    </p>
                                    <p className="leading-6 text-[14px] line-clamp-3">
                                        Innovatsion rivojlanish vazirligi Hayatining navbatdagi yig`ilishida qator
                                        ilmiy loyihalar moliyalashtirishga tavsiya etildi. Xususan, “Tibbiyot fanlar”
                                        yo`nalishi bo`yicha to`rtta, “Farmatsevtika va farmakologiya fanlari”
                                        yo`nalishi bo`yicha ikkita, “Qishloq xo`jaligi va atrof-muhitni muhofaza
                                        qilish fanlari” yo`nalishi bo`yicha oltita.
                                    </p>

                                    <div class="flex items-center flex-wrap justify-between ">
                                        <Button className='w-[50%] !bg-[#0099B5]' type="primary">
                                            Подробнее
                                        </Button>
                                        <div className='text-gray-400'>
                                            <p className='text-[15px]' > <ClockCircleOutlined /> 12.02.2022</p>
                                            <p class=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3  border-r-2 border-gray-200">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </p>
                                            <span class=" inline-flex items-center leading-none text-sm">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="h-full  overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl " src="https://storage.kun.uz/source/thumbnails/_medium/11/QhEkptcFB_RDrvWGh0pw7C0SQ5oyoKBr_medium.jpg" alt="blog" />
                                <div class="py-6">
                                    <p class="leading-6 mb-3 font-bold text-black">
                                        Aholining yurak qon-tomir kasalliklari
                                        genetik xaritasi yaratiladi
                                    </p>
                                    <p className="leading-6 text-[14px] line-clamp-3">
                                        Innovatsion rivojlanish vazirligi Hayatining navbatdagi yig`ilishida qator
                                        ilmiy loyihalar moliyalashtirishga tavsiya etildi. Xususan, “Tibbiyot fanlar”
                                        yo`nalishi bo`yicha to`rtta, “Farmatsevtika va farmakologiya fanlari”
                                        yo`nalishi bo`yicha ikkita, “Qishloq xo`jaligi va atrof-muhitni muhofaza
                                        qilish fanlari” yo`nalishi bo`yicha oltita.
                                    </p>

                                    <div class="flex items-center flex-wrap justify-between ">
                                        <Button className='w-[50%] !bg-[#0099B5]' type="primary">
                                            Подробнее
                                        </Button>
                                        <div className='text-gray-400'>
                                            <p className='text-[15px]' > <ClockCircleOutlined /> 12.02.2022</p>
                                            <p class=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3  border-r-2 border-gray-200">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </p>
                                            <span class=" inline-flex items-center leading-none text-sm">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="h-full  overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl " src="https://storage.kun.uz/source/thumbnails/_medium/11/QhEkptcFB_RDrvWGh0pw7C0SQ5oyoKBr_medium.jpg" alt="blog" />
                                <div class="py-6">
                                    <p class="leading-6 mb-3 font-bold text-black">
                                        Aholining yurak qon-tomir kasalliklari
                                        genetik xaritasi yaratiladi
                                    </p>
                                    <p className="leading-6 text-[14px] line-clamp-3">
                                        Innovatsion rivojlanish vazirligi Hayatining navbatdagi yig`ilishida qator
                                        ilmiy loyihalar moliyalashtirishga tavsiya etildi. Xususan, “Tibbiyot fanlar”
                                        yo`nalishi bo`yicha to`rtta, “Farmatsevtika va farmakologiya fanlari”
                                        yo`nalishi bo`yicha ikkita, “Qishloq xo`jaligi va atrof-muhitni muhofaza
                                        qilish fanlari” yo`nalishi bo`yicha oltita.
                                    </p>

                                    <div class="flex items-center flex-wrap justify-between ">
                                        <Button className='w-[50%] !bg-[#0099B5]' type="primary">
                                            Подробнее
                                        </Button>
                                        <div className='text-gray-400'>
                                            <p className='text-[15px]' > <ClockCircleOutlined /> 12.02.2022</p>
                                            <p class=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3  border-r-2 border-gray-200">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </p>
                                            <span class=" inline-flex items-center leading-none text-sm">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Yangiliklar