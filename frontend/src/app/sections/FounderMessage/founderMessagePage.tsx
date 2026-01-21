/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState, useEffect } from "react";
import FounderCard from "@/app/components/founderMessageCard";
import FounderDetails from "@/app/data/founderMessage.json";

export default function MessageFromOurFounderPage(){
  const [currentFounderIndex, setCurrentFounderIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const founders = FounderDetails.founders;

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentFounderIndex((prevIndex) => {
        // If we're at the last founder, go back to first
        if (prevIndex === founders.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [founders.length, isAutoPlaying]);

  // Pause auto-play when user interacts
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds of no interaction
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    pauseAutoPlay();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentFounderIndex < founders.length - 1) {
      setCurrentFounderIndex(currentFounderIndex + 1);
    } else if (isLeftSwipe && currentFounderIndex === founders.length - 1) {
      setCurrentFounderIndex(0);
    }

    if (isRightSwipe && currentFounderIndex > 0) {
      setCurrentFounderIndex(currentFounderIndex - 1);
    } else if (isRightSwipe && currentFounderIndex === 0) {
      setCurrentFounderIndex(founders.length - 1);
    }
  };

  // Navigation functions with transition control
  const changeFounder = (newIndex: number) => {
    if (isTransitioning || newIndex === currentFounderIndex) return;
    
    setIsTransitioning(true);
    setCurrentFounderIndex(newIndex);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToNext = () => {
    pauseAutoPlay();
    const nextIndex = currentFounderIndex < founders.length - 1 ? currentFounderIndex + 1 : 0;
    changeFounder(nextIndex);
  };

  const goToPrevious = () => {
    pauseAutoPlay();
    const prevIndex = currentFounderIndex > 0 ? currentFounderIndex - 1 : founders.length - 1;
    changeFounder(prevIndex);
  };

  const goToFounder = (index: number) => {
    pauseAutoPlay();
    changeFounder(index);
  };

  return (
    <section className="w-full px-[1.4rem] py-[2rem]">
      {/* Title */}
      <h1 className="text-center text-[#9D29C6] text-[1.875rem] md:text-[2.25rem] font-semibold leading-tight capitalize mb-[2rem] 3xl:text-[3rem]">
        About Our Founders
      </h1>

      {/* Sliding Container */}
      <div 
        className="relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Sliding Track */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentFounderIndex * 100}%)`,
          }}
        >
          {/* All Founder Cards */}
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0"
            >
              <FounderCard customData={founder} />
            </div>
          ))}
        </div>

        {/* Desktop Navigation Arrows */}
        <div className="hidden md:flex justify-between items-center absolute top-1/2 transform -translate-y-1/2 w-full px-4 pointer-events-none">
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all pointer-events-auto ${
              isTransitioning 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#9D29C6] text-white hover:bg-[#8A2391] shadow-lg'
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all pointer-events-auto ${
              isTransitioning 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#9D29C6] text-white hover:bg-[#8A2391] shadow-lg'
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {founders.map((_, index) => (
          <button
            key={index}
            onClick={() => goToFounder(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentFounderIndex 
                ? 'bg-[#9D29C6] scale-125' 
                : isTransitioning
                ? 'bg-gray-200 cursor-not-allowed'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}