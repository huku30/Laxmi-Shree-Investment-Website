/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

// Notice Card Component (now takes props and is clickable)
const NoticeCard = ({
  title,
  href,
  imageSrc,
}: {
  title: string;
  href: string;
  imageSrc: string;
}) => (
  <Link href={href} className="block">
    <div className="flex flex-col bg-[#DDD] shadow-[0_0_3.834px_0_rgba(0,0,0,0.25)] w-full max-w-[392px] relative rounded-md overflow-hidden hover:scale-[1.02] transition cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full h-[179px] flex justify-center items-center">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[180px] object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="bg-white p-[21px_28px_20px_28px] h-[65px] flex items-center">
        <div className="text-[#5E2D91] text-[17px] font-semibold leading-[140%] capitalize line-clamp-2">
          {title}
        </div>
      </div>
    </div>
  </Link>
);

export default function Notices() {
  // Replace this with your real investments list
  const investments = [
    {
      title: "Rupakot Resort",
      href: "/Notices/RupakotResort",
      imageSrc: "/Notices_logo/rupakotresort.png",

    },
    // Add more like:
    // { title: "Hydropower Project", href: "/Notices/hydropower", imageSrc: "..." },
  ];

  return (
    <>
      <Navbar />
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
            {investments.map((item) => (
              <NoticeCard
                key={item.href}
                title={item.title}
                href={item.href}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
