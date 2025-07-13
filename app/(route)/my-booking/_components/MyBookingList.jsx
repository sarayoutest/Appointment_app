import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import CancelAppointment from './CancelAppointment'
import Api from '@/app/_utils/Api'
import { toast } from 'sonner'
  
function MyBookingList({bookingList, past,updateAppointment}) {

    const onDeleteBooking =(item)=>{
            Api.deleteBooking(item.documentId).then(resp =>{
                console.log(resp)
                if(resp){
                    toast("appointment has been canceled")
                    updateAppointment()
                }

            })
    }
  return (
    <div>
       {bookingList.map((item,index)=>(
            <div className='flex gap-2 items-cener'>
                        <Image src={`http://localhost:1337${item?.doctor?.image?.url}`}
                    width={150}
                    height={120}
                    alt='image'
                    className='rounded-full object-cover w-[120] h-[120]'
                
                />

                <div className=' mt-15 gap-2 ml-15 w-full'>
                   <h2 className='font-bold flex justify-between items-center'>Name : {item?.doctor?.name}

                        {!past&&<CancelAppointment cancelClick={()=>onDeleteBooking(item)}/>}

                   </h2>
                   <h2>Address: {item?.doctor?.address}</h2>
                   <h2>phone: {item?.doctor?.phone}</h2>
                   <h2>Date and Time: {new Date(item?.date).toLocaleString()}</h2>

                  
                </div>

            </div>
            
       ))} 
    </div>
  )
}

export default MyBookingList