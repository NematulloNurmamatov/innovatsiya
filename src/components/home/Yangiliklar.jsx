import { ClockCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Yangiliklar = () => {
    return (
        <div className='container'>
            <div className='flex items-center justify-between mt-8'>
                <h2 className='!font-black text-3xl'>Yangiliklar</h2>
                <Link to="/all-news" className='text-[#0099B5]'>Все новости</Link>
            </div>
            <section className="text-gray-600 body-font">
                <div className="px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Repeat this div for each article */}
                        <div className="p-4">
                            <div className="h-full overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl"
                                    src="https://storage.kun.uz/source/thumbnails/_medium/11/QhEkptcFB_RDrvWGh0pw7C0SQ5oyoKBr_medium.jpg"
                                    alt="blog"
                                />
                                <div className="py-6">
                                    <p className="leading-6 mb-3 font-bold text-black">
                                        Aholining yurak qon-tomir kasalliklari
                                        genetik xaritasi yaratiladi
                                    </p>
                                    <p className="leading-6 text-[14px] line-clamp-3">
                                        Innovatsion rivojlanish vazirligi Hayatining navbatdagi yig`ilishida
                                        qator ilmiy loyihalar moliyalashtirishga tavsiya etildi. Xususan, “Tibbiyot
                                        fanlar” yo`nalishi bo`yicha to`rtta...
                                    </p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        {/* Link to news details page */}
                                        <Link to="/news-details/1">
                                            <Button className="w-[100%] !bg-[#0099B5]" type="primary">
                                                Подробнее
                                            </Button>
                                        </Link>
                                        <div className="text-gray-400">
                                            <p className="text-[15px]">
                                                <ClockCircleOutlined /> 12.02.2022
                                            </p>
                                            <p className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 border-r-2 border-gray-200">
                                                {/* Views icon */}
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                                1.2K
                                            </p>
                                            <span className="inline-flex items-center leading-none text-sm">
                                                {/* Like icon */}
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="h-full overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl"
                                    src="https://storage.kun.uz/source/thumbnails/_medium/11/QhEkptcFB_RDrvWGh0pw7C0SQ5oyoKBr_medium.jpg"
                                    alt="blog"
                                />
                                <div className="py-6">
                                    <p className="leading-6 mb-3 font-bold text-black">
                                        Aholining yurak qon-tomir kasalliklari
                                        genetik xaritasi yaratiladi
                                    </p>
                                    <p className="leading-6 text-[14px] line-clamp-3">
                                        Innovatsion rivojlanish vazirligi Hayatining navbatdagi yig`ilishida
                                        qator ilmiy loyihalar moliyalashtirishga tavsiya etildi. Xususan, “Tibbiyot
                                        fanlar” yo`nalishi bo`yicha to`rtta...
                                    </p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        {/* Link to news details page */}
                                        <Link to="/news-details/2">
                                            <Button className="w-[100%] !bg-[#0099B5]" type="primary">
                                                Подробнее
                                            </Button>
                                        </Link>
                                        <div className="text-gray-400">
                                            <p className="text-[15px]">
                                                <ClockCircleOutlined /> 12.02.2022
                                            </p>
                                            <p className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 border-r-2 border-gray-200">
                                                {/* Views icon */}
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                                1.2K
                                            </p>
                                            <span className="inline-flex items-center leading-none text-sm">
                                                {/* Like icon */}
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="h-full overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl"
                                    src="https://storage.kun.uz/source/thumbnails/_medium/11/QhEkptcFB_RDrvWGh0pw7C0SQ5oyoKBr_medium.jpg"
                                    alt="blog"
                                />
                                <div className="py-6">
                                    <p className="leading-6 mb-3 font-bold text-black">
                                        Aholining yurak qon-tomir kasalliklari
                                        genetik xaritasi yaratiladi
                                    </p>
                                    <p className="leading-6 text-[14px] line-clamp-3">
                                        Innovatsion rivojlanish vazirligi Hayatining navbatdagi yig`ilishida
                                        qator ilmiy loyihalar moliyalashtirishga tavsiya etildi. Xususan, “Tibbiyot
                                        fanlar” yo`nalishi bo`yicha to`rtta...
                                    </p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        {/* Link to news details page */}
                                        <Link to="/news-details/3">
                                            <Button className="w-[100%] !bg-[#0099B5]" type="primary">
                                                Подробнее
                                            </Button>
                                        </Link>
                                        <div className="text-gray-400">
                                            <p className="text-[15px]">
                                                <ClockCircleOutlined /> 12.02.2022
                                            </p>
                                            <p className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 border-r-2 border-gray-200">
                                                {/* Views icon */}
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                                1.2K
                                            </p>
                                            <span className="inline-flex items-center leading-none text-sm">
                                                {/* Like icon */}
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="h-full overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl"
                                    src="https://storage.kun.uz/source/thumbnails/_medium/11/QhEkptcFB_RDrvWGh0pw7C0SQ5oyoKBr_medium.jpg"
                                    alt="blog"
                                />
                                <div className="py-6">
                                    <p className="leading-6 mb-3 font-bold text-black">
                                        Aholining yurak qon-tomir kasalliklari
                                        genetik xaritasi yaratiladi
                                    </p>
                                    <p className="leading-6 text-[14px] line-clamp-3">
                                        Innovatsion rivojlanish vazirligi Hayatining navbatdagi yig`ilishida
                                        qator ilmiy loyihalar moliyalashtirishga tavsiya etildi. Xususan, “Tibbiyot
                                        fanlar” yo`nalishi bo`yicha to`rtta...
                                    </p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        {/* Link to news details page */}
                                        <Link to="/news-details/4">
                                            <Button className="w-[100%] !bg-[#0099B5]" type="primary">
                                                Подробнее
                                            </Button>
                                        </Link>
                                        <div className="text-gray-400">
                                            <p className="text-[15px]">
                                                <ClockCircleOutlined /> 12.02.2022
                                            </p>
                                            <p className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 border-r-2 border-gray-200">
                                                {/* Views icon */}
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                                1.2K
                                            </p>
                                            <span className="inline-flex items-center leading-none text-sm">
                                                {/* Like icon */}
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="h-full overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl"
                                    src="https://storage.kun.uz/source/thumbnails/_medium/11/QhEkptcFB_RDrvWGh0pw7C0SQ5oyoKBr_medium.jpg"
                                    alt="blog"
                                />
                                <div className="py-6">
                                    <p className="leading-6 mb-3 font-bold text-black">
                                        Aholining yurak qon-tomir kasalliklari
                                        genetik xaritasi yaratiladi
                                    </p>
                                    <p className="leading-6 text-[14px] line-clamp-3">
                                        Innovatsion rivojlanish vazirligi Hayatining navbatdagi yig`ilishida
                                        qator ilmiy loyihalar moliyalashtirishga tavsiya etildi. Xususan, “Tibbiyot
                                        fanlar” yo`nalishi bo`yicha to`rtta...
                                    </p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        {/* Link to news details page */}
                                        <Link to="/news-details/5">
                                            <Button className="w-[100%] !bg-[#0099B5]" type="primary">
                                                Подробнее
                                            </Button>
                                        </Link>
                                        <div className="text-gray-400">
                                            <p className="text-[15px]">
                                                <ClockCircleOutlined /> 12.02.2022
                                            </p>
                                            <p className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 border-r-2 border-gray-200">
                                                {/* Views icon */}
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                                1.2K
                                            </p>
                                            <span className="inline-flex items-center leading-none text-sm">
                                                {/* Like icon */}
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="h-full overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl"
                                    src="https://storage.kun.uz/source/thumbnails/_medium/11/QhEkptcFB_RDrvWGh0pw7C0SQ5oyoKBr_medium.jpg"
                                    alt="blog"
                                />
                                <div className="py-6">
                                    <p className="leading-6 mb-3 font-bold text-black">
                                        Aholining yurak qon-tomir kasalliklari
                                        genetik xaritasi yaratiladi
                                    </p>
                                    <p className="leading-6 text-[14px] line-clamp-3">
                                        Innovatsion rivojlanish vazirligi Hayatining navbatdagi yig`ilishida
                                        qator ilmiy loyihalar moliyalashtirishga tavsiya etildi. Xususan, “Tibbiyot
                                        fanlar” yo`nalishi bo`yicha to`rtta...
                                    </p>
                                    <div className="flex items-center flex-wrap justify-between">
                                        {/* Link to news details page */}
                                        <Link to="/news-details/6">
                                            <Button className="w-[100%] !bg-[#0099B5]" type="primary">
                                                Подробнее
                                            </Button>
                                        </Link>
                                        <div className="text-gray-400">
                                            <p className="text-[15px]">
                                                <ClockCircleOutlined /> 12.02.2022
                                            </p>
                                            <p className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 border-r-2 border-gray-200">
                                                {/* Views icon */}
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                                1.2K
                                            </p>
                                            <span className="inline-flex items-center leading-none text-sm">
                                                {/* Like icon */}
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Repeat for other articles */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Yangiliklar
