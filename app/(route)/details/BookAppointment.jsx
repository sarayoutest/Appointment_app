import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Api from '@/app/_utils/Api'
import { toast } from "sonner"

function BookAppointment({ doctor }) {
  const [date, setDate] = useState(new Date())
  const [timeSlot, setTimeSlot] = useState([])
  const [selectedTime, setSelectedTime] = useState()
  const [unavailableTimes, setUnavailableTimes] = useState([])

  const { user } = useKindeBrowserClient()

  useEffect(() => {
    getTime()
  }, [])

  const booking = () => {
    const data = {
      data: {
        userName: user.given_name + " " + user.family_name,
        email: user.email,
        date: date,
        time: selectedTime,
        doctor: doctor.documentId,
      }
    }

    Api.bookAppointment(data).then(resp => {
      if (resp) {
        toast("✅ Appointment Booked Successfully.")
      }
    })
  }

  const pastDay = (day) => {
    return day <= new Date()
  }

  const getTime = () => {
    const timeList = []
    for (let i = 10; i <= 12; i++) {
      timeList.push({ time: i + ":00 AM" })
      timeList.push({ time: i + ":30 AM" })
    }

    for (let i = 1; i <= 5; i++) {
      timeList.push({ time: i + ":00 PM" })
      timeList.push({ time: i + ":30 PM" })
    }

    // Example: random unavailable times
    const unavailable = ["11:00 AM", "2:30 PM"]
    setUnavailableTimes(unavailable)
    setTimeSlot(timeList)
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-[#1976D2] hover:bg-[#1565C0] text-white px-6 py-2 text-md rounded-lg">
          Book Appointment
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={pastDay}
              />

              <div className='mt-4 md:mt-0'>
                <div className='grid grid-cols-3 gap-3 border border-blue-300 p-3 rounded-lg'>
                  {timeSlot?.map((item, index) => {
                    const isUnavailable = unavailableTimes.includes(item.time)
                    const isSelected = selectedTime === item.time

                    return (
                      <div
                        key={index}
                        onClick={() => {
                          if (!isUnavailable) setSelectedTime(item.time)
                        }}
                        className={`border text-center p-2 rounded-full transition cursor-pointer 
                          ${isUnavailable
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                            : isSelected
                            ? "bg-blue-100 text-blue-900 font-semibold"
                            : "hover:bg-blue-100 hover:text-blue-800 border-blue-300 text-blue-700"
                          }`}
                      >
                        <span className="flex items-center justify-center gap-1">
                          {item.time}
                          {isUnavailable ? "⛔" : isSelected ? "✅" : ""}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <Button
          onClick={booking}
          disabled={!(date && selectedTime)}
          className="bg-blue-700 hover:bg-blue-800 text-white"
        >
          Book Appointment
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default BookAppointment
