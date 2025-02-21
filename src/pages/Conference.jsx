import React, { useState } from "react";
import { Input, Button, Select, DatePicker } from "antd";
import moment from "moment";
import Sidebar from "../components/Layout/Sidebar";

const { Option } = Select;
const { RangePicker } = DatePicker;

export default function Conference() {
    const [filters, setFilters] = useState({
        name: "",
        type: "",
        region: "",
        dateRange: [],
    });

    const [data, setData] = useState([
        {
            id: 1,
            name: "Ortopedik stomatologiya va ortodontiyaning zamonaviy jihatlari",
            date: "2022-12-23",
            location: "Toshkent shahar, Toshkent davlat stomatologiya instituti",
            contact: "+71 232065",
            email: "tsdti2016@gmail.ru",
            type: "Tibbiyot fanlari",
            category: "Xorijiy",
        },
        {
            id: 2,
            name: "Barqaror o'rmonchilik",
            date: "2022-12-21",
            location: "Toshkent shahar, Toshkent davlat agrar universiteti",
            contact: "+998 71 260 43 82",
            email: "tashu_info@edu.uz",
            type: "O'rmon xo'jaligi fanlari",
            category: "Xorijiy",
        },
        {
            id: 3,
            name: "Zamonaviy koordinatsion birikmalar kimyosining muammolari",
            date: "2022-12-21",
            location: "Buxoro viloyati, Buxoro davlat universiteti",
            contact: "+998 65 221 29 14",
            email: "buxdu.rektor@buxdu.uz",
            type: "Kimyo texnologiyalari va nanotexnologiya fanlari",
            category: "Xorijiy",
        },
        {
            id: 4,
            name: "Barqaror o'rmonchilik",
            date: "2022-12-21",
            location: "Toshkent shahar, Toshkent davlat agrar universiteti",
            contact: "+998 71 260 43 82",
            email: "tashu_info@edu.uz",
            type: "O'rmon xo'jaligi fanlari",
            category: "Xorijiy",
        },
    ]);

    const handleFilterChange = (key, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
    };

    const filteredData = data.filter((item) => {
        const { name, type, region, dateRange } = filters;
        const [start, end] = dateRange;

        return (
            (!name || item.name.toLowerCase().includes(name.toLowerCase())) &&
            (!type || item.type === type) &&
            (!region || item.location.toLowerCase().includes(region.toLowerCase())) &&
            (!start ||
                (moment(item.date).isSameOrAfter(start) &&
                    moment(item.date).isSameOrBefore(end)))
        );
    });

    const handleClearFilters = () => {
        setFilters({
            name: "",
            type: "",
            region: "",
            dateRange: [],
        });
    };

    return (
        <div className="fullContainer">
            <Sidebar>
                <div className="py-10 px-5">
                    <p className="text-2xl font-black">Konferensiyalar</p>
                    <div className="my-5 p-5 bg-white rounded-lg shadow">
                        {/* Filtrlash bo'limi */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                            <Input
                                placeholder="Nomi"
                                value={filters.name}
                                onChange={(e) => handleFilterChange("name", e.target.value)}
                            />
                            <Select
                                placeholder="Konferensiya turi"
                                value={filters.type}
                                onChange={(value) => handleFilterChange("type", value)}
                            >
                                <Option value="">Barchasi</Option>
                                <Option value="Tibbiyot fanlari">Tibbiyot fanlari</Option>
                                <Option value="O'rmon xo'jaligi fanlari">
                                    O'rmon xo'jaligi fanlari
                                </Option>
                                <Option value="Kimyo texnologiyalari va nanotexnologiya fanlari">
                                    Kimyo texnologiyalari va nanotexnologiya fanlari
                                </Option>
                            </Select>
                            <Input
                                placeholder="Hudud"
                                value={filters.region}
                                onChange={(e) => handleFilterChange("region", e.target.value)}
                            />
                            <RangePicker
                                value={filters.dateRange}
                                onChange={(dates) => handleFilterChange("dateRange", dates)}
                            />
                        </div>
                        {/* Filtrlash tugmalari */}
                        <div className="flex justify-between">
                            <Button type="primary">Qidirish</Button>
                            <Button type="primary" danger onClick={handleClearFilters}>
                                Tozalash
                            </Button>
                        </div>
                    </div>

                    {/* Konferensiyalar ro'yxati */}
                    <div className="bg-white rounded-lg shadow p-5">
                        {filteredData.map((item) => (
                            <div
                                key={item.id}
                                className="border-b last:border-0 py-4 flex flex-col md:flex-row justify-between items-start md:items-end"
                            >
                                <div>
                                    <p className="text-lg font-bold">{item.name}</p>
                                    <p className="text-sm text-gray-600">
                                        {moment(item.date).format("DD.MM.YYYY")} | {item.type}
                                    </p>
                                    <p className="text-sm">{item.location}</p>
                                    <p className="text-sm text-gray-500">{item.contact}</p>
                                    <p className="text-sm text-gray-500">{item.email}</p>
                                </div>
                                <Button type="primary">Batafsil</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
