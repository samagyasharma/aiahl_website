import React, { useState } from 'react';
import { MagnifyingGlassIcon, BuildingOffice2Icon, UserGroupIcon, DocumentTextIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const [fontSize, setFontSize] = useState(1);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const navLinks = [
    'About Us',
    'Careers',
    'Tenders',
    'Vigilance',
    'Investors',
    'Gallery',
    'Contact Us'
  ];

  const quickLinks = [
    {
      title: 'Medical Facilities',
      description: 'Access healthcare services and facilities',
      icon: <BuildingOffice2Icon className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Properties',
      description: 'View our property portfolio and assets',
      icon: <BuildingOffice2Icon className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Investors',
      description: 'Information for potential investors',
      icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Tenders',
      description: 'Current and upcoming tenders',
      icon: <ClipboardDocumentListIcon className="h-8 w-8 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Accessibility Bar */}
      <div className="w-full bg-blue-900 text-white py-2">
        <div className="max-w-[1920px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={() => setFontSize(prev => Math.max(0.8, prev - 0.1))} className="hover:text-blue-200">A-</button>
            <button onClick={() => setFontSize(1)} className="hover:text-blue-200">A</button>
            <button onClick={() => setFontSize(prev => Math.min(1.2, prev + 0.1))} className="hover:text-blue-200">A+</button>
            <a href="#screen-reader" className="hover:text-blue-200">Screen Reader</a>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLanguage(prev => prev === 'en' ? 'hi' : 'en')}
              className="hover:text-blue-200"
            >
              {language === 'en' ? 'हिंदी' : 'English'}
            </button>
            <a href="#main-content" className="hover:text-blue-200">Skip to main content</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="w-full bg-white shadow-md">
        <div className="max-w-[1920px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-32 h-16 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Logo</span>
            </div>

            {/* Title */}
            <div className="text-center flex-1">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">
                एआई एसेट्स होल्डिंग लिमिटेड
              </h1>
              <h2 className="text-lg text-gray-600 mb-1">
                (पूर्व में एयर इंडिया एसेट्स होल्डिंग लिमिटेड)
              </h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                AI ASSETS HOLDING LIMITED
              </h3>
              <h4 className="text-lg text-gray-600">
                (Formerly AIR INDIA ASSETS HOLDING LIMITED)
              </h4>
            </div>

            {/* Search Icon */}
            <div className="w-32 flex justify-end">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-6">
            <ul className="flex justify-center space-x-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-700 hover:text-blue-900 font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="max-w-[1920px] mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to AI Assets Holding Limited
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              A Government of India Special Purpose Vehicle
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors">
              Explore More
            </button>
          </div>
        </section>

        {/* About AIAHL Section */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-[1920px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About AIAHL</h2>
                <p className="text-gray-700 mb-6">
                  AI Assets Holding Limited (AIAHL) is a Special Purpose Vehicle (SPV) of the Government of India, 
                  established to manage and optimize the assets of Air India. Our mission is to ensure efficient 
                  utilization of these assets while maintaining transparency and accountability.
                </p>
                <button className="text-blue-900 font-medium hover:text-blue-800">
                  Read More →
                </button>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Building Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="w-full py-16 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link) => (
                <div
                  key={link.title}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="mb-4">{link.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{link.title}</h3>
                  <p className="text-gray-600">{link.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home; 