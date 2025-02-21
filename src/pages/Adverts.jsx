import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import { EyeOutlined, CalendarOutlined, SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import { Input, Button, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const Adverts = () => {
    const navigate = useNavigate();

    const newsData = [
        {
            id: 1,
            title: "⚡️Mustaqil izlanuvchilikka hujjat topshirmoqchi bo‘lgan talabgorlar diqqatiga!",
            date: "2024-12-17",
            views: 84,
            description: "⚡️To the attention of applicants who want to apply for independent research!...",
            image: "https://nsp.gov.uz/static/uploads/news_img5f99421e-3e94-4339-afc9-a62ba4798313.jpg",
        },
        {
            id: 2,
            title: "Dunyodagi eng qimmat startap ma'lum bo'ldi",
            date: "2024-12-12",
            views: 25,
            description: "Ilon Maskning SpaceX aerokosmik kompaniyasi dunyodagi eng qimmat startapga aylandi...",
            image: "https://nsp.gov.uz/static/uploads/news_imge91e1e2a-0ef3-42f7-afca-3675c6c42cc3.jpg",
        },
        {
            id: 3,
            title: "Yangi texnologiyalar ko'rgazmasi boshlandi",
            date: "2024-11-05",
            views: 45,
            description: "Texnologiya olamidagi yangi yutuqlarni o'zida jamlagan ko'rgazma ochildi...",
            image: "https://nsp.gov.uz/static/uploads/news_img10050976-e394-4275-a15e-77d2d93d9d03.jpg",
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

    // Tafsilotlar sahifasiga o'tish
    const navigateToDetails = (id) => {
        navigate(`/adverts-details/${id}`);
    };

    return (
        <div className="fullContainer">
            <Sidebar>
                <div className="pt-12 container">
                    <h1 className="!font-black text-2xl mb-6">E'lonlar</h1>

                    {/* Qidiruv tizimi */}
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Input
                            placeholder="Elon nomi"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className=" md:w-1/3"
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

export default Adverts;
