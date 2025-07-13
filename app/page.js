"use client";

import React, { useState, useEffect } from "react";
import Hero from "./_component/Hero";
import CategorySearch from "./_component/CategorySearch";
import DoctorList from "./_component/DoctorList";
import Api from "./_utils/Api";
import Header from "./_component/Header";

export default function Home() {
  const [user, setUser] = useState(null);
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorsList();
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const getDoctorsList = () => {
    Api.getDoctors().then((resp) => {
      console.log("doctors", resp.data.data);
      setDoctorList(resp.data.data);
    });
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      <Hero />
      <CategorySearch />
      <DoctorList doctorList={doctorList} />

      {!user && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() =>
              handleLogin({
                name: "John Doe",
                picture: "/assets/imag/avatar.png",
                family_name: "Doe",
              })
            }
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            تسجيل دخول تجريبي
          </button>
        </div>
      )}
    </>
  );
}
