import React from 'react';
import Sidebar from '../components/Layout/Sidebar';

const DataItem = ({ image, title }) => {
    return (
        <div className='border rounded-md shadow p-3'>
            <img src={image} alt={title} className='w-full object-cover rounded mb-2' />
            <p>{title}</p>
        </div>
    );
};

const internationalData = [
    {
        image: 'https://nsp.gov.uz/static/uploads/an_data_img499896c0-322f-41f3-9c3a-69e152885578.png',
        title: "O'zbekiston ilmiy tadqiqotlar xaritasi"
    },
    {
        image: 'https://nsp.gov.uz/static/uploads/an_data_img499896c0-322f-41f3-9c3a-69e152885578.png',
        title: 'Mapping research and innovation in Uzbekistan'
    },
    {
        image: 'https://nsp.gov.uz/static/uploads/an_data_img499896c0-322f-41f3-9c3a-69e152885578.png',
        title: 'Global innovation index 2023'
    },
    {
        image: 'https://nsp.gov.uz/static/uploads/an_data_img9c3f0d57-bea9-4fa4-9041-a12ce68efa3f.png',
        title: 'Global innovation index 2023'
    },
    {
        image: 'https://nsp.gov.uz/static/uploads/an_data_img4cc997cd-52cf-4fe9-96e0-40eec9915b4d.png',
        title: 'Global innovation index 2023'
    },
];

const localData = [
    {
        image: 'https://nsp.gov.uz/static/uploads/an_data_img39cc584d-a8bb-41e3-8a18-858ed1db4891.png',
        title: 'Science, Technology and Innovation of Uzbekistan'
    },
    {
        image: 'https://nsp.gov.uz/static/uploads/an_data_img084ae866-5d9b-4301-93e9-3322cd94683e.png',
        title: 'Tijoratlashtirish forumi'
    },
    {
        image: 'https://nsp.gov.uz/static/uploads/an_data_imgb9abac0d-7a3a-4668-b614-b8cab4c1ca63.png',
        title: "O'zbekiston Respublikasi innovatsion rivojlanish"
    },
    {
        image: 'https://nsp.gov.uz/static/uploads/an_data_img42eea463-9304-4588-bc1d-038b42459e23.png',
        title: 'Tijoratlashtirish forumi'
    },
    {
        image: 'https://nsp.gov.uz/static/uploads/an_data_img20f08e93-57b0-4808-90a5-5557c3aa4f33.png',
        title: 'Mapping research and innovation in Uzbekistan'
    }
];

export default function Datas() {
    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10'>
                    <h1 className='text-2xl !font-black'>Tahliliy ma'lumotnomalar</h1>

                    {/* Xalqaro tahliliy ma'lumotnomalar */}
                    <section className='mt-8'>
                        <h2 className='text-xl font-semibold'>Xalqaro tahliliy ma'lumotnomalar</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4'>
                            {
                                internationalData.map((item, index) => (
                                    <DataItem key={index} image={item.image} title={item.title} />
                                ))
                            }
                        </div>
                    </section>

                    {/* Mahalliy tahliliy ma'lumotnomalar */}
                    <section className='mt-8'>
                        <h2 className='text-xl font-semibold'>Mahalliy tahliliy ma'lumotnomalar</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4'>
                            {localData.map((item, index) => (
                                <DataItem key={index} image={item.image} title={item.title} />
                            ))}
                        </div>
                    </section>
                </div>
            </Sidebar>
        </div>
    );
}
