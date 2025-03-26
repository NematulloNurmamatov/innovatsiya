import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import { Button, Input, Select } from 'antd';

const { Option } = Select;

const Projects = () => {
    // Hujjatlar ro'yxati
    const documents = [
        {
            title: "Разработка технологии получения импортозамещающих флотореагентов-вспенивателей на основе местного и вторичного сырья для применения в процессе флотации руд цветных и благородных металлов в производственных условиях АО “Алмалыкский ГМК”",
            organization: "Toshkent Davlat Texnika Universiteti qoshidagi Fan va taraqqiyot davlat unitar korxonasi",
            number: "А-БВ-2019-3",
            type: "Amaliy loyiha",
            duration: "4 yil",
            startDate: "31.03.2019",
            endDate: "30.03.2022",
            field: "Kimyoviy texnologiyalar va nanotexnologiya fanlari",
            leader: "Negmatova Komila Sayibjonovna",
        },
        {
            title: "Orolbo‘yi hududlaridagi tuz va qum ko‘chishini bartaraf etadigan, tuproq unumdorligini oshiradigan yangi avlod nanoelimlari va gidrogel' ishlab chiqish",
            organization: "Toshkent Davlat Texnika Universiteti qoshidagi Fan va taraqqiyot davlat unitar korxonasi",
            number: "А-БВ-2019-3",
            type: "Amaliy loyiha",
            duration: "4 yil",
            startDate: "31.03.2019",
            endDate: "30.03.2022",
            field: "Kimyoviy texnologiyalar va nanotexnologiya fanlari",
            leader: "Komilova Komila Sayibjonovna",
        },
        {
            title: "Технико-минералогическая оценка ценных компонентов (W, Mo, Fe, Re, Au, Ag, Cu) в отходах и полупродуктов НПО АГМК и разработка технологии их извлечения и получения товарной продукции-перрената аммония АР-О, аммония молибденовокислого и медного концентрата, содержащего благородные металлы",
            organization: "Toshkent Davlat Texnika Universiteti qoshidagi Fan va taraqqiyot davlat unitar korxonasi",
            number: "А-БВ-2019-3",
            type: "Amaliy loyiha",
            duration: "4 yil",
            startDate: "31.03.2019",
            endDate: "30.03.2022",
            field: "Kimyoviy texnologiyalar va nanotexnologiya fanlari",
            leader: "Negmatova Komila Sayibjonovna",
        },
        // Add more documents if needed
    ];

    const [searchTerm, setSearchTerm] = useState({
        title: "",
        organization: "",
        number: "",
        type: "",
        duration: "",
        startDate: "",
        endDate: "",
        field: "",
        leader: "",
    });

    // Qidiruvni boshlash
    const onSearch = () => {
        setSearchTerm(searchTerm);
    };

    // Filtrlangan hujjatlarni olish
    const filteredDocuments = documents.filter((doc) =>
    (doc.title.toLowerCase().includes(searchTerm.title.toLowerCase()) &&
        doc.organization.toLowerCase().includes(searchTerm.organization.toLowerCase()) &&
        doc.number.includes(searchTerm.number) &&
        (searchTerm.type ? doc.type === searchTerm.type : true) &&
        (searchTerm.duration ? doc.duration === searchTerm.duration : true) &&
        (searchTerm.startDate ? doc.startDate === searchTerm.startDate : true) &&
        (searchTerm.endDate ? doc.endDate === searchTerm.endDate : true) &&
        (searchTerm.field ? doc.field === searchTerm.field : true) &&
        (searchTerm.leader ? doc.leader.toLowerCase().includes(searchTerm.leader.toLowerCase()) : true))
    );

    const clearFilters = () => {
        setSearchTerm({
            title: "",
            organization: "",
            number: "",
            type: "",
            duration: "",
            startDate: "",
            endDate: "",
            field: "",
            leader: "",
        });
    };

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='pt-4 container '>
                    <h1 className='!font-black text-2xl'>Loyihalar reestri</h1>

                    <div className="grid grid-cols-3 max-[770px]:grid-cols-2 gap-4 mb-4">
                        {/* Hujjat nomi */}
                        <div>
                            <label className='text-[12px]  text-cyan-900'>Hujjat nomi:</label>
                            <Input
                                className='!mt-1'
                                placeholder="Hujjat nomi"
                                value={searchTerm.title}
                                onChange={(e) => setSearchTerm({ ...searchTerm, title: e.target.value })}
                            />
                        </div>

                        {/* Tashkilot */}
                        <div>
                            <label className='text-[12px]  text-cyan-900'>Tashkilot:</label>
                            <Input
                                className='!mt-1'
                                placeholder="Tashkilot"
                                value={searchTerm.organization}
                                onChange={(e) => setSearchTerm({ ...searchTerm, organization: e.target.value })}
                            />
                        </div>

                        {/* Hujjat raqami */}
                        <div>
                            <label className='text-[12px]  text-cyan-900'>Hujjat raqami:</label>
                            <Input
                                className='!mt-1'
                                placeholder="Hujjat raqami"
                                value={searchTerm.number}
                                onChange={(e) => setSearchTerm({ ...searchTerm, number: e.target.value })}
                            />
                        </div>

                        {/* Hujjat turi */}
                        <div>
                            <label className='text-[12px]  text-cyan-900'>Hujjat turi:</label>
                            <Select
                                className='!mt-1'
                                placeholder="Hujjat turi"
                                value={searchTerm.type}
                                onChange={(value) => setSearchTerm({ ...searchTerm, type: value })}
                                style={{ width: '100%' }}
                            >
                                <Option value="">Barchasi</Option>
                                <Option value="Amaliy loyiha">Amaliy loyiha</Option>
                                <Option value="Ilmiy loyiha">Ilmiy loyiha</Option>
                            </Select>
                        </div>

                        {/* Davomiyligi */}
                        <div>
                            <label className='text-[12px]  text-cyan-900'>Davomiyligi:</label>
                            <Input
                                className='!mt-1'
                                placeholder="Davomiyligi"
                                value={searchTerm.duration}
                                onChange={(e) => setSearchTerm({ ...searchTerm, duration: e.target.value })}
                            />
                        </div>

                        {/* Boshlanish sanasi */}
                        <div>
                            <label className='text-[12px]  text-cyan-900'>Boshlanish sanasi:</label>
                            <Input
                                className='!mt-1'
                                placeholder="Boshlanish sanasi"
                                value={searchTerm.startDate}
                                onChange={(e) => setSearchTerm({ ...searchTerm, startDate: e.target.value })}
                            />
                        </div>

                        {/* Tugash sanasi */}
                        <div>
                            <label className='text-[12px]  text-cyan-900'>Tugash sanasi:</label>
                            <Input
                                className='!mt-1'
                                placeholder="Tugash sanasi"
                                value={searchTerm.endDate}
                                onChange={(e) => setSearchTerm({ ...searchTerm, endDate: e.target.value })}
                            />
                        </div>

                        {/* Yo'nalishi */}
                        <div>
                            <label className='text-[12px]  text-cyan-900'>Yo'nalishi:</label>
                            <Input
                                className='!mt-1'
                                placeholder="Yo'nalishi"
                                value={searchTerm.field}
                                onChange={(e) => setSearchTerm({ ...searchTerm, field: e.target.value })}
                            />
                        </div>

                        {/* Rahbar */}
                        <div>
                            <label className='text-[12px]  text-cyan-900'>Rahbar:</label>
                            <Input
                                className='!mt-1'
                                placeholder="Rahbar"
                                value={searchTerm.leader}
                                onChange={(e) => setSearchTerm({ ...searchTerm, leader: e.target.value })}
                            />
                        </div>
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
                                <h2 className='font-bold text-lg mb-2'>{doc.title}</h2>
                                <p><b>Tashkilot:</b> {doc.organization}</p>
                                <p><b>Shifri:</b> {doc.number}</p>
                                <p><b>Turi:</b> {doc.type}</p>
                                <p><b>Davomiyligi:</b> {doc.duration}</p>
                                <p><b>Boshlanish sanasi:</b> {doc.startDate}</p>
                                <p><b>Tugash sanasi:</b> {doc.endDate}</p>
                                <p><b>Yo'nalishi:</b> {doc.field}</p>
                                <p><b>Rahbar:</b> {doc.leader}</p>
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

export default Projects;