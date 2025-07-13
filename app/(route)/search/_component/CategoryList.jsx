"use client"
import React,{useState,useEffect} from 'react'
import Api from '@/app/_utils/Api'
import Image from 'next/image'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import Link from 'next/link'

function CategoryList() {

   const [categoryList,setGategoryList] = useState([])
  
      useEffect(()=>{
          getCategoryList()
      },[])
      const getCategoryList=()=>{
          Api.getCategory().then(resp =>{
              setGategoryList(resp.data.data)
              console.log(resp.data.data)
          })
      }
  return (
    <div className='h-screen  flex flex-col mt-5'>

<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
        {categoryList?.map((cat,index )=>(
          <CommandItem className="">
            <Link href={`/search/${cat.name}`} className='p-2 flex gap-2 w-full hover:bg-[#1976D2] cursor-pointer'>
            <img src={`http://localhost:1337${cat?.icon[0]?.url}`}
              width={30}
              height={30}
              alt={cat?.name}
            />
          <label>{cat?.name}</label>  
            </Link>
            </CommandItem>
        ))}
      
     
    </CommandGroup>
 
   
  </CommandList>
</Command>

    </div>
  )
}

export default CategoryList