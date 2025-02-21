import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import { EyeOutlined, CalendarOutlined, SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import { Input, Button, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const GPhoto = () => {
    const navigate = useNavigate();

    const newsData = [
        {
            id: 1,
            title: "Ilmiy loyihalar monitoringi o'tkazilmoqda",
            date: "2024-12-17",
            views: 84,
            description: "Ilmiy faoliyatga oid davlat dasturlari doirasida amalga oshirilayotgan loyihalar monitoringi...",
            image: "https://nsp.gov.uz/static/uploads/gallery_19e763c2-7486-4a08-8808-827fc15d88f2.jpg",
        },
        {
            id: 2,
            title: "Dunyodagi eng qimmat startap ma'lum bo'ldi",
            date: "2024-12-12",
            views: 25,
            description: "Ilon Maskning SpaceX aerokosmik kompaniyasi dunyodagi eng qimmat startapga aylandi...",
            image: "https://nsp.gov.uz/static/uploads/gallery_3e4c4efa-5cac-4ac5-878c-274456c2f66c.jpg",
        },
        {
            id: 3,
            title: "Yangi texnologiyalar ko'rgazmasi boshlandi",
            date: "2024-11-05",
            views: 45,
            description: "Texnologiya olamidagi yangi yutuqlarni o'zida jamlagan ko'rgazma ochildi...",
            image: "https://nsp.gov.uz/static/uploads/gallery_82618f48-be75-4418-8fb8-581b9c881629.jpg",
        },
        {
            id: 4,
            title: "Ilmiy loyihalar monitoringi o'tkazilmoqda",
            date: "2024-12-17",
            views: 84,
            description: "Ilmiy faoliyatga oid davlat dasturlari doirasida amalga oshirilayotgan loyihalar monitoringi...",
            image: "https://nsp.gov.uz/static/uploads/gallery_be7e2288-3589-4768-953c-582c819de26e.jpg",
        },
        {
            id: 5,
            title: "Dunyodagi eng qimmat startap ma'lum bo'ldi",
            date: "2024-12-12",
            views: 25,
            description: "Ilon Maskning SpaceX aerokosmik kompaniyasi dunyodagi eng qimmat startapga aylandi...",
            image: "https://nsp.gov.uz/static/uploads/gallery_be7e2288-3589-4768-953c-582c819de26e.jpg",
        },
        {
            id: 6,
            title: "Yangi texnologiyalar ko'rgazmasi boshlandi",
            date: "2024-11-05",
            views: 45,
            description: "Texnologiya olamidagi yangi yutuqlarni o'zida jamlagan ko'rgazma ochildi...",
            image: "https://nsp.gov.uz/static/uploads/gallery_c78631f2-98dc-48d3-8b9d-001bfa716f18.jpg",
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [dateRange, setDateRange] = useState(null);
    const [filteredNews, setFilteredNews] = useState(newsData);

    // Qidiruvni bajarish
    const handleSearch = () => {
        const filtered = newsData.filter((news) => {
            const matchesTitle = news.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDate =
                !dateRange ||
                (new Date(news.date) >= dateRange[0]._d && new Date(news.date) <= dateRange[1]._d);
            return matchesTitle && matchesDate;
        });
        setFilteredNews(filtered);
    };

    // Filtrlarni tozalash
    const clearFilters = () => {
        setSearchTerm("");
        setDateRange(null);
        setFilteredNews(newsData);
    };

    // Sahifaga o'tish funksiyasi
    // const navigateToDetails = (id) => {
    //     // navigate(`/news-detail/${id}`);
    // };

    return (
        <div className="fullContainer">
            <Sidebar>
                <div className="pt-12 container">
                    <h1 className="!font-black text-2xl mb-6">Yangiliklar</h1>

                    {/* Qidiruv tizimi */}
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Input
                            placeholder="Yangilik nomi"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full sm:w-1/2 md:w-1/3"
                            size="large"
                        />
                        <RangePicker
                            className="w-full sm:w-1/2 md:w-1/3"
                            size="large"
                            onChange={(dates) => setDateRange(dates)}
                        />
                        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                            <Button
                                type="primary"
                                icon={<SearchOutlined />}
                                size="large"
                                onClick={handleSearch}
                            >
                                Qidirish
                            </Button>
                            <Button
                                icon={<ReloadOutlined />}
                                size="large"
                                onClick={clearFilters}
                            >
                                Tozalash
                            </Button>
                        </div>
                    </div>

                    {/* Yangiliklar kartalari */}
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10'>
                        {filteredNews.length > 0 ? (
                            filteredNews.map((news) => (
                                <div
                                    key={news.id}
                                    className="border bg-white p-4 rounded-md border-gray-300 shadow-md gap-4 cursor-pointer hover:shadow-lg transition duration-200"
                                    onClick={() => navigateToDetails(news.id)}
                                >
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full object-cover rounded-md h-40 sm:h-52"
                                    />
                                    <div className="flex flex-col justify-between flex-1">
                                        <div>
                                            <p className="font-medium text-lg">{news.title}</p>
                                            <p className="text-sm text-gray-600 line-clamp-2">{news.description}</p>
                                        </div>
                                        <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
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
                </div>
            </Sidebar>
        </div>
    );

};

export default GPhoto;
