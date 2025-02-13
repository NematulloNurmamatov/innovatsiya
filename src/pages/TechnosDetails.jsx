import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';

// Texnopark ma'lumotlari
const technoparks = [
    {
        id: 1,
        name: 'Yashnabod Texnopark',
        img: 'https://nsp.gov.uz/static/uploads/accelators_file2d07f436-aaad-4e7e-ba2a-a319f2797547.png',
        location: 'Toshkent shahar, Yashnabod tumani',
        phone: '+998712102020',
        email: 'info@texnopark.uz',
        website: 'http://www.yait.uz',
        description: 'Yashnabod innovatsion texnoparki 2017-yilda tashkil etilgan...'
    },
    {
        id: 2,
        name: 'Texnopark MCHJ',
        img: 'https://nsp.gov.uz/static/uploads/accelators_filed09a06f6-5706-4eea-b272-b3751b368bb9.png',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
    {
        id: 3,
        name: 'Texnopark MCHJ',
        img: 'https://nsp.gov.uz/static/uploads/accelators_filefbb4f85d-524f-4420-834e-3e7673e6c494.png',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
    {
        id: 4,
        name: 'Texnopark MCHJ',
        img: 'https://nsp.gov.uz/static/uploads/accelators_fileb5540ca4-2951-4c2a-8903-8dc6648ea7d7.jpg',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
    {
        id: 5,
        name: 'Texnopark MCHJ',
        img: 'https://nsp.gov.uz/static/uploads/applicationd2482749-9279-4f15-9163-b4f6d531225c.jpg',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
    {
        id: 6,
        name: 'Texnopark MCHJ',
        img: 'https://nsp.gov.uz/static/uploads/application2cd02997-d0fd-48de-90bb-e069b33b4aea.jpg',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
    {
        id: 7,
        name: 'Texnopark MCHJ',
        img: 'https://nsp.gov.uz/static/uploads/application3238a975-7dc9-4284-9a4d-65028e2d92de.png',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
    {
        id: 8,
        name: 'Texnopark MCHJ',
        img: 'https://nsp.gov.uz/static/uploads/accelators_file1232f8c5-94db-4497-b2fa-009b8b8c1323.png',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
    {
        id: 9,
        name: 'Texnopark MCHJ',
        img: 'https://nsp.gov.uz/static/uploads/accelators_file91441472-f055-493c-82a1-80f54a0b92e4.jpg',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
    {
        id: 10,
        name: 'Texnopark MCHJ',
        img: 'https://nsp.gov.uz/static/uploads/application9019df59-b204-4ac6-a88b-67e779e4704b.jpg',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
    {
        id: 11,
        name: 'Texnopark MCHJ',
        img: 'https://nsp.gov.uz/static/uploads/accelators_file577d8c34-4fc4-41b7-bf6f-26012fd867b1.jpg',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
];

export default function TechnosDetails() {
    const { id } = useParams(); // URL dan `id` olish
    const techno = technoparks.find(t => t.id === parseInt(id)); // ID bo‘yicha texnoparkni topish

    if (!techno) {
        return <div className="text-center text-red-500 text-xl">Texnopark topilmadi!</div>;
    }

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className="p-5 mt-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold">{techno.name}</h1>
                    <div className='flex items-center gap-5'>
                        <img className="w-64 h-64 object-cover my-4 rounded" src={techno.img} alt={techno.name} />
                        <div>
                            <p><strong>Manzil:</strong> {techno.location}</p>
                            <p><strong>Telefon:</strong> {techno.phone}</p>
                            <p><strong>Email:</strong> <a href={`mailto:${techno.email}`} className="text-blue-600">{techno.email}</a></p>
                            <p><strong>Web-sayt:</strong> <a href={techno.website} target="_blank" className="text-blue-600">{techno.website}</a></p>
                            <p className="mt-4">{techno.description}</p>
                        </div>
                    </div>
                    <p>Oʻzbekiston Respublikasi Prezidentining 2017 yil 5 iyundagi “Toshkent shahrining Yashnobod tumanida innovatsiya texnoparkini tashkil qilish toʻgʻrisida”gi 5068-sonli Farmoni bilan “Yashnobod” innovatsion texnoparki tashkil etilgan.</p>
                    <p> Hozirgi kunda “Yashnobod” innovatsion texnoparki rezidentlari jami 44 ta innovatsion loyihalari bilan quyidagi yoʻnalishlarda faoliyat yuritmoqda. Jumladan; kimyo texnologiyalari, biotexnologiyalar, farmatsevtika va tibbiyot biotexnologiyalari, oʻsimliklarni himoya qilish vositalari, qishloq hoʻjaligi, qurilish materiallari, axborot kommunikatsiya texnologiyalari va boshqa yoʻnalishlarda samarali ishlarni amalga oshirib kelishmoqda.</p>
                </div>
            </Sidebar>
        </div>
    );
}
