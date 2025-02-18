import React, { useState } from "react";
import { Button, Menu, Select } from "antd";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // useNavigate import qilish

const { Option } = Select;

const Navbar = () => {
    // State to handle menu selection
    const [current, setCurrent] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    // useNavigate hookini chaqirish
    const navigate = useNavigate();

    // Handle menu item click
    const onClick = (e) => {
        console.log(e);
        navigate(e?.key)

    };

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: '/',
            // icon: <MailOutlined />,
        },
        {
            label: <Link to="/about">Portal haqida</Link>,
            key: 'about',
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
                            key: '/papers',
                        },
                        {
                            label: 'Davlat dasturlari',
                            key: '/applications',
                        },
                        {
                            label: 'Davlat boshqaruv organlari',
                            key: '/organizations',
                        },
                        {
                            label: "Oliy ta'lim muassasalari",
                            key: '/organization',
                        },
                        {
                            label: 'Ilmiy-tadqiqot muassasalari',
                            key: 'organizations2',
                        },
                        {
                            label: 'Hududiy salohiyat',
                            key: '/regions',
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
                            key: '/technos',
                        },
                        {
                            label: 'Startup akseleratorlar',
                            key: '/accelators',
                        },
                    ],
                },
            ],
        },
        // {
        //     label: 'Noshirlik faoliyati',
        //     key: 'SubMenu8',
        //     children: [
        //         {
        //             type: 'group',
        //             label: 'Noshirlik faoliyati',
        //             children: [
        //                 {
        //                     label: "Mahalliy ma'lumotlar bazasi",
        //                     key: '/projects',
        //                 },
        //                 {
        //                     label: "Xorijiy ma'lumotlar bazasi",
        //                     key: '/disserts',
        //                 },
        //                 {
        //                     label: "Yo'riqnoma va qo'llanmalar",
        //                     key: '/blutten',
        //                 },
        //                 {
        //                     label: "Ko'p so'raladigan savollar",
        //                     key: '/datas',
        //                 },
        //                 {
        //                     label: "Yangiliklar",
        //                     key: 'setting:13',
        //                 },
        //                 {
        //                     label: "E'lonlar",
        //                     key: 'setting:14',
        //                 },
        //                 {
        //                     label: "Loyihalar turlari",
        //                     key: 'setting:15',
        //                 },
        //                 {
        //                     label: "Konferensiyalar",
        //                     key: 'setting:16',
        //                 },
        //                 {
        //                     label: "Innovatsion rivojlanish vazirligi Hay'ati yig'ilishlari",
        //                     key: 'setting:17',
        //                 },
        //                 {
        //                     label: "Innovatsion rivojlanish vazirligi Ilmiy-texnik kengash yig'ilishlari",
        //                     key: 'setting:18',
        //                 },
        //                 {
        //                     label: "Innovatsion g'oyalar ma'lumotlar bazasi",
        //                     key: 'setting:19',
        //                 },
        //                 {
        //                     label: "Davlat tomonidan qo'llab-quvvatlash chora-tadbirlari",
        //                     key: 'setting:20',
        //                 },
        //                 {
        //                     label: "Tadbirlar",
        //                     key: 'setting:21',
        //                 },
        //                 {
        //                     label: "Muvaffaqiyat tarixi",
        //                     key: 'setting:21',
        //                 },
        //                 {
        //                     label: "Dayjest va tahliliy ma'lumotnoma",
        //                     key: 'setting:23',
        //                 },
        //                 {
        //                     label: "Fotogalereya",
        //                     key: 'setting:24',
        //                 },
        //                 {
        //                     label: "Videogalereya",
        //                     key: 'setting:25',
        //                 },
        //                 {
        //                     label: "Ko'p beriladigan savollar",
        //                     key: 'setting:26',
        //                 },
        //             ],
        //         },
        //     ],
        // },
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
                            key: '/projects',
                        },
                        {
                            label: 'Dissertatsiyalar reestri',
                            key: '/disserts',
                        },
                        {
                            label: 'IMO byulletenlari',
                            key: '/blutten',
                        },
                        {
                            label: "Tahliliy ma'lumotnomalar",
                        key: '/datas',
                            key: '/datas',
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
                            key: '/outinst',
                        },
                        {
                            label: 'Xorijiy tashkilotlar bilan tuzilgan memorandumlar',
                            key: '/memoriandums',
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
                            key: '/doktorantura',
                        },
                        {
                            label: 'Normativ-huquqiy asos',
                            key: '/rules',
                        },
                        {
                            label: 'Qabul kvotalari',
                            key: '/quotes',
                        },
                        {
                            label: "Yo'nalishlar bo’yicha ilmiy kengashlar",
                            key: '/directions',
                        },
                        {
                            label: 'Ixtisoslik shifrlari',
                            key: '/codes',
                        },
                        {
                            label: 'Ro`yxatga olish jarayoni',
                            key: '/register',
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
                            key: '/erasmus',
                        },
                        {
                            label: 'Horizon Europe',
                            key: '/horizon',
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
                            key: '/ilmiy-stajirovka',
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
            <div className="container mx-auto flex p-2 !items-center justify-between">
                {/* Logo */}

                <Link
                    to="/"
                    className="flex items-center sm:flex-row text-gray-900 xl:mb-0"
                >
                    <img
                        className="w-10 m-2"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/2012px-Emblem_of_Uzbekistan.svg.png"
                        alt="Uzbekistan Emblem"
                    />

                    {/* Katta ekranlar uchun matn */}
                    <span className="ml-3 text-xl w-72 hidden sm:block">
                        O'zbekiston Respublikasi <br />
                        <span className="font-bold"> MILLIY ILMIY PORTALI </span>
                    </span>

                    {/* Kichik ekranlar uchun matn */}
                    <div className="ml-2 font-bold sm:hidden mb-[-20px]"> <p className="text-md"> MILLIY ILMIY <br /> PORTALI</p> </div>
                </Link>


                {/* Menu (Desktop) */}
                <div className=" w-[50%] hidden xl:block">
                    <Menu
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                        items={items}
                    />
                </div>

                {/* Search and Language Select */}
                <div className="flex  items-center ">
                    <div className=" hidden md:block">
                        <Select defaultValue="uzbekistan" className="w-[100px] hidden xl:block">
                            <Option value="uzbekistan">UZB</Option>
                            <Option value="rusia">RUS</Option>
                            <Option value="english">ENG</Option>
                            <Option value="arabic">ARABIC</Option>
                        </Select>
                    </div>


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
                <div className="!w-[40%]">
                    <Menu
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="vertical"
                        items={items}
                        className=""
                    />
                </div>
                <div className=" w-[40%] p-4">
                    <Select defaultValue="uzbekistan" className="w-full hidden">
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
