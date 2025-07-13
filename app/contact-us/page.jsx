"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, User, MessageCircle } from "lucide-react";

export default function ContactUs() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_po8kqd5",     
        "template_g7xv83p",    
        form.current,          
        "3gjz-ulNg8e26mPbc"    
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          form.current.reset();
          setTimeout(() => setMessage(""), 5000);
        },
        () => {
          setMessage("❌ Message not sent. Please try again.");
        }
      );
  };



  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-[#1e3a8a] mb-4">Contact Us</h1>
  
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md border border-blue-100"
      >
    
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="pl-10 w-full border border-blue-200 focus:border-blue-500 p-2 rounded outline-none text-gray-800 placeholder:text-gray-400"
          />
        </div>
  
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="pl-10 w-full border border-blue-200 focus:border-blue-500 p-2 rounded outline-none text-gray-800 placeholder:text-gray-400"
          />
        </div>
  
        <div className="relative">
          <MessageCircle className="absolute left-3 top-3 text-gray-400" size={18} />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="pl-10 w-full border border-blue-200 focus:border-blue-500 p-2 rounded h-32 outline-none text-gray-800 resize-none placeholder:text-gray-400"
          ></textarea>
        </div>
  
        <button
  type="submit"
  className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition font-medium shadow-sm hover:shadow-md"
>
  Send Message
</button>
      </form>

      {message && (
        <p className="mt-4 text-sm font-medium text-blue-700">{message}</p>
      )}
    </div>
  );
}
