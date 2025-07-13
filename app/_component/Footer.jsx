import React from 'react';
import { Button } from '../../components/ui/button';

function Footer() {
  return (
    <footer className="bg-[#F5F5F5] text-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1976D2]">
            Subscribe for Health Tips & Doctor Updates
          </h2>
          <form className="mt-6">
            <div className="relative max-w-lg mx-auto">
              <input
                className="w-full rounded-full border border-gray-300 bg-white p-4 pe-32 text-sm shadow-sm"
                id="email"
                type="email"
                placeholder="you@example.com"
              />
              <Button
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#1976D2] hover:bg-[#1258a3] text-white px-5 py-2"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        {/* Info + Social + Links */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-32">
          
          {/* Description and Social */}
          <div>
            <p className="text-lg text-center lg:text-left">
              Book your next doctor appointment easily and quickly. We connect patients with trusted doctors, manage your health history, and support you 24/7.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start gap-5">
              {/* Facebook */}
              <a href="https://facebook.com/share/8k8EEd9siiGjy7Bh/?mibextid=LQQJ4d" target="_blank" rel="noreferrer">
                <svg className="w-6 h-6 text-[#1976D2] hover:text-[#0e4a9c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10...Z" />
                </svg>
              </a>
              {/* Telegram */}
              <a href="https://t.me/sarayou6" target="_blank" rel="noreferrer">
                <svg className="w-6 h-6 text-[#1976D2] hover:text-[#0e4a9c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.99 15.173l-.395 3.692...Z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/sara-yo-b9295b25b" target="_blank" rel="noreferrer">
                <svg className="w-6 h-6 text-[#1976D2] hover:text-[#0e4a9c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554...Z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/sarayoutest" target="_blank" rel="noreferrer">
                <svg className="w-6 h-6 text-[#1976D2] hover:text-[#0e4a9c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484...Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center lg:text-left">
            <div>
              <h3 className="font-bold text-[#1976D2]">Services</h3>
              <ul className="mt-4 space-y-1">
                <li><a href="#" className="hover:underline">Online Booking</a></li>
                <li><a href="#" className="hover:underline">Specialist Access</a></li>
                <li><a href="#" className="hover:underline">Medical History</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#1976D2]">Company</h3>
              <ul className="mt-4 space-y-1">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Our Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#1976D2]">Support</h3>
              <ul className="mt-4 space-y-1">
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © 2025 DocConnect. All rights reserved.
          <br />
          Built with ❤️ by Sara Youssef using{' '}
          <a href="#" className="underline hover:text-[#1976D2]">React</a> &{' '}
          <a href="#" className="underline hover:text-[#1976D2]">Next.js</a>.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
