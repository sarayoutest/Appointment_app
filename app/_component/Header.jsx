"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/"; 
  };

  const Menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Explore", path: "/explore" },
    { id: 3, name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className="flex items-center justify-between p-3 shadow-sm">
      <div className="flex items-center gap-10">
        <Image
          src={"/assets/imag/logo.png"}
          width={100}
          height={100}
          alt="Logo"
        />

        <ul className="md:flex gap-8 hidden">
          {Menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li className="hover:text-blue-500 cursor-pointer hover:scale-105 transition-all">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {user ? (
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src={user.picture}
                width={40}
                height={40}
                alt={user.family_name}
                className="rounded-full border"
              />
              <span className="font-medium text-gray-700">{user.name}</span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-48 mt-2">
            <ul className="text-sm">
              <li className="mt-2 cursor-pointer hover:bg-blue-400 p-2 rounded">
                My Profile
              </li>
              <Link href="/my-booking">
                <li className="mt-2 cursor-pointer hover:bg-blue-400 p-2 rounded">
                  My Booking
                </li>
              </Link>
              <li
                onClick={handleLogout}
                className="mt-2 cursor-pointer hover:bg-red-100 text-red-600 p-2 rounded"
              >
                Logout
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <div className="flex gap-2">
          <Link href="/login">
            <Button className="bg-blue-600 text-white">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
