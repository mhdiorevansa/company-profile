"use client";

import CountUp from "react-countup";
import { FaHome } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const StatisticSection = () => {
   const [ref, inView] = useInView({ triggerOnce: true });
   const data = [
      {
         title: "Company",
         count: 21,
         icon: "FaHome"
      },
      {
         title: "Product",
         count: 14,
         icon: "AiFillProduct"
      },
      {
         title: "Service",
         count: 10,
         icon: "MdMiscellaneousServices"
      },
      {
         title: "Client",
         count: 24,
         icon: "IoPeople"
      }
   ];
   const iconsMap = {
      FaHome: <FaHome />,
      AiFillProduct: <AiFillProduct />,
      MdMiscellaneousServices: <MdMiscellaneousServices />,
      IoPeople: <IoPeople />
   };
   return (
      <div ref={ref} className="flex gap-x-7 justify-evenly">
         {data.map((item, index) => {
            return (
               <div key={index} className="flex flex-col items-center space-y-2">
                  <p className="text-8xl font-bold text-gray-400">{inView ? <CountUp end={item.count} /> : "0"}</p>
                  <p className="text-xl font-semibold flex gap-x-2 items-center">{iconsMap[item.icon]} {item.title}</p>
               </div>
            )
         })}
      </div>
   )
}

export default StatisticSection;