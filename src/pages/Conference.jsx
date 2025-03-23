import React, { useState } from "react";
import { Input, Button, Select, DatePicker } from "antd";
import moment from "moment";
import Sidebar from "../components/Layout/Sidebar";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

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
            location: "Toshkent shahar",
            contact: "+71 232065",
            email: "tsdti2016@gmail.ru",
            type: "Tibbiyot fanlari",
            category: "Xorijiy",
        },
        {
            id: 2,
            name: "Barqaror o'rmonchilik",
            date: "2022-12-21",
            location: "Toshkent shahar",
            contact: "+998 71 260 43 82",
            email: "tashu_info@edu.uz",
            type: "O'rmon xo'jaligi fanlari",
            category: "Xorijiy",
        },
        {
            id: 3,
            name: "Zamonaviy koordinatsion birikmalar kimyosining muammolari",
            date: "2022-12-21",
            location: "Buxoro viloyati",
            contact: "+998 65 221 29 14",
            email: "buxdu.rektor@buxdu.uz",
            type: "Kimyo texnologiyalari va nanotexnologiya fanlari",
            category: "Xorijiy",
        },
        {
            id: 4,
            name: "Barqaror o'rmonchilik",
            date: "2022-12-21",
            location: "Jizzax viloyati",
            contact: "+998 71 260 43 82",
            email: "tashu_info@edu.uz",
            type: "O'rmon xo'jaligi fanlari",
            category: "Xorijiy",
        },
    ]);

    const uniqueRegions = [
        ...new Set(data.map((item) => item.location))
    ];




    const handleFilterChange = (key, value) => {
        if (key === "dateRange" && !value) {
            value = [];
        }
        setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
    };


    const filteredData = data.filter((item) => {
        const { name, type, region, dateRange } = filters;
        const [start, end] = dateRange || [];

        return (
            (!name || item.name.toLowerCase().includes(name.toLowerCase())) &&
            (!type || item.type === type) &&
            (!region || item.location === region) &&
            (!start ||
                (moment(item.date, "YYYY-MM-DD").isSameOrAfter(moment(start).startOf("day")) &&
                    moment(item.date, "YYYY-MM-DD").isSameOrBefore(moment(end).endOf("day"))))
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                            <div className="flex flex-col gap-1">
                                <label className="text-[11px] text-cyan-900 font-medium">Nomi</label>
                                <Input
                                    placeholder="Nomi"
                                    value={filters.name}
                                    onChange={(e) => handleFilterChange("name", e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[11px] text-cyan-900 font-medium">Konferensiya turi</label>
                                <Select
                                    placeholder="Konferensiya turi"
                                    value={filters.type}
                                    className="w-full"
                                    onChange={(value) => handleFilterChange("type", value)}
                                >
                                    <Option value="">Barchasi</Option>
                                    <Option value="Tibbiyot fanlari">Tibbiyot fanlari</Option>
                                    <Option value="O'rmon xo'jaligi fanlari">O'rmon xo'jaligi fanlari</Option>
                                    <Option value="Kimyo texnologiyalari va nanotexnologiya fanlari">Kimyo texnologiyalari va nanotexnologiya fanlari</Option>
                                </Select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[11px] text-cyan-900 font-medium">Hudud</label>
                                <Select
                                    placeholder="Hudud"
                                    className="w-full"
                                    value={filters.region}
                                    onChange={(value) => handleFilterChange("region", value)}
                                >
                                    <Option value="">Barchasi</Option>
                                    {uniqueRegions.map((region) => (
                                        <Option key={region} value={region}>{region}</Option>
                                    ))}
                                </Select>
                            </div>
                            <div className="flex flex-col  gap-1">
                                <label className="text-[11px] text-cyan-900 font-medium">Sana oralig'i</label>
                                <RangePicker
                                    value={filters.dateRange.length ? filters.dateRange : null}
                                    onChange={(dates) => handleFilterChange("dateRange", dates)}
                                />

                            </div>
                        </div>
                        <div className="flex justify-between">
                            <Button type="primary" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                                Qidirish
                            </Button>
                            <Button type="primary" danger onClick={handleClearFilters}>
                                Tozalash
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-5">
                        {filteredData.map((item) => (
                            <div key={item.id} className="border-b last:border-0 py-4 flex flex-col md:flex-row justify-between items-start md:items-end">
                                <div >
                                    <p className="text-lg font-bold">{item.name}</p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1"><IoIosPeople className="text-black size-5" />{moment(item.date).format("YYYY-MM-DD")} | {item.type}</p>
                                    <p className="text-sm flex items-center gap-1"><FaLocationDot className="text-black" />  {item.location}</p>
                                    <p className="text-sm text-gray-500 flex items-center gap-1"> <BsFillTelephoneFill className="text-black" />{item.contact}</p>
                                    <p className="text-sm text-blue-500 flex items-center gap-1 cursor-pointer"><MdEmail className="text-black" />{item.email}</p>
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