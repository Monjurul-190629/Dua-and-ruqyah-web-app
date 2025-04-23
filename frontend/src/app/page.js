'use client'

import Image from "next/image";
import Loading from "./loading";
import SectionHeader from "@/Component/SectionHeader";
import CategoryHeading from "@/Component/CategoryHeading";
import { useState } from "react";

export default function Home() {
  
  // For search
  const [searchTerm, setSearchTerm] = useState(''); 

  return (
    <div>
      {/* Category Header */}
      <div className='md:px-2 md:pt-5 pt-5'>
        <SectionHeader />
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-14 mt-4">

        <div className='w-[350px]'>
          
          <CategoryHeading searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        </div>


      </div>
    </div>


  );
}
