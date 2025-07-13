import React from "react";
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookAppointment from "../BookAppointment";

function DoctorDetails({ doctor }) {
  return (
    <>
      <div className="border p-5 rounded-lg bg-white shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Doctor image */}
        <div>
          <Image
            src={
              doctor?.image?.[0]?.url
                ? `http://localhost:1337${doctor.image[0].url}`
                : "/default-doctor.png"
            }
            alt={doctor?.name || "Doctor image"}
            width={400}
            height={300}
            className="object-cover w-full h-[300px] rounded-md"
            unoptimized
          />
        </div>

        {/* Doctor info */}
        <div className="md:px-8 col-span-2 flex flex-col gap-5">
          <h2 className="font-bold text-3xl text-[#1e3a8a] mt-2">{doctor?.name}</h2>

          <h3 className="flex items-center gap-2 text-gray-600">
            <GraduationCap className="text-[#2563eb]" />
            <span>{doctor?.year_of_experience} Years Of Experience</span>
          </h3>

          <h3 className="flex items-center gap-2 text-gray-600">
            <MapPin className="text-[#2563eb]" />
            <span>{doctor?.address}</span>
          </h3>

          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full w-fit font-medium">
            {doctor?.category?.name}
          </span>

          {/* Book Appointment Button */}
          <BookAppointment doctor={doctor} />

          <div className="pt-4">
            <h1 className="text-xl font-semibold text-[#1e3a8a] mb-1">About</h1>
            <p className="text-gray-600 leading-relaxed">{doctor?.about}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorDetails;
