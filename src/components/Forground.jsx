import React, { useRef, useState } from "react";
import Card from "./Cards";

function Forground() {
  const ref = useRef(null)
  const data = [
    {
      desc: "This is Secret File of office.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    },
    {
      desc: "This is Secret File of office.",
      filesize: "0.7mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    },
    {
      desc: "This is Secret File of office.",
      filesize: "12mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Coming...", tagColor: "red" }
    },
    {
      desc: "This is Secret File of office.",
      filesize: "10mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "blue" }
    },
  ];

  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full p-3 flex gap-5">
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Forground;
