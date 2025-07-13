"use client";
import React, { useEffect, useState } from "react";
import { use } from "react";
import Api from "@/app/_utils/Api";
import DoctorDetails from "../_components/DoctorDetails";
import Doctorsuggestions from "../_components/Doctorsuggestions";

function Details({ params }) {
  const { id } = use(params);
  const [doctor, setDoctor] = useState();

  useEffect(() => {
    if (id) {
      Api.getDoctorById(id).then((resp) => {
        console.log(resp.data.data);
        setDoctor(resp.data.data);
      }).catch((err) => {
        console.error("❌ Error fetching doctor:", err);
      });
    }
  }, [id]);

  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold text-[22px]">Details</h2>

      <div className="grid md:grid-cols-4 grid-cols-1">
        {/* Doctor details */}
        <div className="col-span-3">
          <DoctorDetails doctor={doctor} />
        </div>

        {/* Doctor suggestions */}
        <div>
          <Doctorsuggestions />
        </div>
      </div>
    </div>
  );
}

export default Details;
