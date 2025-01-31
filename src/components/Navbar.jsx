import React, { useState } from "react";
import { Button, Menu, Select } from "antd";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

const Navbar = () => {
    // State to handle menu selection
    const [current, setCurrent] = useState("mail");
    const [menuOpen, setMenuOpen] = useState(false);

    // Handle menu item click
    const onClick = (e) => {
        setCurrent(e.key);
    };

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Menu items
    const items = [
        {
            label: 'Portal haqida',
            key: 'mail',
            // icon: <MailOutlined />,
        },
        {
            label: 'Davlat boshqaruvi',
            key: 'SubMenu',
            children: [
                {
                    type: 'group',
                    label: 'Ilm-fan va innovatsiyalar sohasidagi davlat boshqaruvi',
                    children: [
                        {
                            label: 'Normativ- huquqiy hujjatlar',
                            key: 'setting:1',
                        },
                        {
                            label: 'Davlat dasturlari',
                            key: 'setting:2',
                        },
                        {
                            label: 'Davlat boshqaruv organlari',
                            key: 'setting:3',
                        },
                        {
                            label: "Oliy ta'lim muassasalari",
                            key: 'setting:4',
                        },
                        {
                            label: 'Ilmiy-tadqiqot muassasalari',
                            key: 'setting:5',
                        },
                        {
                            label: 'Hududiy salohiyat',
                            key: 'setting:6',
                        },
                    ],
                },
            ],
        },
        {
            label: 'Texnoparklar',
            key: 'SubMenu2',
            children: [
                {
                    type: 'group',
                    label: 'Texnoparklar',
                    children: [
                        {
                            label: 'Texnoparklar',
                            key: 'setting:7',
                        },
                        {
                            label: 'Startup akseleratorlar',
                            key: 'setting:8',
                        },
                    ],
                },
            ],
        },
        {
            label: 'Noshirlik faoliyati',
            key: 'SubMenu8',
            children: [
                {
                    type: 'group',
                    label: 'Noshirlik faoliyati',
                    children: [
                        {
                            label: "Mahalliy ma'lumotlar bazasi",
                            key: 'setting:9',
                        },
                        {
                            label: "Xorijiy ma'lumotlar bazasi",
                            key: 'setting:10',
                        },
                        {
                            label: "Yo'riqnoma va qo'llanmalar",
                            key: 'setting:11',
                        },
                        {
                            label: "Ko'p so'raladigan savollar",
                            key: 'setting:12',
                        },
                        {
                            label: "Yangiliklar",
                            key: 'setting:13',
                        },
                        {
                            label: "E'lonlar",
                            key: 'setting:14',
                        },
                        {
                            label: "Loyihalar turlari",
                            key: 'setting:15',
                        },
                        {
                            label: "Konferensiyalar",
                            key: 'setting:16',
                        },
                        {
                            label: "Innovatsion rivojlanish vazirligi Hay'ati yig'ilishlari",
                            key: 'setting:17',
                        },
                        {
                            label: "Innovatsion rivojlanish vazirligi Ilmiy-texnik kengash yig'ilishlari",
                            key: 'setting:18',
                        },
                        {
                            label: "Innovatsion g'oyalar ma'lumotlar bazasi",
                            key: 'setting:19',
                        },
                        {
                            label: "Davlat tomonidan qo'llab-quvvatlash chora-tadbirlari",
                            key: 'setting:20',
                        },
                        {
                            label: "Tadbirlar",
                            key: 'setting:21',
                        },
                        {
                            label: "Muvaffaqiyat tarixi",
                            key: 'setting:21',
                        },
                        {
                            label: "Dayjest va tahliliy ma'lumotnoma",
                            key: 'setting:23',
                        },
                        {
                            label: "Fotogalereya",
                            key: 'setting:24',
                        },
                        {
                            label: "Videogalereya",
                            key: 'setting:25',
                        },
                        {
                            label: "Ko'p beriladigan savollar",
                            key: 'setting:26',
                        },
                    ],
                },
            ],
        },
        {
            label: 'axborot resurslari',
            key: 'SubMenu3',
            children: [
                {
                    type: 'group',
                    label: 'Milliy ilmiy texnik axborot resurslari',
                    children: [
                        {
                            label: 'Loyihalar reestri',
                            key: 'setting:27',
                        },
                        {
                            label: 'Dissertatsiyalar reestri',
                            key: 'setting:28',
                        },
                        {
                            label: 'IMO byulletenlari',
                            key: 'setting:29',
                        },
                        {
                            label: "Tahliliy ma'lumotnomalar",
                            key: 'setting:30',
                        },
                    ],
                },
            ],
        },
        {
            label: 'Xalqaro hamkorlik',
            key: 'SubMenu4',
            children: [
                {
                    type: 'group',
                    label: 'Xalqaro hamkorlik',
                    children: [
                        {
                            label: 'Xalqaro tashkilotlar va moliya institutlari',
                            key: 'setting:31',
                        },
                        {
                            label: 'Xorijiy tashkilotlar bilan tuzilgan memorandumlar',
                            key: 'setting:32',
                        },
                    ],
                },
            ],
        },
        {
            label: 'Doktorantura',
            key: 'SubMenu5',
            children: [
                {
                    type: 'group',
                    label: 'Doktorantura',
                    children: [
                        {
                            label: 'Doktorantura haqida',
                            key: 'setting:33',
                        },
                        {
                            label: 'Normativ-huquqiy asos',
                            key: 'setting:34',
                        },
                        {
                            label: 'Qabul kvotalari',
                            key: 'setting:35',
                        },
                        {
                            label: "Yo'nalishlar bo’yicha ilmiy kengashlar",
                            key: 'setting:36',
                        },
                        {
                            label: 'Ixtisoslik shifrlari',
                            key: 'setting:37',
                        },
                        {
                            label: 'Ro`yxatga olish jarayoni',
                            key: 'setting:38',
                        },
                    ],
                },
            ],
        },
        {
            label: 'Grantlar',
            key: 'SubMenu6',
            children: [
                {
                    type: 'group',
                    label: 'Xalqaro grantlar dasturi',
                    children: [
                        {
                            label: 'Erasmus+',
                            key: 'setting:39',
                        },
                        {
                            label: 'Horizon Europe',
                            key: 'setting:40',
                        },
                    ],
                },
            ],
        },
        {
            label: 'Stajirovka',
            key: 'SubMenu7',
            children: [
                {
                    type: 'group',
                    label: 'Ilmiy stajirovka',
                    children: [
                        {
                            label: 'Ilmiy stajirovka haqida',
                            key: 'setting:41',
                        },
                        {
                            label: 'Normativ-huquqiy asos',
                            key: 'setting:42',
                        },
                        {
                            label: "Ilmiy stajirovka bo'yicha qo'llanma",
                            key: 'setting:43',
                        },
                        {
                            label: "Hujjatlar ro'yxati",
                            key: 'setting:44',
                        },
                        {
                            label: "Ilmiy-stajirovkada amaliyot o'tab kelganlar",
                            key: 'setting:45',
                        },
                        {
                            label: 'Hududiy salohiyat',
                            key: 'setting:46',
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <header className="sticky top-0 bg-white z-10 text-gray-600 shadow-md">
            <div className="container mx-auto flex p-4 !items-center justify-between">
                {/* Logo */}

                <Link
                    to="/"
                    className="flex  flex-col sm:flex-row items-center text-gray-900 mb-4 xl:mb-0"
                >
                    <img
                        className="w-10"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/2012px-Emblem_of_Uzbekistan.svg.png"
                        alt="Uzbekistan Emblem"
                    />

                    {/* Katta ekranlar uchun matn */}
                    <span className="ml-3 text-xl w-72 hidden sm:block">
                        O'zbekiston Respublikasi <br />
                        <span className="font-bold"> MILLIY ILMIY PORTALI </span>
                    </span>

                    {/* Kichik ekranlar uchun matn */}
                    <div className="ml-2 font-bold sm:hidden"> MILLIY ILMIY PORTALI </div>
                </Link>


                {/* Menu (Desktop) */}
                <div className=" mt-[-10px] w-[50%] hidden xl:block">
                    <Menu
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                        items={items}
                    />
                </div>

                {/* Search and Language Select */}
                <div className="flex items-center">
                    <Select defaultValue="uzbekistan" className="w-[100px] hidden xl:block">
                        <Option value="uzbekistan">UZB</Option>
                        <Option value="rusia">RUS</Option>
                        <Option value="english">ENG</Option>
                        <Option value="arabic">ARABIC</Option>
                    </Select>

                    {/* Search Icon */}
                    <IoSearch className="text-xl ml-3 hidden xl:block" />

                    {/* Login Button */}
                    <Button
                        type="link"
                        className="ml-3 hiddenxl:flex items-center bg-gray-100 py-1 px-3 rounded hover:bg-gray-200"
                    >
                        Войти <IoMdExit className="text-2xl ml-1" />
                    </Button>

                    {/* Hamburger Icon (Mobile) */}
                    <button className="text-2xl xl:hidden ml-3" onClick={toggleMenu}>
                        {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[500px]" : "max-h-0"
                    } bg-white xl:hidden`}
            >
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="vertical"
                    items={items}
                />
                <div className="p-4">
                    <Select defaultValue="uzbekistan" className="w-full">
                        <Option value="uzbekistan">UZB</Option>
                        <Option value="rusia">RUS</Option>
                        <Option value="english">ENG</Option>
                        <Option value="arabic">ARABIC</Option>
                    </Select>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
