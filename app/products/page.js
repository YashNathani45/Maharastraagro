'use client';
import Reveal from '@/components/Reveal';
import Image from 'next/image';

const product = {
    name: 'Agrovator RF Series',
    subtitle: "Farmer's Friend",
    category: 'Rotary Tiller with Ridger',
    images: [
        '/product/1.jpg',
        '/product/2.JPG',
        '/product/3.JPG',
        '/product/4.JPG'
    ],
    summary:
        'Compact & powerful reverse-forward series that tills and earths up in a single operation. Suitable for row-to-row plantations (> 4 ft). Saves fuel, time and labour.',
    features: [
        'Heavy duty chain drive',
        'Special design ridger',
        'J-Type 18 blade shaft'
    ],
    specs: [
        { label: 'Working Width (mm)', value: '585' },
        { label: 'Overall Width (mm)', value: '780' },
        { label: 'Overall Height (mm)', value: '830' },
        { label: 'No. of Blades', value: '18' },
        { label: 'PTO HP Required', value: '13 – 25' }
    ]
};

export default function ProductsPage() {
    return (
        <div className="space-y-12">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center justify-center gap-2">
                    <span className="inline-block bg-[#339d9e]/10 text-[#2b7f7f] px-3 py-1 rounded-full text-xs font-medium border border-[#339d9e]/20">{product.category}</span>
                </div>
            </div>

            <section className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <Reveal className="p-6 lg:p-10 bg-gray-50">
                        <div className="grid grid-cols-2 gap-4">
                            {product.images.map((src, idx) => (
                                <Reveal key={src} delay={0.05 * idx} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white shadow">
                                    <Image
                                        src={src}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover"
                                        quality={70}
                                        priority={idx === 0}
                                    />
                                </Reveal>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal className="p-6 lg:p-10" delay={0.1}>
                        <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
                        <p className="text-gray-600 mt-4 leading-relaxed">{product.summary}</p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Require HP: 18 – 36</span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-50 text-sky-700 border border-sky-100">Require PTO: 14 – 25</span>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.features.map((f) => (
                                    <span key={f} className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm border border-gray-200">{f}</span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Specifications</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {product.specs.map((s) => (
                                    <div key={s.label} className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
                                        <span className="text-gray-600">{s.label}</span>
                                        <span className="font-semibold text-gray-900">{s.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href="/agrovator-rf.pdf" download className="bg-[#339d9e] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#2b7f7f] transition-colors">Download Brochure (PDF)</a>
                            <a href="/become-dealer" className="border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:border-[#339d9e] hover:text-[#339d9e] transition-colors">Enquire</a>

                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}