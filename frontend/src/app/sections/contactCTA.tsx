/* eslint-disable react/no-unescaped-entities */

import ContactButton from "../components/contactButton";

export default function ContactCTASection() {
  return (
    <section 
      className="py-14 px-4 mb-[4rem] md:px-8 lg:px-16 xl:px-20 3xl:px-24 3xl:px-28 4xl:px-32"
      style={{
        background: 'linear-gradient(164deg, rgba(157, 41, 198, 0.40) 45.71%, rgba(88, 33, 153, 0.40) 211.04%), #5E2D91'
      }}
    >
      <div className="max-w-md mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 3xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[90rem]">
        <div className="flex flex-col items-center gap-9 lg:gap-4 xl:gap-4 3xl:gap-4">
          {/* Nepali Text */}
          <div className="w-full max-w-[394px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] xl:max-w-[900px] 3xl:max-w-[1000px] 3xl:max-w-[1100px] 4xl:max-w-[1200px] ">
            <p className="text-white text-center text-[1rem] font-semibold leading-[160%] 3xl:text-[1.6rem]">
              दीर्घकालीन लगानीसम्बन्धी थप सहयोगको लागि, कृपया निःसंकोच सम्पर्क गर्नुहोस्। तपाईंको साथ र समर्थनका लागि हामी सधैं तयार छौं।
            </p>
          </div>

          {/* Contact Us Button */}
          <ContactButton/>
          
        </div>
      </div>
    </section>
  );
}