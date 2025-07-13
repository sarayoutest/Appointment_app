import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function DoctorList({ doctorList, heading = "Popular Doctors" }) {
  doctorList?.forEach((doctor, index) => {
    console.log(`🖼️ Doctor #${index}:`, doctor?.image?.[0]?.url);
  });

  return (
    <div className="py-10 px-4 bg-[#F5F5F5]">
      <h2 className="font-bold text-3xl text-[#1976D2] mb-6 text-center">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {doctorList?.length > 0 ? (
          doctorList.map((doctor, index) => (
            <Link href={`/details/${doctor?.documentId}`} key={doctor?.documentId || index}>
              <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <Image
                  src={
                    doctor?.image?.[0]?.url
                      ? `http://localhost:1337${doctor.image[0].url}`
                      : "/default-doctor.png"
                  }
                  alt={doctor?.name || "Doctor image"}
                  width={400}
                  height={300}
                  className="object-cover w-full h-[300px] rounded-t-xl"
                  unoptimized
                />

                <div className="p-4">
                  <span className="inline-block bg-[#E3F2FD] text-[#1976D2] text-sm font-semibold px-3 py-1 rounded-full">
                    {doctor?.category?.name}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-[#1976D2]">
                    {doctor?.name}
                  </h3>

                  <p className="text-gray-700 mt-2">
                    <strong>Experience:</strong> {doctor?.year_of_experience} years
                  </p>

                  <p className="text-gray-700 mt-1">
                    <strong>Address:</strong> {doctor?.address}
                  </p>

                  <p className="text-gray-700 mt-1">
                    <strong>Phone:</strong> {doctor?.phone}
                  </p>

                  <div className="mt-4">
                    <div className="text-center border border-[#1976D2] text-[#1976D2] hover:bg-[#1976D2] hover:text-white transition-all rounded-md py-2 font-semibold">
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          [1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="h-[300px] bg-gray-300 rounded-xl animate-pulse"
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default DoctorList;
