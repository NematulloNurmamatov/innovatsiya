import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import { EyeOutlined, CalendarOutlined, SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import { Input, Button, DatePicker } from 'antd';
import Search from '../components/search/Search';

const { RangePicker } = DatePicker;

const Hayat = () => {
    const navigate = useNavigate();

    const newsData = [
        {
            id: 1,
            title: "Ilm-fan va innovatsiyalar kengashining yigirmanchi yig‘ilishi o‘z ishini boshladi.",
            date: "2024-12-17",
            views: 84,
            description: "Ilmiy faoliyatga oid davlat dasturlari doirasida amalga oshirilayotgan loyihalar monitoringi...",
            image: "https://nsp.gov.uz/static/uploads/hayat_imga1d79cc2-21ba-4f34-aec5-bfe8a23d1c6d.jpg",
        },
        {
            id: 2,
            title: "Dunyodagi eng qimmat startap ma'lum bo'ldi",
            date: "2024-12-12",
            views: 25,
            description: "Ilon Maskning SpaceX aerokosmik kompaniyasi dunyodagi eng qimmat startapga aylandi...",
            image: "https://nsp.gov.uz/static/uploads/hayat_img973662a3-7497-4ffd-b868-b96d8ccd33fb.jpg",
        },
        {
            id: 3,
            title: "Yangi texnologiyalar ko'rgazmasi boshlandi",
            date: "2024-11-05",
            views: 45,
            description: "Texnologiya olamidagi yangi yutuqlarni o'zida jamlagan ko'rgazma ochildi...",
            image: "https://via.placeholder.com/300x150?text=Ko'rgazma",
        },
    ];

    const [filteredNews, setFilteredNews] = useState(newsData);

    // Qidiruvni bajarish


    // Sahifaga o'tish funksiyasi
    const navigateToDetails = (id) => {
        navigate(`/hayat-detail/${id}`);
    };

    return (
        <div className="fullContainer">
            <Sidebar>
                <div className="pt-12 container">
                    <h1 className="!font-black text-2xl mb-6">Hay'ati yig'ilishlari</h1>

                    {/* Qidiruv tizimi */}
                    <Search newsData={newsData} setFilteredNews={setFilteredNews} />

                    {/* Yangiliklar kartalari */}
                    {filteredNews.length > 0 ? (
                        filteredNews.map((news) => (
                            <div
                                key={news.id}
                                className="border bg-white p-4 rounded-md border-gray-300 mt-5 shadow-md flex gap-4 cursor-pointer hover:shadow-lg transition duration-200"
                                onClick={() => navigateToDetails(news.id)}
                            >
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-40 h-24 object-cover rounded-md"
                                />
                                <div className="flex flex-col justify-between flex-1">
                                    <div>
                                        <p className="font-medium text-lg">{news.title}</p>
                                        <p className="text-sm text-gray-600">{news.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <p>
                                            <CalendarOutlined /> {news.date}
                                        </p>
                                        <p>
                                            <EyeOutlined /> {news.views} ko'rishlar
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="mt-5">Qidiruv natijalariga mos yangiliklar topilmadi.</p>
                    )}
                </div>
            </Sidebar>
        </div>
    );
};

export default Hayat;
