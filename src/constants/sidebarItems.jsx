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
                        key: 'setting:39',
                    },
                    {
                        label: 'Horizon Europe',
                        key: 'setting:40',
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
                        key: 'setting:41',
                    },
                    {
                        label: 'Normativ-huquqiy asos',
                        key: 'setting:42',
                    },
                    {
                        label: "Ilmiy stajirovka bo'yicha qo'llanma",
                        key: 'setting:43',
                    },
                    {
                        label: "Hujjatlar ro'yxati",
                        key: 'setting:44',
                    },
                    {
                        label: "Ilmiy-stajirovkada amaliyot o'tab kelganlar",
                        key: 'setting:45',
                    },
                    {
                        label: 'Hududiy salohiyat',
                        key: 'setting:46',
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
                        key: 'setting:9',
                    },
                    {
                        label: "Xorijiy ma'lumotlar bazasi",
                        key: 'setting:10',
                    },
                    {
                        label: "Yo'riqnoma va qo'llanmalar",
                        key: 'setting:11',
                    },
                    {
                        label: "Ko'p so'raladigan savollar",
                        key: 'setting:12',
                    },
                    {
                        label: "Yangiliklar",
                        key: 'setting:13',
                    },
                    {
                        label: "E'lonlar",
                        key: 'setting:14',
                    },
                    {
                        label: "Loyihalar turlari",
                        key: 'setting:15',
                    },
                    {
                        label: "Konferensiyalar",
                        key: 'setting:16',
                    },
                    {
                        label: "Innovatsion rivojlanish vazirligi Hay'ati yig'ilishlari",
                        key: 'setting:17',
                    },
                    {
                        label: "Innovatsion rivojlanish vazirligi Ilmiy-texnik kengash yig'ilishlari",
                        key: 'setting:18',
                    },
                    {
                        label: "Innovatsion g'oyalar ma'lumotlar bazasi",
                        key: 'setting:19',
                    },
                    {
                        label: "Davlat tomonidan qo'llab-quvvatlash chora-tadbirlari",
                        key: 'setting:20',
                    },
                    {
                        label: "Tadbirlar",
                        key: 'setting:21',
                    },
                    {
                        label: "Muvaffaqiyat tarixi",
                        key: 'setting:21',
                    },
                    {
                        label: "Dayjest va tahliliy ma'lumotnoma",
                        key: 'setting:23',
                    },
                    {
                        label: "Fotogalereya",
                        key: 'setting:24',
                    },
                    {
                        label: "Videogalereya",
                        key: 'setting:25',
                    },
                    {
                        label: "Ko'p beriladigan savollar",
                        key: 'setting:26',
                    },
                ],
            },
        ],
    },
];