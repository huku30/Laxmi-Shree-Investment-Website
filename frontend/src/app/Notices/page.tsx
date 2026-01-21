/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Notice Card Component
const NoticeCard = () => (
  <div className="flex flex-col bg-[#DDD] shadow-[0_0_3.834px_0_rgba(0,0,0,0.25)] w-full max-w-[392px] relative rounded-md overflow-hidden">
    {/* Image Container */}
    <div className="relative w-full h-[179px] flex justify-center items-center">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/9b4e7fc3d9873320f2e801beb68f4396ce40c96a?width=784" 
        alt="Financial Chart" 
        className="w-full h-[180px] object-cover"
      />
    </div>
    
    {/* Text Content */}
    <div className="bg-white p-[21px_28px_20px_28px] h-[65px] flex items-center">
      <div className="text-[#5E2D91] text-[17px] font-semibold leading-[140%] capitalize">
        गत आवमा यस्तो छ २० वाणिज्य बैंकको नाफा–घाटा
      </div>
    </div>
  </div>
);

export default function Notices() {
  // Create array of notice cards for the layout
  const noticeCards = Array(7).fill(null);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white">
      {/* Main Content Container */}
      <div className="w-full max-w-[440px] mx-auto px-6 pt-[6.5rem] pb-[60px] lg:max-w-[1200px] lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col gap-5 mb-[60px]">
          {/* News | Notice Header */}
          <div className="flex items-center gap-2">
            <div className="text-[#9D29C6] text-2xl font-semibold leading-[140%] capitalize">
              News
            </div>
            <div className="flex items-center gap-[9px]">
              <div className="w-[1px] h-[30px] bg-[#A53ACA]"></div>
              <div className="text-[#9D29C6] text-2xl font-semibold leading-[140%] capitalize">
                Notice
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="opacity-90">
            <p className="text-[#35115F] text-lg font-medium ">
            Stay updated with latest news and updates.
            </p>
          </div>
        </div>

        {/* Notice Cards Grid */}
        <div className="flex flex-col gap-[30px] lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {noticeCards.map((_, index) => (
            <NoticeCard key={index} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
