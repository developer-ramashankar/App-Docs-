import React from 'react'
import { FaFileMedical } from "react-icons/fa6";
import { BsDownload } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Cards({data,reference}) {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className=' relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
        <FaFileMedical />
        <p className='text-sm leading-tight mt-5'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full left-0'>
                <div className='flex text-center py-3 mb-5  px-8 justify-between'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                      {data.close ? <IoClose />: <BsDownload size=".8em" color='#fff' />  }
                    </span>
                </div>
                {data.tag.isOpen &&(<div className={`tag w-full py-4 ${data.tag.tagColor ==="blue"? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm'>{data.tag.tagTitle}</h3>
                </div>)}
                
            </div>
                
        </motion.div>

    </>
  )
}

export default Cards