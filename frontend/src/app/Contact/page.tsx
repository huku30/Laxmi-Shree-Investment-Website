"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const ContactDetails = () => (
  <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 w-full">
    <h2 className="text-[#35115F] text-center lg:text-left text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem] xl:text-[1.625rem] 3xl:text-[1.875rem] font-semibold leading-[140%] capitalize w-full">
      Contact Details
    </h2>
    
    <div className="flex flex-col items-center lg:items-start gap-3 md:gap-4 w-full">
      <div className="text-[#9D29C6] text-[1.15rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.2rem] 3xl:text-[1.5rem] font-medium leading-relaxed text-center lg:text-left">
        Phone: 01-4533311
      </div>
      <div className="text-[#9D29C6] text-[1.15rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.2rem] 3xl:text-[1.5rem] font-medium leading-relaxed text-center lg:text-left">
        Email: laxmishree2005@gmail.com
      </div>
      <div className="text-[#9D29C6] text-[1.15rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.2rem] 3xl:text-[1.5rem] font-medium leading-relaxed text-center lg:text-left">
        Whatsapp: +977 9851193622
      </div>
    </div>
  </div>
);

const GoogleMap = () => (
  <div className="w-full h-[250px] md:h-[300px] lg:h-[364px] rounded-[10px] border border-[#5E2D91] overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6947310358896!2d85.31673831506216!3d27.69769998279441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb725c06645532aec!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1647876543210!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Laxmi Shree Investment Location"
    />
  </div>
);

export default function Contact() {
  const faqItems = [
    {
      question: "What services does LaxmiShree Investments provide?",
      answer: "We offer Primary Share Investments, Secondary Market Trading, Right Share Investment, Portfolio Management, Market Research & Analysis, and Risk Assessment & Advisory."
    },
    {
      question: "How do I get started as a new investor?",
      answer: "Simply reach out through our contact form, email, or visit our office. Our team will guide you through account opening, KYC, and investment planning."
    },
    {
      question: "Can I invest if I am new to the stock market?",
      answer: "Absolutely. Our experts provide step-by-step guidance, from understanding IPOs and right shares to building your first portfolio."
    },
    {
      question: "How do you decide which investment is right for me?",
      answer: "We assess your financial goals, risk appetite, and time horizon before recommending a customized investment strategy."
    },
    {
      question: "Do you help with portfolio diversification?",
      answer: "Yes. We design diversified portfolios across various asset classes to balance risk and return."
    },
    {
      question: "What are the risks of investing?",
      answer: "All investments carry some risk. Our role is to identify, minimize, and manage risks through expert advisory and research-backed strategies."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Main Content */}
        <div className="px-[1.4rem] md:px-[2.5rem] lg:px-[4rem] xl:px-[5rem] 3xl:px-[8rem] pt-[6.5rem] pb-8 md:pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
              
              {/* Header Section */}
              <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 w-full">
                <div className="w-full">
                  <h1 className="text-[#9D29C6] text-[1.875rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] 3xl:text-[3rem] font-semibold leading-tight capitalize text-center md:text-left">
                    Let's Get in touch
                  </h1>
                </div>
                
                {/* Map and Contact Section */}
                <div className="w-full">
                  {/* Desktop Layout - Side by Side */}
                  <div className="hidden lg:block">
                    <div className="rounded-[10px] bg-[#F5F1FF] p-6 xl:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
                        {/* Map takes 2/3 of the space */}
                        <div className="lg:col-span-2">
                          <GoogleMap />
                        </div>
                        
                        {/* Contact Details takes 1/3 of the space */}
                        <div className="lg:col-span-1 flex items-center">
                          <div className="w-full">
                            <ContactDetails />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile/Tablet Layout - Stacked */}
                  <div className="lg:hidden flex flex-col gap-6 md:gap-8">
                    {/* Map */}
                    <div className="rounded-[10px] bg-[#F5F1FF] p-4 md:p-6">
                      <GoogleMap />
                    </div>
                    
                    {/* Contact Details */}
                    <div className="rounded-[10px] bg-[#F5F1FF] p-6 md:p-8">
                      <ContactDetails />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="w-full [&>div>div]:gap-4 [&>div>div]:md:gap-5 [&>div>div]:lg:gap-6">
                <FAQ items={faqItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
}