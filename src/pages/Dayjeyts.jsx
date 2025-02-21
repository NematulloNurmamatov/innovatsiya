import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import { EyeOutlined, CalendarOutlined, SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import { Input, Button, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const Dayjeyts = () => {
    const navigate = useNavigate();

    const newsData = [
        {
            id: 1,
            title: "Astranomiya",
            date: "2024-12-17",
            views: 84,
            description: "Astronomiya sohasidagi ilmiy va innovatsion ishlanmalar bo‘yicha Dayjest",
            image: "https://nsp.gov.uz/static/uploads/dayjest_img720eb329-554c-4604-9172-0e91f53774e3.jpg",
        },
        {
            id: 2,
            title: "Chorvachilik",
            date: "2024-12-12",
            views: 25,
            description: "Chorvachilik sohasidagi ilmiy va innovatsion ishlanmalar boʻyicha DAYJEST",
            image: "https://nsp.gov.uz/static/uploads/dayjest_img7647ab01-9c44-41d8-9257-be6566dddce2.jpg",
        },
        {
            id: 3,
            title: "Uzumchilik va vinochilik sohasidagi ilmiy va innovatsion ishlanmalar bo’yicha dayjest",
            date: "2024-11-05",
            views: 45,
            description: "Uzumchilik va vinochilik sohasidagi ilmiy va innovatsion ishlanmalar bo’yicha dayjest № 10",
            image: "https://nsp.gov.uz/static/uploads/dayjest06378bcb-bb55-49c2-a590-ba71e460cf9d.png",
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
    const navigateToDetails = (id) => {
        navigate(`/news-detail/${id}`);
    };

    return (
        <div className="fullContainer">
            <Sidebar>
                <div className="pt-12 container">
                    <h1 className="!font-black text-2xl mb-6">Dayjestlar</h1>

                    {/* Qidiruv tizimi */}
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Input
                            placeholder="Yangilik nomi"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
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
                                    className="w-40 h-60 object-cover rounded-md"
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

export default Dayjeyts;
