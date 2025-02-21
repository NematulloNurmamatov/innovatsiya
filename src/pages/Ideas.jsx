import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import { EyeOutlined, CalendarOutlined, SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import { Input, Button, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const Ideas = () => {
    const navigate = useNavigate();

    const newsData = [
        {
            id: 1,
            title: "Нанотузилишли катализаторлар олиш технологиясини ишлаб чиқиш ",
            date: "2024-12-17",
            views: 84,
            description: "Ilmiy faoliyatga oid davlat dasturlari doirasida amalga oshirilayotgan loyihalar monitoringi...",
            image: "https://via.placeholder.com/300x150?text=Ilmiy+Loyiha",
            shifr: "PZ-20170926279",
        },
        {
            id: 2,
            title: "Dunyodagi eng qimmat startap ma'lum bo'ldi",
            date: "2024-12-12",
            views: 25,
            description: "Ilon Maskning SpaceX aerokosmik kompaniyasi dunyodagi eng qimmat startapga aylandi...",
            image: "https://via.placeholder.com/300x150?text=SpaceX",
            shifr: "SX-20240412",
        },
        {
            id: 3,
            title: "Yangi texnologiyalar ko'rgazmasi boshlandi",
            date: "2024-11-05",
            views: 45,
            description: "Texnologiya olamidagi yangi yutuqlarni o'zida jamlagan ko'rgazma ochildi...",
            image: "https://via.placeholder.com/300x150?text=Ko'rgazma",
            shifr: "TZ-20241105",
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [shifrSearch, setShifrSearch] = useState(""); // Yangi holat
    const [dateRange, setDateRange] = useState(null);
    const [filteredNews, setFilteredNews] = useState(newsData);

    // Qidiruvni bajarish
    const handleSearch = () => {
        const filtered = newsData.filter((news) => {
            const matchesTitle = news.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesShifr = news.shifr.toLowerCase().includes(shifrSearch.toLowerCase()); // Yangi shart
            const matchesDate =
                !dateRange ||
                (new Date(news.date) >= dateRange[0]._d && new Date(news.date) <= dateRange[1]._d);
            return matchesTitle && matchesShifr && matchesDate;
        });
        setFilteredNews(filtered);
    };

    // Filtrlarni tozalash
    const clearFilters = () => {
        setSearchTerm("");
        setShifrSearch("");
        setDateRange(null);
        setFilteredNews(newsData);
    };

    // Sahifaga o'tish funksiyasi
    const navigateToDetails = (id) => {
        navigate(`/ideas-details/${id}`);
    };

    return (
        <div className="fullContainer">
            <Sidebar>
                <div className="pt-12 container">
                    <h1 className="!font-black text-2xl mb-6">Innovatsion g'oyalar ma'lumotlar bazasi</h1>

                    {/* Qidiruv tizimi */}
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Input
                            placeholder="Yangilik nomi"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full md:w-1/3"
                            size="large"
                        />
                        <Input
                            placeholder="Shifr"
                            value={shifrSearch}
                            onChange={(e) => setShifrSearch(e.target.value)}
                            className="w-full md:w-1/3"
                            size="large"
                        />
                        <RangePicker
                            className="w-full md:w-1/3"
                            size="large"
                            onChange={(dates) => setDateRange(dates)}
                        />
                        <div className="flex gap-2">
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
                    <div className='mt-16'>
                        {filteredNews.length > 0 ? (
                            filteredNews.map((news) => (
                                <div
                                    key={news.id}
                                    className="border bg-white p-4 rounded-md border-gray-300 mt-5 shadow-md flex gap-4 cursor-pointer hover:shadow-lg transition duration-200"
                                    onClick={() => navigateToDetails(news.id)}
                                >
                                    <div className="flex flex-col justify-between flex-1">
                                        <div>
                                            <p className="font-semibold text-lg">{news.title}</p>
                                            <p className="text-sm text-gray-600">{news.description}</p>
                                        </div>
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <p className='font-semibold text-black'>
                                                {news.shifr}
                                            </p>
                                            <p>
                                                <CalendarOutlined /> {news.date}
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

export default Ideas;
