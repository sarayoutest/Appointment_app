import React, { useState, useEffect } from 'react';
import Api from '@/app/_utils/Api';
import Link from 'next/link';
import Image from 'next/image';

function Doctorsuggestions() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorsList();
  }, []);

  const getDoctorsList = () => {
    Api.getDoctors().then((resp) => {
      console.log('doctors', resp.data.data);
      setDoctorList(resp.data.data);
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold text-[#1e3a8a] mb-4">Suggestions</h1>

      <div className="flex flex-col gap-4">
        {doctorList.slice(0, 5).map((doctor, index) => (
          <Link key={index} href={`/details${doctor?.documentId}`}>
            <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex gap-4 items-center">
              <Image
                src={
                  doctor?.image?.[0]?.url
                    ? `http://localhost:1337${doctor.image[0].url}`
                    : '/default-doctor.png'
                }
                alt={doctor?.name || 'Doctor image'}
                width={100}
                height={100}
                className="object-cover rounded-md w-[100px] h-[100px]"
                unoptimized
              />

              <div className="flex flex-col">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full w-fit">
                  {doctor?.category?.name}
                </span>

                <h2 className="text-[#1e3a8a] font-semibold mt-2">{doctor?.name}</h2>

                <p className="text-gray-600 text-sm mt-1">
                  {doctor?.year_of_experience} Years Experience
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Doctorsuggestions;
