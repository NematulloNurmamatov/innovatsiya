import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import { EyeOutlined, CalendarOutlined, SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import { Input, Button, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const Historys = () => {
    const navigate = useNavigate();

    const newsData = [
        {
            id: 1,
            title: "Neft-gaz sohasida qo‘llaniladigan texnik sulfanol ishlab chiqarish texnologiyasini o‘zlashtirish",
            date: "2024-12-17",
            views: 84,
            description: "Neft'-gaz sohasida qo‘llaniladigan texnik sul'fanol ishlab chiqarish texnologiyasini o‘zlashtirish loyihasini amalga oshirish maqsadida 'Sirt Faol Moddalar' MChJ tashkil qilindi...",
            image: "https://nsp.gov.uz/static/uploads/historys_img1f9c937b-9c99-4b24-92e2-41d4ed4b6b96.jpg",
        },
        {
            id: 2,
            title: "Yengil uchuvchi uglevodorodlarni bug‘lanishdan yo‘qotilishini kamaytirish va to‘satdan sig‘im ichida paydo bo‘luvchi yong‘inni o‘chiruvchi suzuvchi ponton ishlab chiqarishni tashkil etish",
            date: "2024-12-12",
            views: 25,
            description: '"Markaziy Qizilqum fosforitlari asosida oddiy superfosfat ishlab chiqarishning zamonaviy texnologiyasini ishlab chiqish va joriy qilish" loyihasi bo‘yicha 2019 y."',
            image: "https://nsp.gov.uz/static/uploads/historys_imgd63882ca-9a87-4e89-ae48-682dd7ef972a.png",
        },
        {
            id: 3,
            title: "Yangi texnologiyalar ko'rgazmasi boshlandi",
            date: "2024-11-05",
            views: 45,
            description: "Texnologiya olamidagi yangi yutuqlarni o'zida jamlagan ko'rgazma ochildi...",
            image: "https://nsp.gov.uz/static/uploads/historys_imgdcbb1b23-e52b-4539-b3d8-89a8843419d4.jpg",
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
        navigate(`/historys-details/${id}`);
    };

    return (
        <div className="fullContainer">
            <Sidebar>
                <div className="pt-12 container">
                    <h1 className="!font-black text-2xl mb-6">Muvaffaqiyat tarixi</h1>

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
                                className="border bg-white p-4 rounded-md border-gray-300 mt-5 shadow-md flex gap-4 cursor-pointer hover:shadow-lg transition duration-200 max-[600px]:flex-col"
                                onClick={() => navigateToDetails(news.id)}
                            >
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-40 h-32 max-[600px]:w-full max-[600px]:h-48 object-cover rounded-md"
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

export default Historys
