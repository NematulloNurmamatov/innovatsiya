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
        key: 'setting:6',
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
                        key: 'setting:7',
                    },
                    {
                        label: 'Startup akseleratorlar',
                        key: 'setting:8',
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
                        key: 'setting:27',
                    },
                    {
                        label: 'Dissertatsiyalar reestri',
                        key: 'setting:28',
                    },
                    {
                        label: 'IMO byulletenlari',
                        key: 'setting:29',
                    },
                    {
                        label: "Tahliliy ma'lumotnomalar",
                        key: 'setting:30',
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
                        key: 'setting:31',
                    },
                    {
                        label: 'Xorijiy tashkilotlar bilan tuzilgan memorandumlar',
                        key: 'setting:32',
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
                        key: 'setting:33',
                    },
                    {
                        label: 'Normativ-huquqiy asos',
                        key: 'setting:34',
                    },
                    {
                        label: 'Qabul kvotalari',
                        key: 'setting:35',
                    },
                    {
                        label: "Yo'nalishlar bo’yicha ilmiy kengashlar",
                        key: 'setting:36',
                    },
                    {
                        label: 'Ixtisoslik shifrlari',
                        key: 'setting:37',
                    },
                    {
                        label: 'Ro`yxatga olish jarayoni',
                        key: 'setting:38',
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
];