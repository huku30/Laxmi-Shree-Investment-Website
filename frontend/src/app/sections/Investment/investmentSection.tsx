/* eslint-disable react/no-unescaped-entities */


"use client";
import { useState } from "react";
import InvestmentCard from "@/app/components/InvestmentCard";
import CTAButton from "@/app/components/InvestmentButton";
import Navbar from "@/app/components/Navbar";

interface Investment {
  id: number;
  title: string;
  description: string;
  image: string;
  variant: "purple" | "white";
}

// Investment data
const investmentsData: Investment[] = [
  {
    id: 1,
    title: "Barahi Cable Car Ltd.",
    description: "Elevate your journey from Sedi to Sarangkot with breathtaking views! Experience the majestic beauty of Annapurna and the sacred 51 ft Pancha Mukhi Ganesh with our safe, scenic cable car rides.",
    image: "Invested_Company_Logo/default.svg",
    variant: "purple"
  },
  {
    id: 2,
    title: "Sopan Pharmaceuticals",
    description: "Sopan Pharmaceuticals Limited, founded under Sopan Multiple Company Limited by leading NRNs and entrepreneurs, aims to transform healthcare with innovative, high-quality pharmaceutical products.",
    image: "Invested_Company_Logo/sopan.jpeg",
    variant: "white"
  },
  {
    id: 3,
    title: "Himalayan Solar Ltd.",
    description: "From humble beginnings to a solar leader, our journey is driven by innovation and sustainability. With advanced technology, we empower communities and businesses with reliable, clean energy solutions.",
    image: "Invested_Company_Logo/default.svg",
    variant: "purple"
  }
];

// Arrow SVG Components
const LeftArrow = () => (
  <svg 
    width="18" 
    height="36" 
    viewBox="0 0 18 36" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-8"
  >
    <path 
      d="M16 34.4258L2.00001 17.9264L16 1.42578" 
      stroke="#5E2D91" 
      strokeWidth="2.43417" 
      strokeLinecap="round"
    />
  </svg>
);

const RightArrow = () => (
  <svg 
    width="18" 
    height="36" 
    viewBox="0 0 18 36" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-8"
  >
    <path 
      d="M2 1.42578L16 17.9252L2 34.4258" 
      stroke="#5E2D91" 
      strokeWidth="2.43417" 
      strokeLinecap="round"
    />
  </svg>
);

export default function InvestmentsSection() {
  const [currentInvestmentIndex, setCurrentInvestmentIndex] = useState(0);
  const currentInvestment = investmentsData[currentInvestmentIndex];

  const nextInvestment = () => {
    setCurrentInvestmentIndex((prev) => (prev + 1) % investmentsData.length);
  };

  const prevInvestment = () => {
    setCurrentInvestmentIndex((prev) => (prev - 1 + investmentsData.length) % investmentsData.length);
  };

  return (
    <section className="py-16 px-4 ">
      <Navbar/>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-10">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-[#9D29C6] text-2xl md:text-4xl font-semibold leading-[140%] capitalize 3xl:text-[3rem]">
              Our Investments
            </h2>
          </div>

          {/* Desktop View - All Cards */}
          <div className="hidden lg:flex items-center gap-5 w-full max-w-6xl">
            {investmentsData.map((investment) => (
              <InvestmentCard
                key={investment.id}
                title={investment.title}
                description={investment.description}
                image={investment.image}
                variant={investment.variant}
                className={investment.variant === "white" ? "w-full max-w-lg" : "w-full max-w-sm"}
              />
            ))}
          </div>

          {/* Mobile/Tablet View - Carousel */}
          <div className="lg:hidden flex flex-col items-center gap-5 w-full max-w-md">
            <div className="flex justify-center items-center gap-6 w-full">
              {/* Left Arrow */}
              <button
                onClick={prevInvestment}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                disabled={investmentsData.length <= 1}
              >
                <LeftArrow />
              </button>

              {/* Current Investment Card */}
              <div className="w-full max-w-xs">
                <InvestmentCard
                  title={currentInvestment.title}
                  description={currentInvestment.description}
                  image={currentInvestment.image}
                  variant={currentInvestment.variant}
                />
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextInvestment}
                className="p-2   transition-colors"
                disabled={investmentsData.length <= 1}
              >
                <RightArrow />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {investmentsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentInvestmentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentInvestmentIndex ? "bg-[#9D29C6]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <CTAButton 
            href="/Investments" 
            variant="outlined"
            size="lg"
            className=""
          >
            <span className="hidden md:inline">Check our Investments →</span>
            <span className="md:hidden">See Our Investment→</span>
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
