import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';
import NavBar from '@/components/NavBar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Maharashtra Agro Equipments",
  description: "Maharashtra Agro Equipments - Quality Agro Machinery and Solutions",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        {/* Navigation Bar */}
        <NavBar />
        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 sm:px-6 py-8 sm:py-12">{children}</main>
        {/* Footer */}
        <footer className="bg-white text-[#339d9e] py-8 md:py-12 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Maharashtra Agro Equipments Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div className="text-xl sm:text-2xl font-bold text-[#339d9e]">
                  Maharashtra Agro Equipments
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <a href="https://www.facebook.com/share/16weycnyNF/" target="_blank" rel="noopener noreferrer" className="text-[#339d9e] hover:text-[#2a8a8b] text-xl transition-colors">
                  <FaFacebook />
                </a>
                <a href="https://www.youtube.com/@maharashtraagroequipmentsa8158" target="_blank" rel="noopener noreferrer" className="text-[#339d9e] hover:text-[#2a8a8b] text-xl transition-colors">
                  <FaYoutube />
                </a>
                <a href="https://www.instagram.com/maharashtraagroequipments" target="_blank" rel="noopener noreferrer" className="text-[#339d9e] hover:text-[#2a8a8b] text-xl transition-colors">
                  <FaInstagram />
                </a>
                <a href="mailto:maharashtraagroequipments2020@gmail.com" className="text-[#339d9e] hover:text-[#2a8a8b] text-xl transition-colors">
                  <FaEnvelope />
                </a>
              </div>
              <div className="border-t border-gray-200 w-full pt-4 mt-4">
                <p className="text-xs sm:text-sm text-[#339d9e] text-center">© {new Date().getFullYear()} Maharashtra Agro Equipments. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
