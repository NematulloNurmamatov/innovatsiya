// import React, { useState } from "react";

// const regions = [
//     { id: "tashkent", name: "Tashkent" },
//     { id: "samarkand", name: "Samarkand" },
//     { id: "fergana", name: "Fergana" },
//     { id: "bukhara", name: "Bukhara" },
// ];

// const UzbekistanMap = ({ onSelectRegion }) => {
//     const [hoveredRegion, setHoveredRegion] = useState(null);

//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 800 600" // Bu xususiy holatga qarab o'zgartirilishi kerak
//             className="uzbekistan-map"
//         >
//             <path
//                 id="tashkent"
//                 d="M10,10 L100,10 L100,100 L10,100 Z" // O'zbekistonning haqiqiy path'ini joylashtiring
//                 className={`region ${hoveredRegion === "tashkent" ? "hover" : ""}`}
//                 onMouseEnter={() => setHoveredRegion("tashkent")}
//                 onMouseLeave={() => setHoveredRegion(null)}
//                 onClick={() => onSelectRegion("Tashkent")}
//             />
//             <path
//                 id="samarkand"
//                 d="M110,10 L200,10 L200,100 L110,100 Z" // O'zbekistonning haqiqiy path'ini joylashtiring
//                 className={`region ${hoveredRegion === "samarkand" ? "hover" : ""}`}
//                 onMouseEnter={() => setHoveredRegion("samarkand")}
//                 onMouseLeave={() => setHoveredRegion(null)}
//                 onClick={() => onSelectRegion("Samarkand")}
//             />
//             {/* Boshqa viloyatlar uchun shunday path'lar qo'shishingiz mumkin */}
//         </svg>
//     );
// };

// export default UzbekistanMap;
