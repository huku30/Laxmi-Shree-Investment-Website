"use client";

import { useRouter } from 'next/navigation';

export default function ContactButton() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/Contact');
  };

  return (
    <div className="flex justify-center">
      <button 
        onClick={handleContactClick}
        className="flex px-[1.2rem] py-[0.6rem] sm:px-[1.4rem] sm:py-[0.7rem] lg:px-[1.77rem] lg:py-[0.88rem] xl:px-[2rem] xl:py-[1rem] 3xl:px-[2.5rem] 3xl:py-[1.2rem] justify-center items-center gap-[0.3rem] sm:gap-[0.4rem] lg:gap-[0.55rem] xl:gap-[0.6rem] 3xl:gap-[0.8rem] rounded-[0.3rem] sm:rounded-[0.35rem] lg:rounded-[0.44rem] xl:rounded-[0.5rem] 3xl:rounded-[0.6rem] hover:opacity-90 transition-opacity" 
        style={{ background: '#DC9320' }}
      >
        <span className="text-[#FDFCFF] text-center font-generalSans-semibold text-[0.8rem] sm:text-[0.9rem] lg:text-sm xl:text-[1rem] 3xl:text-[1.2rem] font-semibold leading-[98.404%]">
          Contact Us
        </span>
      </button>
    </div>
  );
}