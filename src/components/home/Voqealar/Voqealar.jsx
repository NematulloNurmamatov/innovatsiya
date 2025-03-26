import { Button } from "antd";
import React, { useState } from "react";

const tabs = [
    { id: "projects", label: "Проекты" },
    { id: "conferences", label: "Конференции" },
    { id: "meetings1", label: "Заседания" },
    { id: "meetings2", label: "Заседания" },
];

const events = [
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_VxKxe-RFMAmutYNU_s4Awr0YbktxNas9Q&s",
        title: "O‘zbekistonda sun’iy qor va yomg‘ir yog‘diriladi",
        description:
            "Bu yil ham qish biz kutgandek bo‘lmadi. Bir qarasang, kuz havosi, bir qarasang bahoriylik.",
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?cs=srgb&dl=pexels-george-dolgikh-551816-1326947.jpg&fm=jpg",
        title: "O‘zbekistonda sun’iy qor va yomg‘ir yog‘diriladi",
        description:
            "Bu yil ham qish biz kutgandek bo‘lmadi. Bir qarasang, kuz havosi, bir qarasang bahoriylik.",
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?cs=srgb&dl=pexels-george-dolgikh-551816-1326947.jpg&fm=jpg",
        title: "O‘zbekistonda sun’iy qor va yomg‘ir yog‘diriladi",
        description:
            "Bu yil ham qish biz kutgandek bo‘lmadi. Bir qarasang, kuz havosi, bir qarasang bahoriylik.",
    },
    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_VxKxe-RFMAmutYNU_s4Awr0YbktxNas9Q&s",
        title: "O‘zbekistonda sun’iy qor va yomg‘ir yog‘diriladi",
        description:
            "Bu yil ham qish biz kutgandek bo‘lmadi. Bir qarasang, kuz havosi, bir qarasang bahoriylik.",
    },
    {
        id: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_VxKxe-RFMAmutYNU_s4Awr0YbktxNas9Q&s",
        title: "O‘zbekistonda sun’iy qor va yomg‘ir yog‘diriladi",
        description:
            "Bu yil ham qish biz kutgandek bo‘lmadi. Bir qarasang, kuz havosi, bir qarasang bahoriylik.",
    },
    {
        id: 6,
        image: "https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?cs=srgb&dl=pexels-george-dolgikh-551816-1326947.jpg&fm=jpg",
        title: "O‘zbekistonda sun’iy qor va yomg‘ir yog‘diriladi",
        description:
            "Bu yil ham qish biz kutgandek bo‘lmadi. Bir qarasang, kuz havosi, bir qarasang bahoriylik.",
    },
];

const Voqealar = () => {
    const [activeTab, setActiveTab] = useState("projects");

    return (
        <div className=" w-full mx-auto p-4 bg-gray-100">
            <div className="container">
                {/* Tabs */}
                <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`px-4   rounded-[10px] !text-xl w-full py-5 ${activeTab === tab.id ? "bg-[#005464] !text-white" : "bg-gray-200"
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Event List */}
                <div className=" w-[100%] mx-auto grid md:w-[70%] lg:w-[90%] lg:grid-cols-2 gap-5 mt-4">
                    {events.map((event) => (
                        <div key={event.id} className="flex lg:flex-row bg-white shadow-lg max-[600px]:flex-col rounded-lg overflow-hidden">
                            <img
                                src={event.image}
                                alt="Event"
                                className="w-[200px] max-[600px]:w-full lg:w-1/3 object-cover"
                            />
                            <div className="p-4 w-full">
                                <h3 className="font-bold text-lg">{event.title}</h3>
                                <p className="text-gray-600">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-end mt-4 mb-10">
                    <Button className="!text-lg" type="link">
                        Bce мероприятия
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Voqealar;
