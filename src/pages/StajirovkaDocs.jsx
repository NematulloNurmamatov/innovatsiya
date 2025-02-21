import React from 'react'
import Sidebar from '../components/Layout/Sidebar'

export default function StajirovkaDocs() {
    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10'>
                    <p className='text-2xl font-black'>Qisqa muddatli ilmiy stajirovkalarga yuborish uchun taqdim etilishi zarur bo‘lgan ma'lumot hujjatlar</p>
                    <embed src="https://nsp.gov.uz/static/uploads/customupload_ea75e6ff-6359-471f-a3f4-889552e9c7b3.pdf" type="application/pdf" width="100%" height="700" />
                </div>
            </Sidebar>
        </div>
    )
}
