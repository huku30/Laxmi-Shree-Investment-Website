"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LogoSVG from "@/app/assets/icons/MainLogo.svg";
import DropdownButton from "@/app/assets/icons/DropdownButton.svg";
import ContactButton from "./contactButton";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navigationItems = [
    { name: "Home", href: "/", isSPA: true },
    { name: "Investments", href: "/Investments", isSPA: false },
    { name: "Team", href: "/team", isSPA: false },
    { name: "Gallery", href: "/Gallery", isSPA: false },
    { name: "News", href: "/News", isSPA: false },
    { name: "Notice", href: "/Notices", isSPA: false }
    
  ];

  const handleNavigation = (item: typeof navigationItems[0]) => {
    if (pathname === "/" && item.isSPA) {
      if (item.href === "/") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (item.href === "/about") {
        const aboutSection = document.querySelector('[data-section="about"]');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(item.href);
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="p-[0.4rem] pr-[0.8rem]">
          <div className="flex flex-row items-center justify-between">
            <Link href="/">
              <Image 
                src={LogoSVG}
                alt="Laxmi Shree Investment Logo"
                width={180}
                height={60}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-[3.5rem]">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative">
                  {pathname === "/" && item.isSPA ? (
                    <button
                      onClick={() => handleNavigation(item)}
                      className={`text-lg font-medium leading-[98.404%] hover:text-[#9D29C6] transition-colors ${
                        pathname === item.href ? 'text-[#9D29C6]' : 'text-[#421855]'
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-lg font-medium leading-[98.404%] hover:text-[#9D29C6] transition-colors ${
                        pathname === item.href ? 'text-[#9D29C6]' : 'text-[#421855]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
              
            <div className="md:flex md:flex-row md:gap-[3rem]">
              <div className="hidden md:flex lg:flex xl:md:flex">
                <ContactButton/>
              </div>
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden md:hidden mobile-menu-container"
                onClick={toggleMobileMenu}
              >
                <Image 
                  src={DropdownButton}
                  alt="Menu Button"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 mobile-menu-container">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-[0.4rem] pr-[0.8rem] border-b border-gray-200">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image 
                  src={LogoSVG}
                  alt="Laxmi Shree Investment Logo"
                  width={180}
                  height={60}
                />
              </Link>
              <button 
                onClick={toggleMobileMenu}
                className="p-2"
              >
                <svg 
                  className="w-6 h-6 text-[#421855]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex flex-col h-full">
              {/* Navigation Items */}
              <div className="flex-1 px-6 py-8">
                <div className="flex flex-col space-y-6">
                  {navigationItems.map((item, index) => (
                    <div key={index}>
                      {pathname === "/" && item.isSPA ? (
                        <button
                          onClick={() => handleNavigation(item)}
                          className={`text-2xl font-medium text-left w-full py-3 hover:text-[#9D29C6] transition-colors ${
                            pathname === item.href ? 'text-[#9D29C6]' : 'text-[#421855]'
                          }`}
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block text-2xl font-medium py-3 hover:text-[#9D29C6] transition-colors ${
                            pathname === item.href ? 'text-[#9D29C6]' : 'text-[#421855]'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Button at Bottom */}
              <div className="px-6 pb-8">
                <ContactButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}