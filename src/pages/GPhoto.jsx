import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import { EyeOutlined, CalendarOutlined } from '@ant-design/icons';
import Search from '../components/search/Search';

const GPhoto = () => {
    const navigate = useNavigate();

    const newsData = [
        {
            id: 1, 
            title: "Ilmiy loyihalar monitoringi o'tkazilmoqda", 
            date: "2024-12-17", 
            views: 84, 
            description: "Ilmiy faoliyatga oid davlat dasturlari doirasida amalga oshirilayotgan loyihalar monitoringi...", 
            image: "https://nsp.gov.uz/static/uploads/gallery_19e763c2-7486-4a08-8808-827fc15d88f2.jpg"
        },
        {
            id: 2, 
            title: "Dunyodagi eng qimmat startap ma'lum bo'ldi", 
            date: "2024-12-12", 
            views: 25, 
            description: "Ilon Maskning SpaceX aerokosmik kompaniyasi dunyodagi eng qimmat startapga aylandi...", 
            image: "https://nsp.gov.uz/static/uploads/gallery_3e4c4efa-5cac-4ac5-878c-274456c2f66c.jpg"
        },
        {
            id: 3, 
            title: "Yangi texnologiyalar ko'rgazmasi boshlandi", 
            date: "2024-11-05", 
            views: 45, 
            description: "Texnologiya olamidagi yangi yutuqlarni o'zida jamlagan ko'rgazma ochildi...", image: "https://nsp.gov.uz/static/uploads/gallery_82618f48-be75-4418-8fb8-581b9c881629.jpg"
        },
        {
            id: 4, 
            title: "Ilmiy loyihalar monitoringi o'tkazilmoqda", 
            date: "2024-12-17", 
            views: 84, 
            description: "Ilmiy faoliyatga oid davlat dasturlari doirasida amalga oshirilayotgan loyihalar monitoringi...", image: "https://nsp.gov.uz/static/uploads/gallery_19e763c2-7486-4a08-8808-827fc15d88f2.jpg"
        },
        {
            id: 5, 
            title: "Dunyodagi eng qimmat startap ma'lum bo'ldi", 
            date: "2024-12-12", 
            views: 25, 
            description: "Ilon Maskning SpaceX aerokosmik kompaniyasi dunyodagi eng qimmat startapga aylandi...", image: "https://nsp.gov.uz/static/uploads/gallery_3e4c4efa-5cac-4ac5-878c-274456c2f66c.jpg"
        },
        {
            id: 6, 
            title: "Yangi texnologiyalar ko'rgazmasi boshlandi", 
            date: "2024-11-05", 
            views: 45, 
            description: "Texnologiya olamidagi yangi yutuqlarni o'zida jamlagan ko'rgazma ochildi...", image: "https://nsp.gov.uz/static/uploads/gallery_82618f48-be75-4418-8fb8-581b9c881629.jpg"
        }
    ];

    const [filteredNews, setFilteredNews] = useState(newsData);

    return (
        <div className="fullContainer">
            <Sidebar>
                <div className="container">
                    {/* <h1 className="!font-black text-2xl mb-6">Yangiliklar</h1> */}

                    {/* Qidiruv tizimi */}
                    {/* <Search newsData={newsData} setFilteredNews={setFilteredNews} /> */}

                    {/* Yangiliklar kartalari */}
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-4'>
                        {filteredNews.length > 0 ? (
                            filteredNews.map((news) => (
                                <div
                                    key={news.id}
                                    className="border bg-white p-2 rounded-md border-gray-300 shadow-md gap-4 cursor-pointer hover:shadow-lg transition duration-200"
                                    onClick={() => navigate(`/error/${news.id}`)}
                                >
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full object-cover rounded-sm h-40 sm:h-52 mb-1"
                                    />
                                    <div className="flex flex-col justify-between flex-1">
                                        <div>
                                            <p className="font-medium text-lg">{news.title}</p>
                                            <p className="text-sm text-gray-600 line-clamp-2">{news.description}</p>
                                        </div>
                                        <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                                            <p><CalendarOutlined /> {news.date}</p>
                                            <p><EyeOutlined /> {news.views} ko'rishlar</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="mt-5">Qidiruv natijalariga mos yangiliklar topilmadi.</p>
                        )}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default GPhoto;
