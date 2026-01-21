/* eslint-disable react/no-unescaped-entities */


import ServiceCard from "../components/servicesCard";
import servicesData from "../data/servicesData.json";

export default function ServicesPage() {


  return (
    <section className="px-[1.4rem] mb-[4rem]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-[2.5rem]">
          {/* Title */}
          <h1 className="text-center text-[#9D29C6] text-[1.875rem] md:text-[2.25rem] font-semibold leading-tight capitalize 3xl:text-[3rem]">
            Our Services
          </h1>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] xl:px-[4rem] ">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                variant={service.variant as "light" | "purple"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}