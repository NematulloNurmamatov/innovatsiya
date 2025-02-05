import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import { ShareAltOutlined, SnippetsOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import { Input, Button, Select } from 'antd';

const { Search } = Input;
const { Option } = Select;

const Hujjatlar = () => {
    // Hujjatlar ro'yxati
    const documents = [
        {
            title: "O'zbekiston Respublikasi Vazirlar mahkamasining Ilm-fan va ta’lim sohasidagi davlat tashkilotlarida ilmiy, ilmiy-pedagogik va mehnat faoliyati bilan shug‘ullanuvchi ilmiy darajaga ega xodimlarga qo‘shimcha haq to‘lash tartibi to‘g‘risida",
            number: "1030",
            type: "Vazirlar Mahkamasi",
            year: "2019",
        },
        {
            title: "O‘zbekiston Respublikasi oliy ta’lim tizimini 2030-yilgacha rivojlantirish konsepsiyasini tasdiqlash to‘g‘risida",
            number: "1123",
            type: "Vazirlar Mahkamasi",
            year: "2021",
        },
        {
            title: "Toshkent to‘qimachilik va yengil sanoat instituti huzurida Koreya Respublikasi hukumatining beg‘araz ko‘magini jalb etgan holda o‘quv-amaliy to‘qimachilik texnoparkini tashkil etish chora-tadbirlari to‘g‘risida",
            number: "2345",
            type: "Texnopark",
            year: "2022",
        },
        {
            title: "O‘rta maxsus, kasb-hunar ta’limi muassasalari faoliyatini yanada takomillashtirish chora-tadbirlari to‘g‘risida",
            number: "7854",
            type: "Ta'lim",
            year: "2023",
        }
    ];

    const [searchTerm, setSearchTerm] = useState({
        title: "",
        number: "",
        type: "",
        year: "",
    });

    // Qidiruvni boshlash
    const onSearch = () => {
        setSearchTerm(searchTerm);
    };

    // Filtrlangan hujjatlarni olish
    const filteredDocuments = documents.filter((doc) =>
    (doc.title.toLowerCase().includes(searchTerm.title.toLowerCase()) &&
        doc.number.includes(searchTerm.number) &&
        (searchTerm.type ? doc.type === searchTerm.type : true) &&
        (searchTerm.year ? doc.year === searchTerm.year : true))
    );

    // Tozalash funksiyasi
    const clearFilters = () => {
        setSearchTerm({
            title: "",
            number: "",
            type: "",
            year: "",
        });
    };

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='pt-12 container'>
                    <h1 className='!font-black text-2xl'>Normativ huquqiy hujjatlar</h1>

                    <div className="flex gap-4 mb-4">
                        {/* Hujjat nomi */}
                        <Input
                            placeholder="Hujjat nomi"
                            value={searchTerm.title}
                            // size='large'
                            onChange={(e) => setSearchTerm({ ...searchTerm, title: e.target.value })}
                        />
                        {/* Hujjat raqami */}
                        <Input
                            placeholder="Hujjat raqami"
                            value={searchTerm.number}
                            // size='large'
                            onChange={(e) => setSearchTerm({ ...searchTerm, number: e.target.value })}
                        />
                        {/* Hujjat turi */}
                        <Select
                            placeholder="Hujjat turi"
                            value={searchTerm.type}
                            size='large'
                            onChange={(value) => setSearchTerm({ ...searchTerm, type: value })}
                            style={{ width: 200 }}
                        >
                            <Option value="">Barchasi</Option>
                            <Option value="Vazirlar Mahkamasi">Vazirlar Mahkamasi</Option>
                            <Option value="Texnopark">Texnopark</Option>
                            <Option value="Ta'lim">Ta'lim</Option>
                        </Select>
                        {/* Hujjat yili */}
                        <Select
                            placeholder="Hujjat yili"
                            value={searchTerm.year}
                            size='large'
                            onChange={(value) => setSearchTerm({ ...searchTerm, year: value })}
                            style={{ width: 120 }}
                        >
                            <Option value="">Barchasi</Option>
                            <Option value="2019">2019</Option>
                            <Option value="2021">2021</Option>
                            <Option value="2022">2022</Option>
                            <Option value="2023">2023</Option>
                        </Select>
                    </div>

                    {/* Qidiruv va Tozalash tugmasi */}
                    <div className="flex gap-4 mb-4">
                        <Button type="primary" size='large' onClick={onSearch}>Qidirish</Button>
                        <Button size='large' onClick={clearFilters}>Tozalash</Button>
                    </div>

                    {/* Filtrlangan hujjatlarni ko'rsatish */}
                    {filteredDocuments.length > 0 ? (
                        filteredDocuments.map((doc, index) => (
                            <div className='border bg-white p-4 rounded-md border-gray-300 mt-5' key={index}>
                                <div className='flex mt-4 gap-4'>
                                    <div>
                                        <SnippetsOutlined className='text-3xl !text-amber-300' />
                                    </div>
                                    <div>
                                        <p className='!font-medium text-[18px]'>{doc.title}</p>
                                        <p>{doc.number}, {doc.type}, {doc.year}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <VerticalAlignBottomOutlined className="text-lg border-2 border-[#005464] !text-[#005464] p-1 rounded-md hover:bg-[#005464] hover:!text-white transition duration-200 cursor-pointer" />
                                    <ShareAltOutlined className="text-lg border-2 border-[#005464] !text-[#005464] p-1 rounded-md hover:bg-[#005464] hover:!text-white transition duration-200 cursor-pointer ml-3" />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="mt-5">Qidiruv natijalariga mos hujjatlar topilmadi.</p>
                    )}
                </div>
            </Sidebar>
        </div>
    );
};

export default Hujjatlar;
