import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import { Input, Button } from 'antd';

const Disserts = () => {
    const [searchTerm, setSearchTerm] = useState({
        topic: '',
        fullName: '',
        specialtyCode: '',
        IKCode: '',
        institutionName: '',
        decisionNumber: '',
        leaderName: '',
        leaderDegree: '',
        organizationName: '',
    });

    const dissertations = [
        {
            topic: 'Funksiyalarni analitik davom ettirish va singulyar chegarali sohalarda maxsus integrallarning tadqiqi',
            fullName: 'Djumabaev Davlatbay Xalilovich',
            specialtyCode: '01.01.01',
            IKCode: '02-03/02.7.FMT.34.01',
            institutionName: 'Fizika-texnika instituti, I.A.Karimov nomidagi Toshkent davlat texnika universiteti',
            decisionNumber: '2017 yil 29 iyuldagi qaror',
            leaderName: 'Hudaybergenova Gulmira',
            leaderDegree: 'Fizika-matematika fanlari doktori',
            organizationName: "O'zbekiston Milliy universiteti",
        },
        {
            topic: 'Iqlimlash polyetilentereftalat alkogoliz mahsulotlari asosida yangi polimerlarni yaratish',
            fullName: 'Juraev Asror Baxtiyor o‘g‘li',
            specialtyCode: '05.17.06',
            IKCode: '02-03/12.5.21.17',
            institutionName: 'Kimyo texnologiyalari instituti',
            decisionNumber: '2019 yil 12 martdagi qaror',
            leaderName: 'Raximova Laylo',
            leaderDegree: 'Texnika fanlari doktori',
            organizationName: 'Texnika fanlari universiteti',
        },
    ];

    const [filteredResults, setFilteredResults] = useState(dissertations);

    const onSearch = () => {
        const results = dissertations.filter((d) =>
            Object.keys(searchTerm).every((key) =>
                searchTerm[key] === '' || d[key].toLowerCase().includes(searchTerm[key].toLowerCase())
            )
        );
        setFilteredResults(results);
    };

    const clearFilters = () => {
        setSearchTerm({
            topic: '',
            fullName: '',
            specialtyCode: '',
            IKCode: '',
            institutionName: '',
            decisionNumber: '',
            leaderName: '',
            leaderDegree: '',
            organizationName: '',
        });
        setFilteredResults(dissertations); // Tozalashdan so'ng barcha ma'lumotlarni qayta yuklash
    };

    return (
        <div className="fullContainer">
            <Sidebar>
                <div className="container pt-10">
                    <h1 className="!font-black text-2xl mb-5">Dissertatsiyalar reestri</h1>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <Input
                            placeholder="Mavzu"
                            value={searchTerm.topic}
                            onChange={(e) => setSearchTerm({ ...searchTerm, topic: e.target.value })}
                        />
                        <Input
                            placeholder="F.I.Sh."
                            value={searchTerm.fullName}
                            onChange={(e) => setSearchTerm({ ...searchTerm, fullName: e.target.value })}
                        />
                        <Input
                            placeholder="Ixtisoslik shifri"
                            value={searchTerm.specialtyCode}
                            onChange={(e) => setSearchTerm({ ...searchTerm, specialtyCode: e.target.value })}
                        />
                        <Input
                            placeholder="IK raqami"
                            value={searchTerm.IKCode}
                            onChange={(e) => setSearchTerm({ ...searchTerm, IKCode: e.target.value })}
                        />
                        <Input
                            placeholder="IK muassasa nomi"
                            value={searchTerm.institutionName}
                            onChange={(e) => setSearchTerm({ ...searchTerm, institutionName: e.target.value })}
                        />
                        <Input
                            placeholder="Qaror soni"
                            value={searchTerm.decisionNumber}
                            onChange={(e) => setSearchTerm({ ...searchTerm, decisionNumber: e.target.value })}
                        />
                        <Input
                            placeholder="Rahbar F.I.Sh."
                            value={searchTerm.leaderName}
                            onChange={(e) => setSearchTerm({ ...searchTerm, leaderName: e.target.value })}
                        />
                        <Input
                            placeholder="Ilmiy rahbar limiy darajasi"
                            value={searchTerm.leaderDegree}
                            onChange={(e) => setSearchTerm({ ...searchTerm, leaderDegree: e.target.value })}
                        />
                        <Input
                            placeholder="Ish bajarilayotgan tashkilot nomi"
                            value={searchTerm.organizationName}
                            onChange={(e) => setSearchTerm({ ...searchTerm, organizationName: e.target.value })}
                        />
                    </div>
                    <div className="flex gap-4 mb-5">
                        <Button type="primary" onClick={onSearch}>
                            Qidirish
                        </Button>
                        <Button onClick={clearFilters}>Tozalash</Button>
                    </div>
                    {filteredResults.length > 0 ? (
                        filteredResults.map((d, index) => (
                            <div
                                key={index}
                                className="border bg-white p-4 rounded-md border-gray-300 mb-4"
                            >
                                <p className="!font-medium text-lg mb-2">{d.topic}</p>
                                <p>
                                    <strong>F.I.Sh.: </strong>
                                    {d.fullName}
                                </p>
                                <p>
                                    <strong>Fan tarmog'i: </strong>
                                    {d.institutionName}
                                </p>
                                <p>
                                    <strong>IK raqami: </strong>
                                    {d.IKCode}
                                </p>
                                <p>
                                    <strong>Qaror soni: </strong>
                                    {d.decisionNumber}
                                </p>
                                <p>
                                    <strong>Rahbar: </strong>
                                    {d.leaderName} ({d.leaderDegree})
                                </p>
                                <p>
                                    <strong>Ish bajarilayotgan tashkilot: </strong>
                                    {d.organizationName}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">Qidiruv natijalariga mos hujjatlar topilmadi.</p>
                    )}
                </div>
            </Sidebar>
        </div>
    );
};

export default Disserts;
