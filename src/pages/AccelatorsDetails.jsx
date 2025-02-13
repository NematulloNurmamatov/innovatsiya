import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';

// Texnopark ma'lumotlari
const technoparks = [
    {
        id: 1,
        name: 'C.A.T. Science Accelerator',
        img: 'https://cat-sa.uz/wp-content/themes/clean_by_saxap/images/logo.png',
        location: 'Toshkent shahar, Yashnabod tumani',
        phone: '+998712102020',
        email: 'info@texnopark.uz',
        website: 'http://www.yait.uz',
        description: 'Yashnabod innovatsion texnoparki 2017-yilda tashkil etilgan...'
    },
    {
        id: 2,
        name: 'Technovation Girls Uzbekistan',
        img: 'https://nsp.gov.uz/static/uploads/blutten2b7467b0-1b5f-456f-a758-d7baa3824de7.png',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
    {
        id: 3,
        name: 'Suv eritmasi innovatsion labaratoriya',
        img: 'https://nsp.gov.uz/static/uploads/bluttenc99f0eab-bd38-4540-ae47-f938d9f79af9.png',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
    {
        id: 4,
        name: 'Yashil biznes innovatsiyasi',
        img: 'https://nsp.gov.uz/static/uploads/blutten92328202-9be5-489b-b7b5-4009e905dcb5.png',
        location: 'Toshkent shahar',
        phone: '+998712345678',
        email: 'contact@texnoparkmchj.uz',
        website: 'http://www.texnoparkmchj.uz',
        description: 'Texnopark MCHJ innovatsion loyihalar uchun yaratilgan muhitga ega...'
    },
];

export default function AccelatorsDetails() {
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
                        <img className="w-64 h-24  my-4 rounded" src={techno.img} alt={techno.name} />
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
