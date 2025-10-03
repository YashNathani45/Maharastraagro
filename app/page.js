'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { FaFacebook, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <MaxWidthWrapper className="mb-24 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* AGROVATOR Logo */}
            <div className="mx-auto lg:mx-0 mb-8 flex max-w-fit items-center justify-center">
              <div className="flex flex-col items-center lg:items-start">
                {/* Main Logo */}
                <Image
                  src="/agrologo.png"
                  alt="AGROVATOR - Farmer's Friend"
                  width={300}
                  height={120}
                  className="w-auto h-20 lg:h-24 mix-blend-multiply"
                  priority
                />
              </div>
            </div>
            <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
              <span className="text-[#339d9e]">Maharashtra Agro Equipments</span>
            </h1>
            <p className="mt-6 max-w-2xl text-zinc-700 sm:text-lg lg:mx-0">
              Trusted partner for innovative and reliable agricultural machinery across India.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                className={buttonVariants({ size: 'lg', className: 'bg-[#339d9e] text-white hover:bg-[#2b7f7f] shadow-lg hover:shadow-xl transition-all duration-300' })}
                href='/products'>
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                className={buttonVariants({ size: 'lg', className: 'border border-[#339d9e] text-[#339d9e] bg-white hover:bg-[#f4fdf9] shadow-lg hover:shadow-xl transition-all duration-300' })}
                href='/become-dealer'>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <Reveal className="relative order-1 lg:order-2" delay={0.1}>
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/Main.JPG"
                alt="Agrovator RF Series tractor with Maharashtra Agro Equipments implement"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-3xl"></div>
            </div>

            {/* Floating Product Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-lg font-bold text-[#339d9e]">Agrovator RF Series</div>
                <div className="text-sm text-gray-600 mb-2">Advanced Technology</div>
                <div className="w-16 h-1 bg-[#339d9e] mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute -top-6 -left-6 bg-[#339d9e] text-white rounded-2xl shadow-xl p-4 border-2 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold">RF</div>
                <div className="text-xs opacity-90">Series</div>
              </div>
            </div>
          </Reveal>
        </div>
      </MaxWidthWrapper>

      {/* About Us */}
      <Reveal className="max-w-5xl mx-auto text-center px-6 mt-32">
        <h2 className="text-4xl font-semibold text-[#339d9e] mb-6">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Maharashtra Agro Equipments delivers trusted, durable, and advanced agricultural machinery to empower
          farmers across India. Our goal is to combine innovation with integrity, helping agriculture thrive sustainably.
        </p>
      </Reveal>

      {/* Why Choose Us */}
      <Reveal className="px-6 mt-24">
        <h2 className="text-3xl font-semibold text-center text-[#339d9e] mb-14">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: '🛠️',
              title: 'Premium Quality',
              desc: 'Sturdy and efficient machines built to endure, perform, and deliver value.',
            },
            {
              icon: '💡',
              title: 'Innovation Driven',
              desc: 'We deliver tech-forward solutions that simplify and uplift Indian agriculture.',
            },
            {
              icon: '🤝',
              title: 'Reliable Support',
              desc: 'Excellent after-sales support and nationwide service you can count on.',
            },
          ].map((item, idx) => (
            <Reveal
              key={item.title}
              className="rounded-2xl border border-gray-200 shadow hover:shadow-lg transition-all duration-300 p-8 text-center bg-white hover:bg-gray-50"
              delay={0.05 * idx}
            >
              <div className="bg-[#339d9e] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto text-2xl mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* Stats Section */}
      <Reveal className="bg-[#339d9e] py-16 rounded-3xl mx-6 mt-24 border border-white shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-5xl mx-auto">
          <div>
            <div className="text-5xl font-bold text-white mb-2">1000+</div>
            <div className="text-white text-lg font-light">Happy Customers</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-white mb-2">10+</div>
            <div className="text-white text-lg font-light">Product Varieties</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-white mb-2">5+</div>
            <div className="text-white text-lg font-light">Years of Experience</div>
          </div>
        </div>
      </Reveal>

      {/* Contact Section */}
      <Reveal className="px-6 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#339d9e] mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Connect with us through our social media channels or reach out directly via email.
          </p>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full">
              {/* Email */}
              <div className="flex items-center gap-3 max-w-full">
                <FaEnvelope className="text-[#339d9e] text-xl flex-shrink-0" />
                <a
                  href="mailto:maharashtraagroequipments2020@gmail.com"
                  className="text-[#339d9e] hover:text-[#2b7f7f] font-medium transition-colors break-all"
                >
                  maharashtraagroequipments2020@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-gray-200">
              <a
                href="https://www.facebook.com/share/16weycnyNF/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#339d9e] hover:text-[#2b7f7f] text-2xl transition-colors"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/@maharashtraagroequipmentsa8158"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#339d9e] hover:text-[#2b7f7f] text-2xl transition-colors"
                title="Subscribe to our YouTube channel"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/maharashtraagroequipments"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#339d9e] hover:text-[#2b7f7f] text-2xl transition-colors"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Become a Dealer Section */}
      <Reveal className="px-6 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#339d9e] mb-6">Become a Dealer</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Join our network of trusted dealers and help bring quality agricultural machinery to farmers across India.
          </p>
          <Link
            className={buttonVariants({ size: 'lg', className: 'bg-[#339d9e] text-white hover:bg-[#2b7f7f] shadow-lg hover:shadow-xl transition-all duration-300' })}
            href='/become-dealer'>
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
