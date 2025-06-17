import React, { useState, useEffect } from 'react';
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
  ChevronRightIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carousel.css';

// Import images
import logo from '../assets/images/logo.png';
import carouselImage1 from '../assets/images/carousel_image1.png';
import carouselImage2 from '../assets/images/carousel_image2.png';
import carouselImage3 from '../assets/images/carousel_image3.png';
import carouselImage5 from '../assets/images/carousel_image5.png';
import facilitation from '../assets/images/facilitation.png';
import facilitation2 from '../assets/images/facilitation2.png';
import pm from '../assets/images/pm.png';
import cmd from '../assets/images/cmd.png';

const Home = () => {
  const [fontSize, setFontSize] = useState(1);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
      image: carouselImage1,
      title: 'AIAHL Building',
      description: 'Our headquarters in New Delhi'
    },
    {
      id: 2,
      image: carouselImage2,
      title: 'Corporate Office',
      description: 'Modern workspace in the heart of the city'
    },
    {
      id: 3,
      image: carouselImage3,
      title: 'Business Center',
      description: 'Strategic location for business operations'
    },
    {
      id: 4,
      image: carouselImage5,
      title: 'Regional Office',
      description: 'Expanding our presence across India'
    },
    {
      id: 5,
      image: facilitation,
      title: 'Facilitation Event',
      description: 'Supporting business growth and development'
    },
    {
      id: 6,
      image: facilitation2,
      title: 'Corporate Event',
      description: 'Building strong business relationships'
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Scrolling News Marquee */}
      <div className="w-full bg-red-600 text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap hover:pause text-base md:text-lg font-medium">
          <span className="inline-block mx-4">
            Final Report –CGHS face recognition project
            <span className="mx-2 align-middle inline-block bg-yellow-400 text-red-700 font-bold px-2 py-0.5 rounded text-xs ml-2">New</span>
          </span>
          <span className="inline-block mx-4">
            Committee Report on current assets
            <span className="mx-2 align-middle inline-block bg-yellow-400 text-red-700 font-bold px-2 py-0.5 rounded text-xs ml-2">New</span>
          </span>
          <span className="inline-block mx-4">
            If any feedback please contact here
            <span className="mx-2 align-middle inline-block bg-yellow-400 text-red-700 font-bold px-2 py-0.5 rounded text-xs ml-2">New</span>
          </span>
        </div>
      </div>

      {/* Government Branding Bar */}
      <div className="w-full bg-[#ffb000] text-black py-2">
        <div className="max-w-[1920px] mx-auto px-6 flex justify-between items-center">
          <div className="text-sm font-bold">
            भारत सरकार | Government of India
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setFontSize(prev => Math.max(0.8, prev - 0.1))} 
                className="text-black hover:text-gray-700 font-bold"
              >
                A-
              </button>
              <button 
                onClick={() => setFontSize(1)} 
                className="text-black hover:text-gray-700 font-bold"
              >
                A
              </button>
              <button 
                onClick={() => setFontSize(prev => Math.min(1.2, prev + 0.1))} 
                className="text-black hover:text-gray-700 font-bold"
              >
                A+
              </button>
            </div>
            <button 
              onClick={toggleTheme}
              className="p-1 hover:bg-yellow-700 rounded text-black hover:text-white transition-colors"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'hi')}
              className="bg-transparent border border-black rounded px-2 py-1 text-black"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
            <a href="#screen-reader" className="text-black hover:text-gray-700">Screen Reader Access</a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-[1920px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="h-16 flex items-center">
              <img src={logo} alt="AIAHL Logo" className="h-full w-auto" />
            </div>

            {/* Title */}
            <div className="text-center flex-1">
              <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">
                एआई एसेट्स होल्डिंग लिमिटेड
              </h1>
              <h2 className="text-lg text-gray-600 dark:text-gray-300 mb-1">
                (पूर्व में एयर इंडिया एसेट्स होल्डिंग लिमिटेड)
              </h2>
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">
                AI ASSETS HOLDING LIMITED
              </h3>
              <h4 className="text-lg text-gray-600 dark:text-gray-300">
                (Formerly AIR INDIA ASSETS HOLDING LIMITED)
              </h4>
            </div>

            {/* Search Icon */}
            <div className="w-32 flex justify-end">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-4">
            <ul className="flex justify-center space-x-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 font-medium"
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
        <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-0 md:py-9">
          <div className="max-w-[1920px] mx-auto px-6 flex flex-col md:flex-row items-stretch min-h-[220px] md:min-h-[242px]">
            {/* Left Column */}
            <div className="relative flex-1 flex items-center justify-center bg-blue-100 md:bg-blue-100 md:rounded-r-[30vw] md:rounded-l-none p-5 md:p-7 min-h-[176px] md:min-h-[242px] overflow-hidden">
              <div className="z-10 w-full">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">Welcome to AI Assets Holding Limited</h1>
                <p className="text-base md:text-lg text-gray-700 mb-4">A Government of India Special Purpose Vehicle</p>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors">Explore More</button>
              </div>
              {/* Decorative semicircle for desktop */}
              <div className="hidden md:block absolute right-0 top-0 h-full w-[25%] bg-blue-200 rounded-r-[30vw]" style={{zIndex:1}}></div>
            </div>
            {/* Right Column */}
            <div className="flex-1 flex flex-col justify-center items-center gap-4 bg-blue-50 py-4 md:py-0 min-h-[176px] md:min-h-[242px]">
              {/* PM Box */}
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-4 w-full max-w-xs mx-auto">
                <img src={pm} alt="Shri Narendra Modi" className="h-24 w-24 rounded-full object-cover border-4 border-blue-200 mb-2" />
                <div className="text-center">
                  <div className="font-bold text-base text-gray-900">Shri Narendra Modi</div>
                  <div className="text-xs text-gray-600">Hon'ble Prime Minister of India</div>
                </div>
              </div>
              {/* CMD Box */}
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-4 w-full max-w-xs mx-auto">
                <img src={cmd} alt="Shri Amit Kumar" className="h-24 w-24 rounded-full object-cover border-4 border-blue-200 mb-2" />
                <div className="text-center">
                  <div className="font-bold text-base text-gray-900">Shri Amit Kumar</div>
                  <div className="text-xs text-gray-600">Hon'ble Chairman &amp; Managing Director, AIAHL</div>
                </div>
              </div>
            </div>
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
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
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