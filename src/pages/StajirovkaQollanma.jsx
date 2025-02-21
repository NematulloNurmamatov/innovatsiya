import React from 'react'
import Sidebar from '../components/Layout/Sidebar'

export default function StajirovkaQollanma() {
    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10'>
                    <p className='font-black text-2xl'>Ilmiy stajirovkalar uchun qo'llanmalar</p>
                    <embed type="application/pdf" width="90%" className='mx-auto' height="1000" src="https://nsp.gov.uz/static/uploads/customupload_6cd7142d-8726-43c3-aeb3-c76b1b6a9f6d.pdf" />
                </div>
            </Sidebar>
        </div>
    )
}
