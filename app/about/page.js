'use client';
import Reveal from '@/components/Reveal';
import Image from 'next/image';

const companyValues = [
    {
        title: "Quality",
        description: "We are committed to delivering high-quality products that meet the needs of our customers.",
        icon: "⭐"
    },
    {
        title: "Innovation",
        description: "We continuously strive to innovate and improve our products and services.",
        icon: "🚜"
    },
    {
        title: "Customer Satisfaction",
        description: "We prioritize customer satisfaction and work hard to build long-term relationships with our customers.",
        icon: "🤝"
    },
    {
        title: "Sustainability",
        description: "We aim to contribute to sustainable agriculture practices and reduce our environmental footprint.",
        icon: "🌱"
    }
];

export default function AboutPage() {
    return (
        <div className="space-y-20 max-w-7xl mx-auto px-6">
            {/* Hero Section */}
            <div className="relative">
                <div className="bg-gradient-to-r from-[#339d9e] to-[#2b7f7f] rounded-3xl p-16 text-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                    <div className="relative z-10">
                        <h1 className="text-5xl font-bold mb-6">About Maharashtra Agro Equipments</h1>
                        <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
                            Empowering farmers and agricultural communities with cutting-edge technology, reliable products,
                            and exceptional customer service since 2020.
                        </p>
                    </div>
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-20">
                        <Image
                            src="/Main.JPG"
                            alt="Agricultural Equipment"
                            fill
                            className="object-cover rounded-3xl"
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <Reveal className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Maharashtra Agro Equipments was founded in 2020 with a vision to revolutionize the agricultural
                            industry in India. Our journey began with a passion for innovation and a commitment to providing
                            high-quality farming equipment to farmers and agricultural businesses.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Over the years, we have grown from a small startup to a reputable company, serving customers
                            across Maharashtra and beyond. Our team of dedicated professionals has worked tirelessly to
                            develop innovative products, expand our product range, and build strong relationships with our
                            customers and partners.
                        </p>
                    </div>
                    <Reveal className="relative" delay={0.1}>
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative h-80">
                            <Image
                                src="/2J6A0063.JPG"
                                alt="Agricultural Equipment in Action"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={70}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    </Reveal>
                </div>
            </Reveal>

            {/* Our Mission Section */}
            <Reveal className="max-w-6xl mx-auto">
                <div className="relative bg-gradient-to-r from-[#339d9e] to-[#2b7f7f] rounded-3xl p-12 text-white shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
                        <p className="text-xl text-center max-w-4xl mx-auto leading-relaxed opacity-95">
                            Our mission is to empower farmers and agricultural communities by providing them with cutting-edge
                            technology, reliable products, and exceptional customer service. We strive to be the leading
                            manufacturer and supplier of agricultural equipment in India, known for our quality, durability,
                            and customer satisfaction.
                        </p>
                    </div>
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-20">
                        <Image
                            src="/2J6A0068.JPG"
                            alt="Agricultural Mission"
                            fill
                            className="object-cover rounded-3xl"
                            sizes="100vw"
                            quality={70}
                        />
                    </div>
                </div>
            </Reveal>

            {/* Our Values Section */}
            <Reveal className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {companyValues.map((value, index) => (
                        <Reveal key={index} delay={0.05 * index} className="relative bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#339d9e]/5 to-[#2b7f7f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                                <h3 className="font-bold text-xl text-gray-900 mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Reveal>

            {/* Our Team Section */}
            <Reveal className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Our team consists of experienced professionals with expertise in agriculture, engineering, and
                            customer service. We are passionate about our work and dedicated to delivering exceptional results.
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-[#339d9e] rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">MAE</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">Expert Team</h4>
                                <p className="text-gray-600 text-sm">Dedicated Professionals</p>
                            </div>
                        </div>
                    </div>
                    <Reveal className="relative" delay={0.1}>
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative h-80">
                            <Image
                                src="/2J6A0071.JPG"
                                alt="Our Team at Work"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={70}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    </Reveal>
                </div>
            </Reveal>

            {/* Equipment Showcase */}
            <Reveal className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Equipment in Action</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See our agricultural machinery in real-world applications, helping farmers achieve better results.
                    </p>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#339d9e] scrollbar-track-gray-100">
                        {['/eqiup/1.JPG', '/eqiup/2.JPG', '/eqiup/3.JPG', '/eqiup/4.JPG', '/eqiup/5.JPG', '/eqiup/6.JPG'].map((src) => (
                            <div key={src} className="flex-shrink-0 relative w-80 h-64">
                                <Image
                                    src={src}
                                    alt="Agricultural Equipment"
                                    fill
                                    className="object-cover rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 80vw, 320px"
                                    quality={70}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>

            {/* Become a Dealer Section */}
            <Reveal className="max-w-6xl mx-auto">
                <div className="relative bg-gradient-to-r from-[#339d9e] to-[#2b7f7f] rounded-3xl p-12 text-center text-white shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Become a Dealer</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                            Join hundreds of satisfied farmers who trust Maharashtra Agro Equipments for their agricultural needs. Become part of our dealer network and help bring quality agricultural machinery to farmers across India.
                        </p>
                        <div className="flex justify-center">
                            <a href="/become-dealer" className="bg-white text-[#339d9e] font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                Become a Dealer
                            </a>
                        </div>
                    </div>
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-20">
                        <Image
                            src="/IMG_9269.JPG"
                            alt="Agricultural Partnership"
                            fill
                            className="object-cover rounded-3xl"
                            sizes="100vw"
                            quality={70}
                        />
                    </div>
                </div>
            </Reveal>
        </div>
    );
}