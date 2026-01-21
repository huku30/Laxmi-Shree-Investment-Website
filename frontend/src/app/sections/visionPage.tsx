/* eslint-disable react/no-unescaped-entities */


import VisionCard from "@/app/components/Vision";
import visionData from "@/app/data/vision.json";
import Image from "next/image";

export default function VisionPage() {
  const getIcon = async (iconPath: string, title: string) => {
    try {
      const iconName = iconPath.split('/').pop()?.replace('.svg', '');
      const iconModule = await import(`@/app/assets/icons/${iconName}.svg`);
      return <Image src={iconModule.default} alt={title} />;
    } catch (error) {
      return <div className="w-12 h-12 bg-gray-300 rounded-full"></div>;
    }
  };

  // Group items by variant type
  const defaultVariants = visionData.filter(item => item.variant === "default");
  const purpleVariants = visionData.filter(item => item.variant === "purple");
  const darkVariants = visionData.filter(item => item.variant === "dark");

  // Create alternating array
  const alternatingItems = [];
  const maxLength = Math.max(defaultVariants.length, purpleVariants.length, darkVariants.length);

  for (let i = 0; i < maxLength * 3; i++) {
    if (i % 3 === 0 && defaultVariants[Math.floor(i / 3)]) {
      alternatingItems.push(defaultVariants[Math.floor(i / 3)]);
    } else if (i % 3 === 1 && purpleVariants[Math.floor(i / 3)]) {
      alternatingItems.push(purpleVariants[Math.floor(i / 3)]);
    } else if (i % 3 === 2 && darkVariants[Math.floor(i / 3)]) {
      alternatingItems.push(darkVariants[Math.floor(i / 3)]);
    }
  }

  return (
    <section className="px-[1.4rem] py-[4rem] mb-[4rem] md:px-[2.5rem] lg:px-[4rem] xl:px-[5rem] 3xl:px-[8rem]">
      <div className="max-w-7xl mx-auto 3xl:max-w-[90rem]">
        <div className="flex flex-col items-center gap-[2.5rem] md:gap-[3rem] lg:gap-[3.5rem] 3xl:gap-[4rem]">
          <h1 className="text-center text-[#9D29C6] text-[1.875rem] md:text-[2.25rem] lg:text-[2.5rem] 3xl:text-[3rem] font-semibold leading-tight capitalize">
            Our Vision & Mission
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.5rem] md:gap-[2rem] lg:gap-[2.5rem] 3xl:gap-[3rem] max-w-6xl 3xl:max-w-[90rem]">
            {alternatingItems.map((item) => (
              <VisionCard
                key={item.id}
                icon={getIcon(item.icon, item.title)}
                title={item.title}
                description={item.description}
                variant={item.variant as "default" | "purple" | "dark"}
                className="min-h-[8rem]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}