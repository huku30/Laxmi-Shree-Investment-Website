/* eslint-disable react/no-unescaped-entities */


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export const runtime = "edge";

// Gallery Image Placeholder Component
const GalleryImagePlaceholder = () => (
  <div className="flex justify-center items-center w-full h-[265px] md:h-[314px] rounded-[15px] md:rounded-[10px] bg-[#DDD]">
    <svg 
      className="w-full h-full" 
      viewBox="0 0 392 265" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" rx="14.9186" fill="#DDDDDD"/>
      <path 
        opacity="0.45" 
        d="M134.63 211.662C129.782 211.662 125.633 209.938 122.183 206.488C118.734 203.039 117.006 198.887 117 194.033V70.6292C117 65.7811 118.728 61.6324 122.183 58.183C125.639 54.7335 129.788 53.0059 134.63 53H258.034C262.882 53 267.033 54.7277 270.489 58.183C273.944 61.6383 275.669 65.787 275.663 70.6292V194.033C275.663 198.881 273.938 203.033 270.489 206.488C267.039 209.944 262.888 211.668 258.034 211.662H134.63ZM143.444 176.404H249.219L216.164 132.331L189.721 167.59L169.888 141.146L143.444 176.404Z" 
        fill="#AAAAAA"
      />
    </svg>
  </div>
);

export default function Gallery() {
  const galleryImages = Array(9).fill(null);

  return (
    <>
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content Container */}
      <div className="w-full max-w-[1299px] mx-auto px-6 md:px-[118px] pt-[6.5rem] md:pt-[6.5rem] pb-[60px] md:pb-[80px]">
        
        {/* Header Section */}
        <div className="flex flex-col gap-5 md:gap-8 mb-[2rem] md:mb-[2rem] opacity-90">
          {/* Gallery Title */}
          <h1 className="text-[#9D29C6] text-2xl md:text-[30px] font-semibold leading-[140%] capitalize">
            Gallery
          </h1>
          
          {/* Description */}
          <p className="text-[#35115F] text-lg md:text-lg font-medium leading-[155%] tracking-[0.36px]   md:max-w-[1185px]">
            Step into our gallery and relive the cherished moments, achievements, and joyful memories that define the Laxmi Shree Investment family.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-col gap-[30px] md:gap-8 md:grid md:grid-cols-3">
          {galleryImages.map((_, index) => (
            <GalleryImagePlaceholder key={index} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
