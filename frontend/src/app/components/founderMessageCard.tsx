import OpeningQuote from "../assets/icons/OpeningQuote.svg";
import ClosingQuote from "../assets/icons/ClosingQuote.svg";
import foundersData from "@/app/data/founderMessage.json";
import Image from "next/image";

interface Founder {
    id: number;
    name: string;
    position: string;
    message: string;
    imagePath: string;
}

interface FounderCardProps {
    founderId?: number;
    customData?: Founder;
}

export default function FounderCard({ founderId = 1, customData }: FounderCardProps) {
    // Use custom data if provided, otherwise get from JSON
    const founder = customData || foundersData.founders.find(f => f.id === founderId);
    
    if (!founder) {
        return <div>Founder not found</div>;
    }

    return (
<section className="flex flex-col px-[1.4rem] gap-[2rem] md:px-[2.5rem] md:gap-[2.5rem] lg:flex-row lg:items-stretch lg:px-[3rem] lg:gap-[3rem] xl:px-[4rem] xl:gap-[4rem] xl:w-[60rem]  xl:mx-auto xl:rounded-[1.25rem] xl:border-[.5px] xl:border-[#5E2D91] xl:p-[2.5rem] 3xl:w-[80rem] 3xl:gap-[5rem] 3xl:p-[3.5rem]">         
       <div className="flex justify-center items-center lg:justify-start">
  <div className="relative w-[220px] md:w-[260px] lg:w-[320px] xl:w-[380px] aspect-[3/4]">
    <Image
      src={founder.imagePath}
      alt={founder.name}
      fill
      className="object-cover rounded-[1.25rem] lg:rounded-lg border-[1.5px] border-[#67209D] lg:border-none"
    />
  </div>
</div>

            {/* Content Container */}
            <div className="flex flex-col gap-[1rem] md:gap-[1.25rem] lg:gap-[1.5rem] xl:gap-[1.75rem] 3xl:gap-[2rem] lg:flex-1">
                {/* Opening Quote */}
                <div className="flex justify-start">
                    <Image
                        src={OpeningQuote}
                        alt="Opening Quote"
                        width={40}
                        height={28}
                        className="w-[40px] h-[28px] md:w-[45px] md:h-[31px] lg:w-[50px] lg:h-[34px] xl:w-[55px] xl:h-[37px] 3xl:w-[65px] 3xl:h-[45px]"
                    />
                </div>

                {/* Message */}
                <p className="text-[#5E2D91] text-[1rem] md:text-[1.1rem] lg:text-[1.15rem] xl:text-[1rem] 3xl:text-[1.5rem] leading-relaxed md:leading-relaxed lg:leading-loose 3xl:leading-[170%] text-justify">
                    {founder.message}
                </p>

                {/* Founder Info */}
                <div className="mt-[1rem] md:mt-[1.25rem] lg:mt-[1.5rem] xl:mt-[.2rem] 3xl:mt-[1rem]">
                    <h4 className="text-[#9D29C6] text-[1.35rem] md:text-[1.45rem] lg:text-[1.55rem] xl:text-[1.3rem] 3xl:text-[2rem] font-semibold ">
                        {founder.name}
                    </h4>
                    <p className="text-[#5E2D91] text-[1rem] md:text-[1.1rem] lg:text-[1.15rem] xl:text-[1rem] 3xl:text-[1.6rem] font-medium">
                        {founder.position}
                    </p>
                </div>

                {/* Closing Quote */}
                <div className="flex justify-end mt-auto ">
                    <Image
                        src={ClosingQuote}
                        alt="Closing Quote"
                        width={40}
                        height={28}
                        className="w-[40px] h-[28px] md:w-[45px] md:h-[31px] lg:w-[50px] lg:h-[34px] xl:w-[55px] 3xl:w-[65px] 3xl:h-[45px]"
                    />
                </div>
            </div>
        </section>
    );
}