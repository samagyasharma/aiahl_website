import React, { useState } from 'react';
import Slider from 'react-slick';
import { 
  MagnifyingGlassIcon, 
  BuildingOffice2Icon, 
  UserGroupIcon, 
  DocumentTextIcon, 
  ClipboardDocumentListIcon,
  CalendarIcon,
  ArrowRightIcon,
  MapIcon,
  DocumentIcon,
  ShieldCheckIcon,
  DocumentDuplicateIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carousel.css';

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

  const latestUpdates = [
    {
      date: '12 June 2025',
      title: 'Tender for office renovation released',
    },
    {
      date: '5 June 2025',
      title: 'Investor meeting schedule published',
    },
    {
      date: '1 June 2025',
      title: 'New property acquisition announcement',
    },
    {
      date: '28 May 2025',
      title: 'Quarterly financial results published',
    }
  ];

  const footerLinks = [
    { title: 'Sitemap', icon: <MapIcon className="h-5 w-5" /> },
    { title: 'RTI', icon: <DocumentIcon className="h-5 w-5" /> },
    { title: 'Privacy Policy', icon: <ShieldCheckIcon className="h-5 w-5" /> },
    { title: 'Terms & Conditions', icon: <DocumentDuplicateIcon className="h-5 w-5" /> }
  ];

  const carouselImages = [
    {
      id: 1,
      title: 'Centaur Hotel Delhi',
      description: 'A premier hospitality property in the heart of Delhi'
    },
    {
      id: 2,
      title: 'Air India Building Mumbai',
      description: 'Historic landmark in Mumbai\'s business district'
    },
    {
      id: 3,
      title: 'Airlines House Kolkata',
      description: 'Strategic location in Kolkata\'s commercial hub'
    },
    {
      id: 4,
      title: 'Regional Office Chennai',
      description: 'Modern office space in Chennai\'s business center'
    }
  ];

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  function CustomNextArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    );
  }

  function CustomPrevArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
    );
  }

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
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Slider {...carouselSettings}>
                  {carouselImages.map((image) => (
                    <div key={image.id} className="relative h-[400px]">
                      <div className="absolute inset-0 bg-gray-200"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                        <p className="text-gray-200 text-sm">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="w-full py-16 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Updates</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {latestUpdates.map((update) => (
                  <div key={update.date} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <CalendarIcon className="h-6 w-6 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-500">{update.date}</p>
                          <p className="text-gray-900 font-medium">{update.title}</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800">
                        <ArrowRightIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="w-full py-16 bg-white">
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

        {/* Footer */}
        <footer className="w-full bg-gray-900 text-white py-12">
          <div className="max-w-[1920px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {footerLinks.map((link) => (
                <a
                  key={link.title}
                  href={`#${link.title.toLowerCase().replace(' ', '-')}`}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm mb-2">
                Last Updated: June 2025
              </p>
              <p className="text-gray-400 text-sm">
                Best viewed on Chrome / Edge / Firefox at 1366×768 or higher
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home; 