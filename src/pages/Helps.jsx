import React, { useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import { FaRegFilePdf } from "react-icons/fa";
import { Input, Select, Button } from "antd";
import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const Helps = () => {
    const data = [
        {
            id: 1,
            title:
                "2017 — 2021-yillarda O'zbekiston Respublikasini rivojlantirishning beshta ustuvor yo'nalishi bo'yicha harakatlar strategiyasi",
            date: "03.03.2020",
            docNumber: "5953",
            docType: "Farmon",
        },
        {
            id: 2,
            title:
                "Ilmiy va ilmiy-texnikaviy faoliyat natijalarini tijoratlashtirish samaradorligini oshirish bo'yicha qo'shimcha chora-tadbirlar",
            date: "13.07.2018",
            docNumber: "3855",
            docType: "Qaror",
        },
        {
            id: 3,
            title:
                "Ilmiy-tadqiqot va innovatsion faoliyatni rivojlantirish normativ-huquqiy bazasini yanada takomillashtirish chora-tadbirlari",
            date: "03.03.2022",
            docNumber: "133",
            docType: "Vazirlar Mahkamasi",
        },
        {
            id: 4,
            title:
                "Innovatsion g'oyalar, texnologiyalar va loyihalarni amaliy joriy qilish tizimini yanada rivojlantirish chora-tadbirlari",
            date: "26.04.2018",
            docNumber: "3682",
            docType: "Farmon",
        },
    ];

    const [filteredData, setFilteredData] = useState(data);
    const [docType, setDocType] = useState("Barchasi");
    const [docYear, setDocYear] = useState("Barchasi");
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        const filtered = data.filter((item) => {
            const matchesTitle = item.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDocType = docType === "Barchasi" || item.docType === docType;
            const matchesYear =
                docYear === "Barchasi" || item.date.split(".")[2] === docYear;
            return matchesTitle && matchesDocType && matchesYear;
        });
        setFilteredData(filtered);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setDocType("Barchasi");
        setDocYear("Barchasi");
        setFilteredData(data);
    };

    return (
        <div className="fullContainer">
            <Sidebar>
                <div className="py-10 container">
                    <p className="text-2xl font-black mb-6">
                        Davlat tomonidan qo'llab-quvvatlash chora-tadbirlari
                    </p>

                    {/* Qidiruv formasi */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <Input
                            placeholder="Hujjat nomi"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full md:w-1/4"
                            size="large"
                        />
                        <Select
                            value={docType}
                            onChange={(value) => setDocType(value)}
                            className="w-full md:w-1/4"
                            size="large"
                        >
                            <Option value="Barchasi">Barchasi</Option>
                            <Option value="Farmon">Farmon</Option>
                            <Option value="Qaror">Qaror</Option>
                            <Option value="Vazirlar Mahkamasi">Vazirlar Mahkamasi</Option>
                        </Select>
                        <Select
                            value={docYear}
                            onChange={(value) => setDocYear(value)}
                            className="w-full md:w-1/4"
                            size="large"
                        >
                            <Option value="Barchasi">Barchasi</Option>
                            <Option value="2018">2018</Option>
                            <Option value="2020">2020</Option>
                            <Option value="2022">2022</Option>
                        </Select>
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

                    {/* Ma'lumotlar */}
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <div
                                key={item.id}
                                className="border bg-white p-4 rounded-md border-gray-300 mb-4 shadow-md flex items-center gap-4 hover:shadow-lg transition duration-200"
                            >
                                <FaRegFilePdf className="text-4xl text-red-500" />
                                <div className="flex-1">
                                    <p className="font-semibold text-lg max-[600px]:text-[16px] leading-6">{item.title}</p>
                                    <p className="text-sm text-gray-500">
                                        {item.docType} {item.docNumber}, {item.date}
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

export default Helps;
