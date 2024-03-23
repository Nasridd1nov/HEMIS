import React, { useState } from "react";

const AccordionItem = ({ title, content, isActive, onItemClick }) => {
  return (
    <div className="border-b">
      <div
        className="flex justify-between items-center py-2 px-4 cursor-pointer"
        onClick={onItemClick}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span
          className={`transform ${
            isActive ? "rotate-180" : "rotate-0"
          } transition-transform duration-300 text-gray-600 `}
        >
          &#9660;
        </span>
      </div>
      {isActive && <div className="py-2 px-4">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="border  overflow-hidden w-[230px] bg-slate-500 text-white">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={index === activeIndex}
          onItemClick={() => onItemClick(index)}
        />
      ))}
      <div className="div h-[400px] p-[20px] flex flex-col gap-4">
        <i className="bx bx-book-reader text-white text-[16px] font-[600] gap-2 flex cursor-pointer justify-start ">
          <h3> Qayta o'qish</h3>
        </i>
        <i className="bx bx-edit  text-white text-[16px] font-[600] gap-2 flex cursor-pointer justify-start">
          Talaba malumoti
        </i>
        <i className="bx bxs-bank  text-white text-[16px] font-[600] gap-2 flex cursor-pointer justify-start">
          Moliyaviy tolov
        </i>
        <i className="bx bx-envelope  text-white text-[16px] font-[600] gap-2 flex cursor-pointer justify-start">
          Xabarlar
        </i>
        <i className="bx bx-cog  text-white text-[16px] font-[600] gap-2 flex cursor-pointer justify-start">
          Tizim
        </i>
        <i className="bx bx-voicemail   text-white text-[16px] font-[600] gap-2 flex cursor-pointer justify-start">
          Elektron kutubxona
        </i>
      </div>
    </div>
  );
};

export default Accordion;