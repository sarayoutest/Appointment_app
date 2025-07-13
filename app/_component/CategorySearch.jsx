"use client";
import { useState, useEffect } from "react";
import Api from "../_utils/Api";
import Link from "next/link";
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

function CategorySearch() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    Api.getCategory().then((resp) => {
      setCategoryList(resp.data.data);
      console.log("✅ Category List:", resp.data.data);
    });
  };

  return (
    <div className="mb-10 items-center flex flex-col bg-[#F5F5F5] py-10 px-4">
      <h2 className="font-bold text-4xl mb-7 text-[#1976D2]">
        Book Your <span className="text-[#4CAF50]">Appointment</span> Now
      </h2>

      <div className="flex w-full max-w-sm items-center gap-2 mb-6">
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-white border border-gray-300"
        />
        <Button className="bg-[#1976D2] hover:bg-[#1565C0] text-white px-6 py-2 text-md rounded-lg">
          Subscribe
        </Button>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-4 gap-4 w-full max-w-5xl">
        {categoryList.map((cat, index) => (
          <Link
            href={`/search/${cat.name}`}
            key={index}
            className="flex flex-col text-center items-center p-5 bg-[#E3F2FD] text-[#1976D2] rounded-lg hover:scale-105 hover:bg-[#BBDEFB] transition-all ease-in-out cursor-pointer shadow"
          >
            <img
              src={
                cat?.icon && cat.icon.length > 0
                  ? `http://localhost:1337${cat.icon[0].url}`
                  : "/fallback-icon.png"
              }
              width={70}
              height={70}
              alt={cat.name}
            />
            <label className="mt-2 font-semibold">{cat.name}</label>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategorySearch;
