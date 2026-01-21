/* eslint-disable react/no-unescaped-entities */

"use client";

import Image from "next/image";
import portfolioData from "@/app/data/carousel.json";
import styles from './carousel.module.css';

export default function LogoCarousel() {
  const { portfolioCompanies } = portfolioData;

  return (
    <section className="w-full mb-[4rem] flex flex-col gap-[1.4rem]" >
      
      <div className="text-center mb-[1rem] px-[1.4rem]">
        <h2 className="text-[#9D29C6] text-[1.875rem] font-semibold lg:text-[2.25rem] xl:text-[2.5rem] 3xl:text-[3rem]">
          Trusted By Great Companies
        </h2>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {/* Create 6 sets for ultra smooth infinite scroll */}
          {Array.from({ length: 6 }).map((_, setIndex) =>
            portfolioCompanies.map((company, index) => (
              <div
                key={`set-${setIndex}-${index}`}
                className={styles.carouselItem}
                title={company.name}
              >
                <Image
                  src={company.path}
                  alt={company.name}
                  width={80} 
                  height={80}
                  className="object-contain transition-all duration-300 opacity-70 hover:opacity-100"
                  priority={setIndex === 0 && index < 5} // Preload first few images
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}