import { HomeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const sidebar_items = [
    {
        label: "Asosiy sahifa",
        key: '/',
        // icon: <HomeFilled />,
    },
    {
        label: "Portal haqida",
        key: '/about',
        // icon: <MailOutlined />,

    },
    {
        type: 'group',
        label: 'Ilm-fan va innovatsiyalar sohasidagi davlat boshqaruvi',  // The title of the group
    },
    {
        label: 'Normativ-huquqiy hujjatlar',
        key: '/papers',
    },
    {
        label: 'Davlat dasturlari',
        key: '/applications',
    },
    {
        label: 'Davlat boshqaruv organlari',
        key: '/organizations',
    },
    {
        label: "Oliy ta'lim muassasalari",
        key: '/Organization',
    },
    {
        label: 'Ilmiy-tadqiqot muassasalari',
        key: '/Organizations2',
    },
    {
        label: 'Hududiy salohiyat',
        key: '/regions',
    },
    {
        label: 'Texnoparklar',
        key: 'SubMenu2',
        children: [
            {
                type: 'group',
                label: 'Texnoparklar',
                children: [
                    {
                        label: 'Texnoparklar',
                        key: '/technos',
                    },
                    {
                        label: 'Startup akseleratorlar',
                        key: '/accelators',
                    },
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
                    },
                ],
            },
        ],
    },
    {
        label: 'Xalqaro hamkorlik',
        key: 'SubMenu4',
        children: [
            {
                type: 'group',
                label: 'Xalqaro hamkorlik',
                children: [
                    {
                        label: 'Xalqaro tashkilotlar va moliya institutlari',
                        key: '/outinst',
                    },
                    {
                        label: 'Xorijiy tashkilotlar bilan tuzilgan memorandumlar',
                        key: '/memoriandums',
                    },
                ],
            },
        ],
    },
    {
        label: 'Doktorantura',
        key: 'SubMenu5',
        children: [
            {
                type: 'group',
                label: 'Doktorantura',
                children: [
                    {
                        label: 'Doktorantura haqida',
                        key: '/doktorantura',
                    },
                    {
                        label: 'Normativ-huquqiy asos',
                        key: '/rules',
                    },
                    {
                        label: 'Qabul kvotalari',
                        key: '/quotes',
                    },
                    {
                        label: "Yo'nalishlar bo’yicha ilmiy kengashlar",
                        key: '/directions',
                    },
                    {
                        label: 'Ixtisoslik shifrlari',
                        key: '/codes',
                    },
                    {
                        label: 'Ro`yxatga olish jarayoni',
                        key: '/register',
                    },
                ],
            },
        ],
    },
    {
        label: 'Grantlar',
        key: 'SubMenu6',
        children: [
            {
                type: 'group',
                label: 'Xalqaro grantlar dasturi',
                children: [
                    {
                        label: 'Erasmus+',
                        key: '/erasmus',
                    },
                    {
                        label: 'Horizon Europe',
                        key: '/horizon',
                    },
                ],
            },
        ],
    },
    {
        label: 'Stajirovka',
        key: 'SubMenu7',
        children: [
            {
                type: 'group',
                label: 'Ilmiy stajirovka',
                children: [
                    {
                        label: 'Ilmiy stajirovka haqida',
                        key: '/ilmiy-stajirovka',
                    },
                    {
                        label: 'Normativ-huquqiy asos',
                        key: '/scientist',
                    },
                    {
                        label: "Ilmiy stajirovka bo'yicha qo'llanma",
                        key: '/stajirovka-qollanma',
                    },
                    {
                        label: "Hujjatlar ro'yxati",
                        key: '/stajirovka-docs',
                    },
                    {
                        label: "Ilmiy-stajirovkada amaliyot o'tab kelganlar",
                        key: '/stajirovka-sent',
                    },
                ],
            },
        ],
    },
    {
        label: 'Noshirlik faoliyati',
        key: 'SubMenu8',
        children: [
            {
                type: 'group',
                label: 'Noshirlik faoliyati',
                children: [
                    {
                        label: "Mahalliy ma'lumotlar bazasi",
                        key: '/articles',
                    },
                    {
                        label: "Xorijiy ma'lumotlar bazasi",
                        key: '/outbases',
                    },
                    {
                        label: "Yo'riqnoma va qo'llanmalar",
                        key: '/docs',
                    },
                    {
                        label: "Ko'p so'raladigan savollar",
                        key: '/faq',
                    },
                    {
                        label: "Yangiliklar",
                        key: '/news',
                    },
                    {
                        label: "E'lonlar",
                        key: '/adverts',
                    },
                    {
                        label: "Loyihalar turlari",
                        key: '/concs',
                    },
                    {
                        label: "Konferensiyalar",
                        key: '/conference',
                    },
                    {
                        label: "Innovatsion rivojlanish vazirligi Hay'ati yig'ilishlari",
                        key: '/hayat',
                    },
                    {
                        label: "Innovatsion rivojlanish vazirligi Ilmiy-texnik kengash yig'ilishlari",
                        key: '/itk',
                    },
                    {
                        label: "Innovatsion g'oyalar ma'lumotlar bazasi",
                        key: '/ideas',
                    },
                    {
                        label: "Davlat tomonidan qo'llab-quvvatlash chora-tadbirlari",
                        key: '/helps',
                    },
                    {
                        label: "Tadbirlar",
                        key: '/events',
                    },
                    {
                        label: "Muvaffaqiyat tarixi",
                        key: '/historys',
                    },
                    {
                        label: "Dayjest va tahliliy ma'lumotnoma",
                        key: '/dayjeyts',
                    },
                    {
                        label: "Fotogalereya",
                        key: '/gallery/photo',
                    },
                    {
                        label: "Videogalereya",
                        key: '/gallery/video',
                    },
                    {
                        label: "Ko'p beriladigan savollar",
                        key: '/faq2',
                    },
                ],
            },
        ],
    },
];