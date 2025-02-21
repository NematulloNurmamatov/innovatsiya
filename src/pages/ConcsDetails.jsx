import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';

const newsData = [
    {
        id: 1,
        title: "⚡️Mustaqil izlanuvchilikka hujjat topshirmoqchi bo‘lgan talabgorlar diqqatiga!",
        date: "2024-12-17",
        views: 84,
        description: "⚡️To the attention of applicants who want to apply for independent research!...",
        image: "https://via.placeholder.com/300x150?text=Ilmiy+Loyiha",
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

export default function ConcsDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const news = newsData.find((item) => item.id === parseInt(id));

    if (!news) {
        return <p>Yangilik topilmadi!</p>;
    }

    return (
        <div className="">
            <Sidebar>
                <div className='py-10'>
                    <button
                        onClick={() => navigate(-1)} // Orqaga qaytish
                        className="!mb-4 px-4 py-2 bg-blue-500 !text-white rounded hover:bg-blue-600"
                    >
                        Orqaga
                    </button>
                    <div className="bg-white p-6 rounded shadow-md">
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h1 className="text-2xl font-bold mb-2">{news.title}</h1>
                        <p className="text-gray-600 text-sm mb-4">{news.date}</p>
                        <p className="mb-4">{news.description}</p>
                        <p className="text-gray-500 text-sm">
                            <strong>{news.views}</strong> ko'rishlar
                        </p>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}


