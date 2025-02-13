import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import { PhoneFilled } from '@ant-design/icons';

const university = {
    title: "A.I.Gertsen nomidagi Rossiya davlat pedagogika universiteti' Federal davlat byudjeti oliy ta'lim muassasasining Toshkent filiali",
    name: "A.I.Gertsen nomidagi Rossiya davlat pedagogika universiteti",
    location: "Toshkent shahar",
    type: "Universitet",
    img: "https://ias.gov.uz//static/uploads/6a251c91-9d77-4f04-9371-20433bb2060e.jpg",
    address: "Yakkasaroy tumani, Bobur ko‘chasi, 55-uy",
    website: "https://www.herzen.uz/",
    established: "2020-yil",
    description: "Kadrlarga bo‘lgan ehtiyojni inobatga olib xalqaro ta’lim standartlariga mos yuqori malakali mutaxassislarni tayyorlash. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi quibusdam. Itaque iure explicabo veritatis consequatur enim. Nam ipsa blanditiis quisquam labore facere facilis reprehenderit alias quae quos obcaecati! Architecto perferendis modi laborum exercitationem suscipit quia odio deleniti placeat obcaecati, iure possimus dolor quas laudantium voluptates fugiat nemo nostrum animi? Facere vero aliquam asperiores nostrum, ipsa impedit fugiat ex officia ipsam, nulla molestiae. Consectetur quae et fugit labore illo libero sint unde aliquam ea, deleniti maiores alias nemo quidem aperiam. Asperiores enim eum saepe voluptatum ipsam, repellendus facilis? Iusto veniam sit voluptatem quae iste et eum molestias consectetur, distinctio fugiat delectus cum explicabo alias quisquam labore libero, ullam quam soluta nisi ipsa! Dolorum perferendis quo adipisci, voluptatum sequi qui sit. Voluptas culpa nisi similique earum provident modi ipsam nulla. Est, laborum natus! In repellendus quisquam, explicabo esse iure necessitatibus cupiditate recusandae doloremque beatae eveniet! Cum, aliquid, in quibusdam rerum eligendi inventore quod at blanditiis eveniet pariatur dolor earum, minima et veritatis quis vitae aspernatur quo obcaecati omnis deserunt. Fugiat, alias! Beatae et, qui eveniet, inventore esse natus fuga veniam illo magni ducimus quidem ad quam corrupti suscipit amet error laborum iste! Saepe odio laborum tempora. Magni iure amet assumenda atque.",
    rahbar: "https://ias.gov.uz//static/uploads/fd7d68fd-e1e0-497d-bb77-8084662589a6.webp",
    contingent: {
        faculties: 0,
        students: 0,
        bachelors: 0,
        masters: 0,
        professors: 0,
        employees: 0
    }
};

const OrganizationDetails = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('umumiy');

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='pt-4 col-span-9'>
                        <h1 className='!font-bold text-3xl mb-4'>
                            {university.name}

                        </h1>

                        {/* Navigatsiya tugmalari */}
                        <div className="flex space-x-4 border-b border-gray-500 pb-2">
                            <button className={`px-4 py-2 ${activeTab === 'umumiy' ? 'border-b-2 border-blue-500 font-bold' : ''}`} onClick={() => setActiveTab('umumiy')}>Umumiy ma'lumot</button>
                            <button className={`px-4 py-2 ${activeTab === 'tashkilot' ? 'border-b-2 border-blue-500 font-bold' : ''}`} onClick={() => setActiveTab('tashkilot')}>Tashkilot haqida</button>
                            <button className={`px-4 py-2 ${activeTab === 'rahbar' ? 'border-b-2 border-blue-500 font-bold' : ''}`} onClick={() => setActiveTab('rahbar')}>Rahbariyat</button>
                            <button className={`px-4 py-2 ${activeTab === 'kontingent' ? 'border-b-2 border-blue-500 font-bold' : ''}`} onClick={() => setActiveTab('kontingent')}>Kontingent</button>
                        </div>

                        {/* Umumiy ma'lumot */}
                        {activeTab === 'umumiy' && (
                            <div className="mt-4 ">
                                <p className='font-bold text-xl'>{university.title}</p>
                                <div className='flex gap-5 items-center'>
                                    <img className='w-[300px]' src={university.img} alt="" />
                                    <div>

                                        <h2 className="text-xl font-semibold">Umumiy ma'lumot</h2>
                                        <p>Hudud: {university.location}</p>
                                        <p>Tashkilot turi: {university.type}</p>
                                        <p>Manzil: {university.address}</p>
                                        <p>Veb-sayt: <a href={university.website} className="text-blue-500">{university.website}</a></p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tashkilot haqida */}
                        {activeTab === 'tashkilot' && (
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold">Tashkilot haqida</h2>
                                <p>Tashkil topgan sana: {university.established}</p>
                                <p>{university.description}</p>
                            </div>
                        )}


                        {activeTab === 'rahbar' && (
                            <div className="mt-4">
                                <div className='border border-gray-500 rounded p-2 flex gap-5'>
                                    <img className='w-[250px] rounded' src={university.rahbar} alt="" />
                                    <div className='pt-4'>
                                        <p className='font-bold text-[18px]'>Popov Vasilii Aleksandrovich</p>
                                        <p>Direktor</p>
                                        <PhoneFilled />
                                    </div>
                                </div>
                            </div>
                        )}



                        {/* Kontingent */}
                        {activeTab === 'kontingent' && (
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold">Kontingent</h2>
                                <table className="w-full border-collapse border border-gray-300 mt-2">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="border border-gray-300 px-4 py-2">Kategoriya</th>
                                            <th className="border border-gray-300 px-4 py-2">Soni</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Fakultetlar</td>
                                            <td className="border border-gray-300 px-4 py-2">{university.contingent.faculties}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Talabalar</td>
                                            <td className="border border-gray-300 px-4 py-2">{university.contingent.students}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Bakalavrlar</td>
                                            <td className="border border-gray-300 px-4 py-2">{university.contingent.bachelors}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Magistratura</td>
                                            <td className="border border-gray-300 px-4 py-2">{university.contingent.masters}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default OrganizationDetails;
