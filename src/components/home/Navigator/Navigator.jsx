import React from "react";

import UzbekistanMap from "../../../assets/uz.svg";

const Navigator = () => {

    return (
        <div className="container p-4">
            <h2 className="!font-bold text-3xl max-[700px]:text-2xl max-[600px]:text-xl  w-full text-center lg:text-left">
                O'zbekiston Respublikasi Ilmiy va innovatsion infratuzilmasi bo'yicha navigator
            </h2>

            <div className="flex flex-col lg:flex-row gap-8 mt-6">
                <div className="w-full lg:w-[70%]">
                    <img className="w-full object-cover rounded-xl" src={UzbekistanMap} alt="uzb" />
                </div>

                <div className="w-full lg:w-[30%] bg-gray-100 p-6 rounded-xl">
                    <h3 className="text-center lg:text-left text-2xl !font-bold mb-5">Tashkent</h3>

                    {[
                        ["Investitsiya kompaniyalari", 3],
                        ["IT-Parklar", 6],
                        ["Konsalting firmalar", 15],
                        ["Kovorking markazlar", 3],
                        ["Texnoparklar", 4],
                        ["Biznes akseleratorlar", 1],
                        ["Maxsus iqtisodiy zonalar", 3],
                        ["Erkin iqtisodiy zonalar", 7],
                        ["Kichik iqtisodiy zonalar", 13],
                        ["Ilmiy laboratoriyalar", 7]
                    ].map(([name, count], index) => (
                        <div key={index} className="flex justify-between text-gray-700 text-lg pt-2 border-b border-gray-300">
                            <p className="max-[600px]:text-[14px]">{name}</p>
                            <p className="max-[600px]:text-[14px]">{count}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default Navigator;
