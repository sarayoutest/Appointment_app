"use client"

import React, { useEffect , useState} from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MyBookingList from './_components/MyBookingList'
import Api from '@/app/_utils/Api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

function MyBooking() {


    const {user} = useKindeBrowserClient()
    const[bookingList,setBookingList] = useState([])

    useEffect(()=>{
        userBookingList()
    },[user])
    const userBookingList=()=> Api.myBookingList(user?.email).then(resp=>{
        console.log("my booking",resp.data.data)
        setBookingList(resp.data.data)
    })

    const filterBookingList=(type)=>{
        const result =bookingList.filter(item=>
        type=="upcoming"? new Date(item.date)>= new Date()
       :new Date(item.date)<= new Date()
    )

        return result
    }
  return (
    <div className='px-4 md:px-10'>
        <h2 className='font-bold text-2xl'>My Booking</h2>

        <Tabs defaultValue="account" className="w-full mt-8">
  <TabsList className="w-full justify-start">
    <TabsTrigger value="UpComing">UpComing </TabsTrigger>
    <TabsTrigger value="Past">Past</TabsTrigger>
  </TabsList>
  <TabsContent value="UpComing">
        <MyBookingList  updateAppointment={()=>userBookingList()} past={false} bookingList={filterBookingList("upcoming")}/>
    
    </TabsContent>
  <TabsContent   value="Past"><MyBookingList  updateAppointment={()=>userBookingList()} past={true} bookingList={filterBookingList("past")}/></TabsContent>
</Tabs>

    </div>
  )
}
 
export default MyBooking