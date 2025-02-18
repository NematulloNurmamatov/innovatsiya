import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';

const banks = [
    {
        id: 1,
        name: 'Jahon banki',
        logo: 'https://nsp.gov.uz/static/uploads/outinst_2987af30-32c2-4a0d-96a5-5dfa086fc99f.jpg',
        address: '1225 Connecticut Ave, Washington, DC, USA',
        category: 'Xalqaro moliya instituti',
        postalCode: '21577',
        phone: '+1 202 458 1876',
        fax: '',
        email: 'info@worldbank.org',
        website: 'www.worldbank.org',
        description: 'Islom taraqqiyot banki(ITB) 1975 yilda IHT mamlakatlari moliya vazirlari yig‘ilishining qaroriga ko‘ra tashkil etilgan. ITBning shtab-kvartirasi Saudiya Arabistonining Jidda shahrida joylashgan. ITBning Hududiy ofislari 1994 yili Rabot(Marokash)da, shu yili Kuala-Lumpur(Malayziya)da, 1997 yili Olma-Ota(Qozog‘iston)da va 2008 yili Dakar(Senegal)da ochildi.Bank shuningdek 12 ta a’zo mamlakatda mahalliy vakolatxonalarga ega: bular Afg‘oniston, Ozarbayjon, Bangladesh, Gvineya, Indoneziya, Eron, Nigeriya, Pokiston, Serra-Leona, Sudan, O‘zbekiston va Yamandir.',
    },
    {
        id: 2,
        name: 'Islom taraqqiyot banki',
        logo: 'https://nsp.gov.uz/static/uploads/outinst_e313cc1f-3330-4d0f-89ba-db465b209b1a.png',
        address: 'King Khalid St. Al Nuzlah Al Yamania Dist. Unit No. 1',
        category: 'Xalqaro moliya instituti',
        postalCode: '21577',
        phone: '+966 12 6361400',
        fax: '+966 126 366 871',
        email: 'info@isdb.org',
        website: 'www.isdb.org',
        description: 'Islom taraqqiyot banki(ITB) 1975 yilda IHT mamlakatlari moliya vazirlari yig‘ilishining qaroriga ko‘ra tashkil etilgan. ITBning shtab-kvartirasi Saudiya Arabistonining Jidda shahrida joylashgan. ITBning Hududiy ofislari 1994 yili Rabot(Marokash)da, shu yili Kuala-Lumpur(Malayziya)da, 1997 yili Olma-Ota(Qozog‘iston)da va 2008 yili Dakar(Senegal)da ochildi.Bank shuningdek 12 ta a’zo mamlakatda mahalliy vakolatxonalarga ega: bular Afg‘oniston, Ozarbayjon, Bangladesh, Gvineya, Indoneziya, Eron, Nigeriya, Pokiston, Serra-Leona, Sudan, O‘zbekiston va Yamandir.',
    },
    {
        id: 3,
        name: 'Islom taraqqiyot banki',
        logo: 'https://nsp.gov.uz/static/uploads/outinst_63f09a1a-d776-4a72-98c8-9440a7cbf5aa.jpg',
        address: 'King Khalid St. Al Nuzlah Al Yamania Dist. Unit No. 1',
        category: 'Xalqaro moliya instituti',
        postalCode: '21577',
        phone: '+966 12 6361400',
        fax: '+966 126 366 871',
        email: 'info@isdb.org',
        website: 'www.isdb.org',
        description: 'Islom taraqqiyot banki(ITB) 1975 yilda IHT mamlakatlari moliya vazirlari yig‘ilishining qaroriga ko‘ra tashkil etilgan. ITBning shtab-kvartirasi Saudiya Arabistonining Jidda shahrida joylashgan. ITBning Hududiy ofislari 1994 yili Rabot(Marokash)da, shu yili Kuala-Lumpur(Malayziya)da, 1997 yili Olma-Ota(Qozog‘iston)da va 2008 yili Dakar(Senegal)da ochildi.Bank shuningdek 12 ta a’zo mamlakatda mahalliy vakolatxonalarga ega: bular Afg‘oniston, Ozarbayjon, Bangladesh, Gvineya, Indoneziya, Eron, Nigeriya, Pokiston, Serra-Leona, Sudan, O‘zbekiston va Yamandir....',
    },
    {
        id: 4,
        name: 'Islom taraqqiyot banki',
        logo: 'https://nsp.gov.uz/static/uploads/outinst_1d9bf3ea-7342-4438-bbc6-aec82f53ceb8.jpg',
        address: 'King Khalid St. Al Nuzlah Al Yamania Dist. Unit No. 1',
        category: 'Xalqaro moliya instituti',
        postalCode: '21577',
        phone: '+966 12 6361400',
        fax: '+966 126 366 871',
        email: 'info@isdb.org',
        website: 'www.isdb.org',
        description: 'Islom taraqqiyot banki(ITB) 1975 yilda IHT mamlakatlari moliya vazirlari yig‘ilishining qaroriga ko‘ra tashkil etilgan. ITBning shtab-kvartirasi Saudiya Arabistonining Jidda shahrida joylashgan. ITBning Hududiy ofislari 1994 yili Rabot(Marokash)da, shu yili Kuala-Lumpur(Malayziya)da, 1997 yili Olma-Ota(Qozog‘iston)da va 2008 yili Dakar(Senegal)da ochildi.Bank shuningdek 12 ta a’zo mamlakatda mahalliy vakolatxonalarga ega: bular Afg‘oniston, Ozarbayjon, Bangladesh, Gvineya, Indoneziya, Eron, Nigeriya, Pokiston, Serra-Leona, Sudan, O‘zbekiston va Yamandir.',
    },
    {
        id: 5,
        name: 'Islom taraqqiyot banki',
        logo: 'https://nsp.gov.uz/static/uploads/outinst_1268aa91-ffb1-4f52-9f1b-f2456753f689.jpg',
        address: 'King Khalid St. Al Nuzlah Al Yamania Dist. Unit No. 1',
        category: 'Xalqaro moliya instituti',
        postalCode: '21577',
        phone: '+966 12 6361400',
        fax: '+966 126 366 871',
        email: 'info@isdb.org',
        website: 'www.isdb.org',
        description: 'Islom taraqqiyot banki(ITB) 1975 yilda IHT mamlakatlari moliya vazirlari yig‘ilishining qaroriga ko‘ra tashkil etilgan. ITBning shtab-kvartirasi Saudiya Arabistonining Jidda shahrida joylashgan. ITBning Hududiy ofislari 1994 yili Rabot(Marokash)da, shu yili Kuala-Lumpur(Malayziya)da, 1997 yili Olma-Ota(Qozog‘iston)da va 2008 yili Dakar(Senegal)da ochildi.Bank shuningdek 12 ta a’zo mamlakatda mahalliy vakolatxonalarga ega: bular Afg‘oniston, Ozarbayjon, Bangladesh, Gvineya, Indoneziya, Eron, Nigeriya, Pokiston, Serra-Leona, Sudan, O‘zbekiston va Yamandir.',
    },
    {
        id: 6,
        name: 'Islom taraqqiyot banki',
        logo: 'https://nsp.gov.uz/static/uploads/outinst_edfc469d-9737-4524-bd1c-05b233a8d093.jpg',
        address: 'King Khalid St. Al Nuzlah Al Yamania Dist. Unit No. 1',
        category: 'Xalqaro moliya instituti',
        postalCode: '21577',
        phone: '+966 12 6361400',
        fax: '+966 126 366 871',
        email: 'info@isdb.org',
        website: 'www.isdb.org',
        description: 'Islom taraqqiyot banki(ITB) 1975 yilda IHT mamlakatlari moliya vazirlari yig‘ilishining qaroriga ko‘ra tashkil etilgan. ITBning shtab-kvartirasi Saudiya Arabistonining Jidda shahrida joylashgan. ITBning Hududiy ofislari 1994 yili Rabot(Marokash)da, shu yili Kuala-Lumpur(Malayziya)da, 1997 yili Olma-Ota(Qozog‘iston)da va 2008 yili Dakar(Senegal)da ochildi.Bank shuningdek 12 ta a’zo mamlakatda mahalliy vakolatxonalarga ega: bular Afg‘oniston, Ozarbayjon, Bangladesh, Gvineya, Indoneziya, Eron, Nigeriya, Pokiston, Serra-Leona, Sudan, O‘zbekiston va Yamandir.',
    }
];

export default function OutinstDetails() {
    const { id } = useParams();
    const bank = banks.find(b => b.id === parseInt(id));

    if (!bank) {
        return <div className="p-6 text-center text-red-500">Bank topilmadi!</div>;
    }

    return (
        <div className='fullContainer '>
            <Sidebar>
                <div className='py-10'>
                    <div className='max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg'>
                        <h1 className='text-3xl font-bold mb-4'>{bank.name}</h1>
                        <div className='flex items-center mb-4 gap-5 max-[1000px]:flex-col mt-10'>
                            <img src={bank.logo} alt={`${bank.name} Logo`} className=' min-w-44 w-[30%] mr-4' />
                            <div>
                                <p><strong>Manzil:</strong> {bank.address}</p>
                                <p><strong>Kategoriya:</strong> {bank.category}</p>
                                <p><strong>Pochta indeksi:</strong> {bank.postalCode}</p>
                                <p><strong>Telefon:</strong> {bank.phone}</p>
                                {bank.fax && <p><strong>Fax:</strong> {bank.fax}</p>}
                                <p><strong>Email:</strong> <a href={`mailto:${bank.email}`} className='text-blue-500 hover:underline'>{bank.email}</a></p>
                                <p><strong>Veb-sayt:</strong> <a href={`https://${bank.website}`} target='_blank' className='text-blue-500 hover:underline'>{bank.website}</a></p>
                            </div>
                        </div>
                        <p className='mb-4'>{bank.description}</p>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
