import React from 'react'
import Sidebar from '../components/Layout/Sidebar'

export default function Faq2() {
    return (
        <div className='fullContainer'>
            <Sidebar>
                <div className='py-10'>
                    <p className='text-2xl font-black'>Ko'p so'raladigan savollar</p>
                    <p><strong>Milliy portal nima bilan shug`ullanadi?</strong> <br /> <br />
                    O‘zbekiston Respublikasi Milliy ilmiy portali – bu ilm-fan sohasida respublikamizda amalga oshirilayotgan keng qo‘lamli ishlar borasida umumiy ma'lumotlar  bazasini faoliyatini yulga qo'yish, statistik ma'lumotlarni yig‘ish, foydalanuvchilar uchun to‘liq ilm-fan sohasi to‘g‘risida eng oxirgi yangiliklar bilan tanishtirish  hamda boshqa ko‘plab imkoniyatlarga ega bo‘lishlari mumkin bo‘lgan ma'lumotlar bazasi hisoblanadi.</p>
                    <p><strong>Milliy portaldagi resusrlardan hamma foydalana oladimi? </strong> <br /> <br />
                    Ha, Milliy portalning asosiy vazifani har bir saytga tashrif buyurgan foydalanuvchiga, ma`lumotlar ba`zasidan to`liq foydalanish, ilm-fan yo`nalishida        bo`layotgan so`nggi xabar va e`lonlardan xabardor bo`lish imkonini berishdir.</p>
                </div>
            </Sidebar>
        </div>
    )
}
