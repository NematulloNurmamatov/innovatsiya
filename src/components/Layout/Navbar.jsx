import React, { useState } from "react";
import { Button, Menu, Select } from "antd";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // useNavigate import qilish
import { GiHamburgerMenu } from "react-icons/gi";
import menuItems, { menuItems2 } from "../data/menuItems";
// import menuItems from "../data/menuItems";

const { Option } = Select;

const Navbar = () => {
    // State to handle menu selection
    const [current, setCurrent] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    // useNavigate hookini chaqirish
    const navigate = useNavigate();

    // Handle menu item click
    // Handle menu item click (Desktop)
    const onClickDesktop = (e) => {
        navigate(e?.key);
        setCurrent(e?.key); // Aktiv menu itemni yangilash
    };

    // Handle menu item click (Mobile)
    const onClickMobile = (e) => {
        navigate(e?.key);
        setCurrent(e?.key);
        setMenuOpen(false); // Faqat mobil menyuni yopish
    };


    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <header className="sticky top-0 bg-white z-50 text-gray-600 shadow-md">
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
                    <div className="ml-2 font-bold sm:hidden mb-[-20px]"> <p className="text-md">
                        MILLIY ILMIY <br /> PORTALI</p>
                    </div>
                </Link>


                {/* Menu (Desktop) */}
                <div className=" w-[50%] hidden xl:block">

                    <Menu onClick={onClickDesktop} selectedKeys={[current]} mode="horizontal" items={menuItems} />

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

                    {/* Hamburger Icon (Mobile) */}
                    <button className="text-2xl !ml-3 cursor-pointer " onClick={toggleMenu}>
                        {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[500px]" : "max-h-0"
                    } bg-white`}
            >
                <div className="!w-[100%] columns-5 gap-4">
                    <Menu onClick={onClickMobile} selectedKeys={[current]} mode="vertical" items={menuItems2} />
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
