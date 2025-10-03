'use client';
import Reveal from '@/components/Reveal';

import { useState } from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function BecomeDealerPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        existingBusiness: '',
        turnover: '',
        areaInterested: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // Send email using our API route
            const response = await fetch('/api/send-dealer-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    address: '',
                    existingBusiness: '',
                    turnover: '',
                    areaInterested: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <MaxWidthWrapper className="py-10 sm:py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <Link
                        href="/"
                        className={buttonVariants({
                            variant: 'ghost',
                            className: 'mb-6 text-[#339d9e] hover:text-[#2b7f7f]'
                        })}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold text-[#339d9e] mb-4">Become a Dealer</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join our network of trusted dealers and help bring quality agricultural machinery to farmers across India.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                    {/* Form Section */}
                    <Reveal className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Application Form</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#339d9e] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#339d9e] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                    Address *
                                </label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                    rows="3"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#339d9e] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                                    placeholder="Enter your complete address"
                                />
                            </div>

                            <div>
                                <label htmlFor="existingBusiness" className="block text-sm font-medium text-gray-700 mb-2">
                                    Existing Business *
                                </label>
                                <input
                                    type="text"
                                    id="existingBusiness"
                                    name="existingBusiness"
                                    value={formData.existingBusiness}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#339d9e] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                                    placeholder="Describe your current business"
                                />
                            </div>

                            <div>
                                <label htmlFor="turnover" className="block text-sm font-medium text-gray-700 mb-2">
                                    Annual Turnover *
                                </label>
                                <input
                                    type="text"
                                    id="turnover"
                                    name="turnover"
                                    value={formData.turnover}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#339d9e] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                                    placeholder="Enter your annual turnover"
                                />
                            </div>

                            <div>
                                <label htmlFor="areaInterested" className="block text-sm font-medium text-gray-700 mb-2">
                                    Area Interested For *
                                </label>
                                <input
                                    type="text"
                                    id="areaInterested"
                                    name="areaInterested"
                                    value={formData.areaInterested}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#339d9e] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                                    placeholder="Enter the area you're interested in"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={buttonVariants({
                                    size: 'lg',
                                    className: 'w-full bg-[#339d9e] text-white hover:bg-[#2b7f7f] shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50'
                                })}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="text-green-600 text-center py-2">
                                    Application submitted successfully!
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="text-red-600 text-center py-2">
                                    There was an error submitting your application. Please try again.
                                </div>
                            )}
                        </form>
                    </Reveal>

                    {/* Information Section */}
                    <div className="space-y-8">
                        <Reveal className="bg-gradient-to-br from-[#339d9e] to-[#2b7f7f] rounded-2xl p-6 sm:p-8 text-white">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Why Become Our Dealer?</h3>
                            <ul className="space-y-3 text-white/90">
                                <li className="flex items-start">
                                    <span className="text-white mr-2">✓</span>
                                    <span>Access to premium agricultural machinery</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-2">✓</span>
                                    <span>Comprehensive training and support</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-2">✓</span>
                                    <span>Marketing and promotional materials</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-2">✓</span>
                                    <span>Competitive pricing and margins</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-2">✓</span>
                                    <span><strong>Best ROI</strong> - Maximum returns on your investment</span>
                                </li>
                            </ul>
                        </Reveal>

                        <Reveal className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start text-gray-600">
                                    <Mail className="mr-3 h-5 w-5 text-[#339d9e] flex-shrink-0" />
                                    <span className="break-all">maharastraagroequipments2020@gmail.com</span>
                                </div>
                                <div className="flex items-start text-gray-600">
                                    <Phone className="mr-3 h-5 w-5 text-[#339d9e] flex-shrink-0" />
                                    <span>+91 8999440768</span>
                                </div>
                                <div className="flex items-start text-gray-600">
                                    <MapPin className="mr-3 h-5 w-5 text-[#339d9e] flex-shrink-0" />
                                    <span className="break-words">Maharashtra Agro Equipments<br />Regd. Office - 558/3B/3 100ft.Road, Sangli</span>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">What Happens Next?</h3>
                            <div className="space-y-3 text-gray-600">
                                <p>1. Submit your application using the form</p>
                                <p>2. Our team will review your application</p>
                                <p>3. We'll contact you within 2-3 business days</p>
                                <p>4. Schedule a meeting to discuss partnership</p>
                                <p>5. Begin your journey as our trusted dealer</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
