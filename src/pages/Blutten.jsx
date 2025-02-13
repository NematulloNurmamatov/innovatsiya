import React from 'react';
import { Button, Pagination } from 'antd';
import Sidebar from '../components/Layout/Sidebar';

export default function Blutten() {
    const handleDownload = () => {
        // Logic for downloading the file
    };

    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10'>
                    <p className='font-black text-2xl'>Intellektual mulk obekti byulletenlari</p>
                    <div className='grid grid-cols-4 gap-5 mb-5'>
                        {
                            [...Array(12)].map((_, index) => (
                                <div key={index} className="blutten-item border border-gray-400 rounded-md">
                                    <img className='w-full mb-4 rounded-t-md' src="https://nsp.gov.uz/static/uploads/blutten_imgf04aeda6-d6c9-4f3f-83ac-7de6b7e2ebb2.png" alt="Blutten" />
                                    <p className='p-1'>2010</p>
                                    <p className='p-1'>2009 O'zbekiston Respublikasi Davlat Patent Idorasining 5(97) sonli Rasmiy Axborotnomasi</p>
                                    <Button  className='w-full' onClick={handleDownload} >Yuklab olish</Button>
                                </div>
                            ))
                        }
                    </div>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </Sidebar>
        </div>
    );
}
