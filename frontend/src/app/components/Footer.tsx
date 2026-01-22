"use client";

import Link from "next/link";
import Image from "next/image";
import MainLogo from "../assets/icons/MainLogo.svg";
import { useState, useEffect } from "react";

// Mail Icon
const MailIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 25 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 md:w-6 md:h-6"
  >
    <path 
      d="M22.4308 7L13.4398 12.727C13.1347 12.9042 12.7881 12.9976 12.4353 12.9976C12.0824 12.9976 11.7359 12.9042 11.4308 12.727L2.43079 7M4.43079 4H20.4308C21.5354 4 22.4308 4.89543 22.4308 6V18C22.4308 19.1046 21.5354 20 20.4308 20H4.43079C3.32622 20 2.43079 19.1046 2.43079 18V6C2.43079 4.89543 3.32622 4 4.43079 4Z" 
      stroke="#421855" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Phone Icon
const PhoneIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 25 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 md:w-6 md:h-6"
  >
    <path 
      d="M14.2628 16.568C14.4693 16.6628 14.702 16.6845 14.9225 16.6294C15.143 16.5744 15.3381 16.4458 15.4758 16.265L15.8308 15.8C16.0171 15.5516 16.2586 15.35 16.5364 15.2111C16.8141 15.0723 17.1203 15 17.4308 15H20.4308C20.9612 15 21.4699 15.2107 21.845 15.5858C22.2201 15.9609 22.4308 16.4696 22.4308 17V20C22.4308 20.5304 22.2201 21.0391 21.845 21.4142C21.4699 21.7893 20.9612 22 20.4308 22C15.6569 22 11.0785 20.1036 7.70286 16.7279C4.32721 13.3523 2.43079 8.7739 2.43079 4C2.43079 3.46957 2.6415 2.96086 3.01657 2.58579C3.39165 2.21071 3.90035 2 4.43079 2H7.43079C7.96122 2 8.46993 2.21071 8.845 2.58579C9.22007 2.96086 9.43079 3.46957 9.43079 4V7C9.43079 7.31049 9.3585 7.61672 9.21964 7.89443C9.08079 8.17214 8.87918 8.41371 8.63079 8.6L8.16279 8.951C7.9792 9.09118 7.84981 9.29059 7.79658 9.51535C7.74335 9.74012 7.76957 9.97638 7.87079 10.184C9.23747 12.9599 11.4852 15.2048 14.2628 16.568Z" 
      stroke="#421855" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// WhatsApp Icon
const WhatsAppIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 25 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 md:w-6 md:h-6"
  >
    <path 
      d="M5.7843 5.25333C9.48895 1.54878 15.4722 1.54891 19.1769 5.25333C20.8941 7.07046 21.925 9.44063 21.8312 11.8813V11.8998C21.8312 17.1237 17.6546 21.3002 12.4308 21.3002C10.9154 21.3002 9.39581 20.9212 7.96594 20.1586L7.79309 20.0668L7.60266 20.1166L3.1427 21.2943L4.31262 17.0326L4.36731 16.8334L4.26672 16.6547C2.17434 12.9455 2.74681 8.29082 5.7843 5.25333ZM19.6075 6.86368C16.9832 3.12842 11.8772 1.90407 7.86047 4.47891C3.73458 7.12391 2.4621 12.4243 5.00208 16.6576L5.00793 16.6674L5.01477 16.6772L5.08899 16.7885L4.34778 19.5707L4.12708 20.3979L4.95618 20.184L7.83899 19.4398L7.95325 19.516L7.97278 19.5287L7.99329 19.5404C9.35696 20.2747 10.8382 20.6996 12.4308 20.6996C14.1369 20.6996 15.7265 20.1665 17.0929 19.3256C21.2384 16.7744 22.3947 11.3622 19.8566 7.2377L19.8536 7.23282L19.6075 6.86368ZM9.37903 7.8002C9.39665 7.85729 9.41749 7.94346 9.43567 8.07071L9.44446 8.13028L9.46692 8.18594C9.56838 8.43958 9.74475 8.8687 9.9093 9.24844C9.99142 9.43796 10.0729 9.61974 10.1407 9.76212C10.1743 9.83254 10.2067 9.89882 10.2365 9.95352C10.2401 9.96019 10.2443 9.96717 10.2482 9.97403L10.2306 9.99258V10.1537C10.228 10.1598 10.2252 10.1675 10.2208 10.1762C10.2136 10.1907 10.2045 10.2045 10.1964 10.2172C10.0668 10.3026 9.97356 10.4028 9.9093 10.4799C9.87025 10.5267 9.8326 10.5768 9.81165 10.6039C9.78499 10.6384 9.77746 10.6469 9.77747 10.6469C9.59892 10.8255 9.34738 11.2525 9.58313 11.724L9.59778 11.7514L9.61438 11.7777C10.0339 12.4071 10.5559 13.0317 11.0773 13.5531L11.0929 13.5697L11.1105 13.5844C11.7548 14.1213 12.4989 14.5439 13.2335 14.8588C13.3801 14.9281 13.5757 14.9879 13.7892 14.9574C14.02 14.9244 14.2115 14.7941 14.3351 14.5971C14.4589 14.4608 14.61 14.2607 14.7306 14.1C14.8923 13.8844 15.0159 13.722 15.0841 13.6537C15.0887 13.6491 15.0932 13.6452 15.0968 13.642C15.1 13.6434 15.1037 13.645 15.1075 13.6469C15.2157 13.7009 15.5997 13.8809 15.9689 14.0531C16.3492 14.2306 16.7145 14.4015 16.8068 14.4477L16.9855 14.5365C17.0122 14.7554 16.9865 14.9532 16.8956 15.1479C16.5434 15.6645 16.0613 16.0332 15.5597 16.1049L15.549 16.1068C14.9939 16.1993 14.5974 16.1877 14.2169 16.0356L14.174 16.019L14.129 16.0102L13.9689 15.9731C13.6092 15.8804 13.3032 15.7312 12.838 15.5443C11.2356 14.7888 9.90146 13.5567 8.8429 12.017L8.83704 12.0082L8.83118 12.0004L8.64172 11.727C8.23333 11.0886 8.01478 10.3874 7.93176 9.67422C7.93799 9.02626 8.17885 8.45937 8.68469 7.95352C8.68593 7.95238 8.6899 7.94915 8.69641 7.94376C8.70537 7.93635 8.71679 7.92614 8.73157 7.91544C8.76162 7.89368 8.79835 7.87097 8.83606 7.85001C8.87462 7.82858 8.90815 7.81275 8.93274 7.80411C8.93805 7.80225 8.94231 7.80111 8.94543 7.8002H9.37903Z" 
      fill="#421855" 
      stroke="#5E2D91"
    />
  </svg>
);

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Get current year in Nepal timezone
    const getNepalYear = () => {
      const nepalTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kathmandu"
      });
      return new Date(nepalTime).getFullYear();
    };

    setCurrentYear(getNepalYear());

    // Update year at midnight Nepal time
    const checkYear = setInterval(() => {
      setCurrentYear(getNepalYear());
    }, 60000); // Check every minute

    return () => clearInterval(checkYear);
  }, []);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Investment", href: "/Investments" },
    { name: "Contact Us", href: "/contact" }
  ];

  const contactInfo = [
    {
      icon: <MailIcon />,
      text: "laxmishree2005@gmail.com",
      href: "mailto:laxmishree2005@gmail.com"
    },
    {
      icon: <PhoneIcon />,
      text: "01-4533311",
      href: "tel:01-4533311"
    },
    {
      icon: <WhatsAppIcon />,
      text: "+977 9851193622",
      href: "https://wa.me/9779851193622"
    }
  ];

  return (
    <footer className="bg-white relative">
      {/* Soft shadow at the top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-gray-200/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Main Content - Desktop Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Logo and Description Section */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Logo */}
              <Link href="/" className="w-fit">
                <Image
                  src={MainLogo}
                  alt="Laxmi Shree Investments Logo"
                  width={240}
                  height={144}
                  className="w-[160px] h-[96px] md:w-[180px] md:h-[108px] lg:w-[200px] lg:h-[120px] xl:w-[220px] xl:h-[132px] 3xl:w-[240px] 3xl:h-[144px]"
                />
              </Link>

              {/* Description */}
              <p className="text-[#421855] text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-md">
Invest smart with Laxmi Shree Investment — your trusted partner in building a secure financial future through strategic insights, expert guidance, and opportunities that grow with you.              </p>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3 flex flex-col gap-3 md:gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#421855] text-sm md:text-base lg:text-lg font-medium leading-relaxed hover:text-[#9D29C6] transition-colors duration-300 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-4 flex flex-col gap-3 md:gap-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('https') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('https') ? 'noopener noreferrer' : ''}
                  className="flex items-center gap-3 hover:text-[#9D29C6] transition-colors duration-300 group w-fit"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {contact.icon}
                  </div>
                  <span className="text-[#421855] text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#35115F] opacity-40" />

          {/* Copyright */}
          <div className="text-center text-[#421855] text-sm md:text-base lg:text-lg font-medium leading-relaxed">
            Copyright {currentYear}©️ LaxmiShree Investment. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}