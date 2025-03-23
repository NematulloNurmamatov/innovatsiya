import React from "react";
import { Link} from "react-router-dom";

export const menuItems = [
    {
        label: <Link to="/">Home</Link>,
        key: '/',
    },
    {
        label: <Link to="/about">Portal haqida</Link>,
        key: 'about',
    },
    {
        label: 'Davlat boshqaruvi',
        key: 'SubMenu',
        children: [
            {
                type: 'group',
                label: 'Ilm-fan va innovatsiyalar',
                children: [
                    { label: 'Normativ-huquqiy hujjatlar', key: '/papers' },
                    { label: 'Davlat dasturlari', key: '/applications' },
                    { label: 'Davlat boshqaruv organlari', key: '/organizations' },
                    { label: "Oliy ta'lim muassasalari", key: '/organization' },
                    { label: 'Ilmiy-tadqiqot muassasalari', key: 'organizations2' },
                    { label: 'Hududiy salohiyat', key: '/regions' },
                ],
            },
        ],
    },
    {
        label: 'Texnoparklar',
        key: 'SubMenu2',
        children: [
            {
                type: 'group',
                label: 'Texnoparklar',
                children: [
                    { label: 'Texnoparklar', key: '/technos' },
                    { label: 'Startup akseleratorlar', key: '/accelators' },
                ],
            },
        ],
    },
    {
        label: 'axborot resurslari',
        key: 'SubMenu3',
        children: [
            {
                type: 'group',
                label: 'Milliy ilmiy texnik axborot resurslari',
                children: [
                    {
                        label: 'Loyihalar reestri',
                        key: '/projects',
                    },
                    {
                        label: 'Dissertatsiyalar reestri',
                        key: '/disserts',
                    },
                    {
                        label: 'IMO byulletenlari',
                        key: '/blutten',
                    },
                    {
                        label: "Tahliliy ma'lumotnomalar",
                        key: '/datas',
                        key: '/datas',
                    },
                ],
            },
        ],
    },
];

export const menuItems2 = [

    { label: <Link to="/">Asosiy sahifa</Link>, key: "/" },
    { label: <Link to="/about">Portal haqida</Link>, key: "/about" },

    { label: <span style={{ color: "gray", cursor: "default" }}>Ilm-fan va innovatsiyalar sohasidagi davlat boshqaruvi</span>, key: "ilm-fan", disabled: true },
    { label: <Link to="/papers">Normativ-huquqiy hujjatlar</Link>, key: "/papers" },
    { label: <Link to="/applications">Davlat dasturlari</Link>, key: "/applications" },
    { label: <Link to="/organizations">Davlat boshqaruv organlari</Link>, key: "/organizations" },
    { label: <Link to="/organization">Oliy ta'lim muassasalari</Link>, key: "/organization" },
    { label: <Link to="/organizations2">Ilmiy-tadqiqot muassasalari</Link>, key: "/organizations2" },
    { label: <Link to="/regions">Hududiy salohiyat</Link>, key: "/regions" },

    { label: <span style={{ color: "gray", cursor: "default" }}>Ilmiy va innovatsion infratuzilma</span>, key: "ilmiy-infra", disabled: true },
    { label: <Link to="/technos">Texnoparklar</Link>, key: "/technos" },
    { label: <Link to="/accelators">Startup akseleratorlar</Link>, key: "/accelators" },

    { label: <span style={{ color: "gray", cursor: "default" }}>Milliy ilmiy texnik axborot resurslari</span>, key: "milliy-resurs", disabled: true },
    { label: <Link to="/projects">Loyihalar reestri</Link>, key: "/projects" },
    { label: <Link to="/disserts">Dissertatsiyalar reestri</Link>, key: "/disserts" },
    { label: <Link to="/blutten">IMO byulletenlari</Link>, key: "/blutten" },
    { label: <Link to="/datas">Tahliliy ma'lumotnomalar</Link>, key: "/datas" },

    { label: <span style={{ color: "gray", cursor: "default" }}>Xalqaro hamkorlik</span>, key: "xalqar", disabled: true },
    { label: <Link to="/outinst">Xalqaro tashkilotlar va moliya institutlari</Link>, key: "/outinst" },
    { label: <Link to="/memoriandums">Xorijiy tashkilotlar bilan tuzilgan memorandumlar</Link>, key: "/memoriandums" },

    { label: <span style={{ color: "gray", cursor: "default" }}>Doktorantura</span>, key: "doktorantura", disabled: true },
    { label: <Link to="/doktorantura">Doktorantura haqida</Link>, key: "/doktorantura" },
    { label: <Link to="/rules">Normativ-huquqiy asos</Link>, key: "/rules" },
    { label: <Link to="/quotes">Qabul kvotalari</Link>, key: "/quotes" },
    { label: <Link to="/directions">Yo'nalishlar bo’yicha ilmiy kengashlar</Link>, key: "/directions" },
    { label: <Link to="/codes">Ixtisoslik shifrlari</Link>, key: "/codes" },
    { label: <Link to="/register">Ro'yxatga olish jarayoni</Link>, key: "/register" },

    { label: <span style={{ color: "gray", cursor: "default" }}>Xalqaro grantlar dasturi</span>, key: "grantlar", disabled: true },
    { label: <Link to="/erasmus">Erasmus+</Link>, key: "/erasmus" },
    { label: <Link to="/horizon">Horizon Europe</Link>, key: "/horizon" },

    { label: <span style={{ color: "gray", cursor: "default" }}>Ilmiy stajirovka</span>, key: "stajirovka", disabled: true },
    { label: <Link to="/ilmiy-stajirovka">Ilmiy stajirovka haqida</Link>, key: "/ilmiy-stajirovka" },
    { label: <Link to="/scientist">Normativ-huquqiy asos</Link>, key: "/scientist" },
    { label: <Link to="/stajirovka-qollanma">Ilmiy stajirovka bo'yicha qo'llanma</Link>, key: "/stajirovka-qollanma" },
    { label: <Link to="/stajirovka-docs">Hujjatlar ro'yxati</Link>, key: "/stajirovka-docs" },
    { label: <Link to="/stajirovka-sent">Ilmiy-stajirovkada amaliyot o'tab kelganlar</Link>, key: "/stajirovka-sent" },

    { label: <span style={{ color: "gray", cursor: "default" }}>Noshirlik faoliyati</span>, key: "noshirlik", disabled: true },
    { label: <Link to="/articles">Mahalliy ma'lumotlar bazasi</Link>, key: "/articles" },
    { label: <Link to="/outbases">Xorijiy ma'lumotlar bazasi</Link>, key: "/outbases" },
    { label: <Link to="/docs">Yo'riqnoma va qo'llanmalar</Link>, key: "/docs" },
    { label: <Link to="/faq">Ko'p so'raladigan savollar</Link>, key: "/faq" },

    { label: <Link to="/news">Yangiliklar</Link>, key: "/news" },
    { label: <Link to="/adverts">E'lonlar</Link>, key: "/adverts" },
    { label: <Link to="/concs">Loyihalar turlari</Link>, key: "/concs" },
    { label: <Link to="/conference">Konferensiyalar</Link>, key: "/conference" },
    { label: <Link to="/hayat">Innovatsion rivojlanish vazirligi Hay'ati yig'ilishlari</Link>, key: "/hayat" },
    { label: <Link to="/itk">Innovatsion rivojlanish vazirligi Ilmiy-texnik kengash yig'ilishlari</Link>, key: "/itk" },
    { label: <Link to="/ideas">Innovatsion g'oyalar ma'lumotlar bazasi</Link>, key: "/ideas" },
    { label: <Link to="/helps">Davlat tomonidan qo'llab-quvvatlash chora-tadbirlari</Link>, key: "/helps" },
    { label: <Link to="/events">Tadbirlar</Link>, key: "/events" },
    { label: <Link to="/historys">Muvaffaqiyat tarixi</Link>, key: "/historys" },
    { label: <Link to="/dayjeyts">Dayjest va tahliliy ma'lumotnoma</Link>, key: "/dayjeyts" },
    { label: <Link to="/gallery/photo">Fotogalereya</Link>, key: "/gallery/photo" },
    { label: <Link to="/gallery/video">Videogalereya</Link>, key: "/gallery/video" },
    { label: <Link to="/faq2">Ko'p beriladigan savollar</Link>, key: "/faq2" },
];


export default menuItems;
