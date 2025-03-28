import React, { useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import { Input, Button, DatePicker } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Events = () => {
    const data = [
        {
            id: 1,
            title: "Hurmatli professor-o‘qituvchilar va ilmiy tadqiqotchilar!",
            date: "20.07.2024",
            description:
                "Ahmed Mohamed Aziz Ismailning “Enhancing the Energy Efficiency and Security Performance for IoT Based Wireless Sensor Networks Applications” mavzusidagi dissertatsiyasi...",
            img: "https://static.tuit.uz/uploads/1/480_320_0dvmod712exOn4zjudBzo0PJXyVCFKns.jpeg",
        },
        {
            id: 2,
            title: "Hurmatli professor-o‘qituvchilar va ilmiy tadqiqotchilar!",
            date: "19.07.2024",
            description:
                "Tojiev Ma’ruf Ruzikulovichning “Videotasvirda odamlar yattiqligi buzilishi va yorug‘lik intensivligi ta’sirini o‘z ichiga olgan tizimli tadqiqotlar” mavzusidagi dissertatsiyasi...",
            img: "https://static.tuit.uz/uploads/1/480_320_V4mIYW2RWl0NNAedRHvnJXbTsmiK1-Hs.jpg",
        },
        {
            id: 3,
            title: "1-kursni muvaffaqiyatli tamomlagan talabalar diqqatiga!",
            date: "08.07.2024",
            description:
                "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti 1-kurs talabalari uchun...",
            img: "https://static.tuit.uz/uploads/1/480_320_F6uGeArU4pSevKF2hSISBLpMwPAXOmqo.jpg",
        },
    ];

    const [filteredData, setFilteredData] = useState(data);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchDate, setSearchDate] = useState(null);

    const handleSearch = () => {
        const filtered = data.filter((item) => {
            const matchesTitle = item.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesDate =
                !searchDate || item.date === searchDate.format("DD.MM.YYYY");
            return matchesTitle && matchesDate;
        });
        setFilteredData(filtered);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setSearchDate(null);
        setFilteredData(data);
    };

    const navigate = useNavigate()

    const navigateToDetails = (id) => {
        navigate(`/events-details/${id}`);
    };

    return (
        <div className="fullContainer">
            <Sidebar>
                <div className="py-10 container">
                    <p className="text-2xl font-black mb-6">Tadbirlar</p>

                    {/* Qidiruv formasi */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <Input
                            placeholder="Nomi"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full md:w-1/3"
                            size="large"
                        />
                        <DatePicker
                            placeholder="Sana"
                            value={searchDate}
                            onChange={(date) => setSearchDate(date)}
                            className="w-full md:w-1/3"
                            size="large"
                            format="DD.MM.YYYY"
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

                    {/* Tadbirlar ro'yxati */}
                    {filteredData.length > 0 ? (
                        filteredData.map((event) => (
                            <div
                                key={event.id}
                                className="border bg-white p-4 rounded-md border-gray-300 mb-4 shadow-md flex items-center gap-4 hover:shadow-lg transition duration-200 cursor-pointer max-[600px]:flex-col"
                                onClick={() => navigateToDetails(event.id)}
                            >
                                <img
                                    src={event.img}
                                    alt={event.title}
                                    className="w-32 h-36 max-[600px]:w-full max-[600px]:h-48 object-cover rounded-md"
                                />
                                <div className="flex-1">
                                    <p className="font-semibold text-lg">{event.title}</p>
                                    <p className="text-sm text-gray-500">{event.date}</p>
                                    <p className="text-sm text-gray-700 mt-2">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Ma'lumotlar topilmadi.</p>
                    )}
                </div>
            </Sidebar>
        </div>
    );
};

export default Events;
