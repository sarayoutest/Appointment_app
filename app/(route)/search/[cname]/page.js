"use client"
import DoctorList from '@/app/_component/DoctorList'
import Api from '@/app/_utils/Api'
import React, { useEffect, useState } from 'react'

function search({params}) {

  const[doctorList,setDoctorList]=useState([])
useEffect(()=>{
  console.log(params.cname)
  getDoctors()
})

const getDoctors=()=>{
  Api.getDoctorsByCategory(params.cname).then(resp=>{
    console.log("doctors by category",resp.data.data)
    setDoctorList(resp.data.data)
  })
}
  return (
    <div>
      <DoctorList doctorList={doctorList} heading={params.cname}/>
    </div>
  )
}

export default search