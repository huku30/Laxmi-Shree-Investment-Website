/* eslint-disable react/no-unescaped-entities */


"use client";

import { useTypewriter } from "@/app/lib/useTypewriter"
import wordsData from "@/app/data/heroData.json"
import ContactButton from "@/app/components/contactButton";
import styles from "./styles.module.css";

export default function HeroPage(){
    const typewriterText = useTypewriter(wordsData, 50, 30, 600);

    return (
        <section 
            className={`${styles.hero_background_container} relative p-[1.4rem] py-[4rem] mb-[4rem] overflow-hidden lg:pl-[4rem] lg:py-[5rem] xl:pl-[5rem] xl:pt-[3.5rem]  `}
        >
            
            <div className="pt-[3rem] relative z-10 flex flex-col h-full max-w-full lg:pt-[4rem] xl:pt-[5rem]">

                <h1 className="font-bold text-[2.35rem] lg:text-[1.75rem] lg:mb-[0.5rem] xl:text-[1.85rem] xl:mb-[0rem] 3xl:text-[2.7rem] 3xl:mb-[0.5rem]" style={{ color: '#581D91' }}>
                    We Serve:
                </h1>
                <h1 className="font-bold text-[2.35rem] h-[9rem] max-w-full sm:w-[24rem] lg:w-[45rem] lg:h-[4.5rem] lg:text-[2.75rem] lg:mb-[1rem] xl:w-[50rem] xl:h-[5rem] xl:text-[2.8rem] xl:mb-[0.6rem] 3xl:text-[4rem] 3xl:w-[70rem] 3xl:mb-[3rem]" style={{ color: '#DC9320' }}>
                    {typewriterText}
                    <span className="animate-pulse ml-1">|</span>
                </h1>
                <span className="self-stretch text-[1.15rem] text-justify font-medium leading-[160%] max-w-full lg:w-[38rem] lg:text-[0.95rem] lg:leading-[150%] lg:font-medium xl:w-[40rem] xl:text-[1rem] xl:font-semibold xl:leading-[155%] 3xl:text-[1.5rem]" style={{color:"#421855"}}>
जहाँ योजना स्पष्ट हुन्छ, त्यहाँ विश्वास स्वाभाविक रूपमा बढ्दै जान्छ।
योजना र विश्वास दुवै साथ आएपछि लक्ष्यसम्म पुग्ने बाटो अझै सहज र सुरक्षित बन्छ।
जब मानिससँग ठोस योजना र गहिरो विश्वास हुन्छ, तब चुनौतीहरू पनि अवसरमा रूपान्तरण हुन्छन्।
लक्ष्मी श्री इन्भेस्टमेन्टले सुरक्षित लगानी र विश्वासको वातावरण सिर्जना गर्छ।
                </span>
                <div className="mt-[2rem] flex justify-center lg:justify-start lg:mt-[3.5rem] xl:justify-start xl:mt-[2rem] 3xl:mt-[4rem]">
                    <ContactButton/>
                </div>
            </div>
        </section>
    )
}