import InvestmentCompanyCard from "../components/InvestmentPageCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const investments = [
  {
    logoUrl: "Invested_Company_Logo/default.svg",
    companyName: "Barahi Lake View Cable Car Ltd.",
    description: "Elevate your journey from Sedi to Sarangkot with breathtaking views! Experience the majestic beauty of Annapurna and the sacred 51 ft Pancha Mukhi Ganesh with our safe, scenic cable car rides.",
    readMoreUrl: "#",
    pdfFileName: "barahi-cable-car.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/sopan.jpeg",
    companyName: "Sopan Pharmaceuticals",
    description: "Sopan Pharmaceuticals Limited, founded under Sopan Multiple Company Limited by leading NRNs and entrepreneurs, aims to transform healthcare with innovative, high-quality pharmaceutical products.",
    readMoreUrl: "https://sopanpharma.com/",
    pdfFileName: "sopan-pharma.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/default.svg",
    companyName: "Himalayan Solar Ltd.",
    description: "From humble beginnings to a solar leader, our journey is driven by innovation and sustainability. With advanced technology, we empower communities and businesses with reliable, clean energy solutions.",
    readMoreUrl: "#",
    pdfFileName: "himalayan-solar.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/garjang.jpeg",
    companyName: "Garjang Upatyako Hydropower Ltd",
    description: "Harnessing the power of Nepal's pristine waters, Gargang Upateka Hydropower is committed to providing sustainable and clean energy solutions for the nation's growing energy needs.",
    readMoreUrl: "https://www.facebook.com/garjanghydropower/",
    pdfFileName: "gargang-upateka-hydropower.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/default.svg",
    companyName: "Idi Hydropower Company Ltd.",
    description: "Pioneering renewable energy development in Nepal, Eidi Hydropower focuses on sustainable power generation while contributing to local community development and environmental conservation.",
    readMoreUrl: "#",
    pdfFileName: "eidi-hydropower.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/asianbattery.png",
    companyName: "Asian Batteries Ltd.",
    description: "Leading manufacturer of high-quality automotive and industrial batteries in Nepal, providing reliable power solutions with advanced technology and exceptional durability.",
    readMoreUrl: "https://asianbatteries.com.np/",
    pdfFileName: "asian-batteries.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/tenx.png",
    companyName: "Tenx Holding Ltd.",
    description: "A diversified investment holding company focused on strategic investments across multiple sectors including technology, real estate, and manufacturing in Nepal's growing economy.",
    readMoreUrl: "https://tenxnepal.com/",
    pdfFileName: "tenx-holding.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/hotelbhadgaun.jpeg",
    companyName: "Hotel Bhadgaon and resort Ltd.",
    description: "Experience luxury hospitality in the heart of Nepal with world-class amenities, stunning mountain views, and authentic Nepali culture at Hotel Bhadghau and Resort.",
    readMoreUrl: "https://www.hotelbhadgaon.com/",
    pdfFileName: "hotel-bhadghau.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/rupakot.png",
    companyName: "Rupakot Resort",
    description: "A premium destination resort offering unparalleled mountain views, luxury accommodations, and authentic cultural experiences in the beautiful landscapes of Nepal.",
    readMoreUrl: "https://rupakotresort.com/",
    pdfFileName: "rupakot-resort.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/aayumalun.jpeg",
    companyName: "Aayu Malun Khola Hydropower Ltd.",
    description: "Dedicated to sustainable hydroelectric power generation, Aayu Malun Khola Hydropower harnesses Nepal's water resources to provide clean, renewable energy for the nation.",
    readMoreUrl: "https://www.facebook.com/Malunhydro/",
    pdfFileName: "aayu-malun-khola.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/default.svg",
    companyName: "Siddha Bhoomi Retreat Ltd.",
    description: "A serene wellness retreat center offering holistic healing, meditation, and spiritual rejuvenation in Nepal's tranquil natural environment with traditional therapeutic practices.",
    readMoreUrl: "#",
    pdfFileName: "siddha-bhoomi-retreat.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/default.svg",
    companyName: "Barahakshetra Cable Car Ltd.",
    description: "Providing scenic cable car services to one of Nepal's most sacred pilgrimage sites, offering visitors breathtaking aerial views while ensuring safe and comfortable transportation.",
    readMoreUrl: "#",
    pdfFileName: "barahakshetra-cable-car.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/himalayanenergy.png",
    companyName: "Himalayan Urja Ltd.",
    description: "Focused on renewable energy solutions and sustainable power generation, Himalayan Urja is committed to meeting Nepal's energy demands through innovative clean technologies.",
    readMoreUrl: "https://himalayanenergynepal.com.np/",
    pdfFileName: "himalayan-urja.pdf"
  },
  {
    logoUrl: "Invested_Company_Logo/default.svg",
    companyName: "Ramailo Likhu Hydropower Ltd.",
    description: "Developing sustainable hydroelectric projects that contribute to Nepal's energy security while promoting environmental conservation and community development initiatives.",
    readMoreUrl: "#",
    pdfFileName: "ramailo-likhu-hydropower.pdf"
  }

];

export default function InvestmentsPage() {
  return (
    <>
      <Navbar/>
      <section className="px-4 py-[6.5rem] md:px-8 lg:px-16">
        <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Our Investments</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {investments.map((inv, idx) => (
            <InvestmentCompanyCard
              key={idx}
              logoUrl={inv.logoUrl}
              companyName={inv.companyName}
              description={inv.description}
              readMoreUrl={inv.readMoreUrl}
              pdfFileName={inv.pdfFileName}
            />
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}