"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");        
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogo, setShowLogo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: name,
        picture: "/assets/imag/healthcare-hospital-medical-18-svgrepo-com.svg", 
        family_name: name.split(" ")[1] || name,
      })
    );

    setShowLogo(true);

    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      {showLogo ? (
        <div className="text-center">
          <Image
            src="/assets/imag/health-svgrepo-com.svg"
            width={120}
            height={120}
            alt="Medical Logo"
            className="animate-pulse mx-auto mb-4"
          />
          <h2 className="text-xl text-blue-700 font-semibold">Welcome {name || "Back"}</h2>
          <p className="text-gray-500">Redirecting...</p>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <div className="flex justify-center mb-6">
            <Image
              src="/assets/imag/health-svgrepo-com.svg"
              width={60}
              height={60}
              alt="Medical Logo"
            />
          </div>
          <h1 className="text-2xl font-semibold text-center text-blue-800 mb-1">
            Login
          </h1>
          <p className="text-sm text-center text-gray-500 mb-6">
            Sign in to manage your medical appointments
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <Button type="submit" className="w-full bg-blue-600 text-white">
              Login
            </Button>
          </form>

          <div className="flex justify-between mt-4 text-sm text-blue-600">
            <Link href="#">Forgot password?</Link>
            <Link href="/register" className="font-medium">
              Create an account
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
