/* eslint-disable react/no-unescaped-entities */

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function JanakiCableIndustriesPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white px-4 md:px-10 lg:px-16 pt-[6.5rem] pb-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="flex items-start md:items-center justify-between gap-4 flex-col md:flex-row">
            <div>
              <h1 className="text-[#35115F] text-[1.6rem] md:text-[2.1rem] font-semibold">
               Janaki Cable Industry Ltd.
              </h1>
              <p className="text-[#666] mt-2 text-[0.95rem] md:text-[1rem]">
                Download the pitch deck and investor form for this investment.
              </p>
            </div>

            <Link
              href="/Notices"
              className="w-full md:w-auto text-center px-4 py-2 rounded-[10px] border border-[#35115F] text-[#35115F] font-semibold transition-all duration-200 hover:bg-[#35115F] hover:text-white focus:outline-none focus:ring-0"
            >
              ← Back to Notices
            </Link>
          </div>

          {/* Cover + Logo Section */}
          <div className="mt-8 rounded-[14px] overflow-hidden shadow-[0_0_3.834px_0_rgba(0,0,0,0.15)] border border-[#eee]">
            {/* Cover Image */}
            <div className="w-full h-[170px] md:h-[220px] bg-[#F5F1FF] flex items-center justify-center">
              <img
                src="/notice_cover/janakicableindustries.png"
                alt="Janaki Cable Industries Cover"
                className="w-full h-full object-cover"
                style={{ imageRendering: "auto" }}
              />
            </div>

            {/* Logo + Title */}
            <div className="bg-white p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <div className="w-[90px] h-[90px] rounded-[12px] bg-white border border-[#eee] flex items-center justify-center overflow-hidden">
                <img
                  src="/Invested_Company_Logo/janakicableindustries.png"
                  alt="Janaki Cable Industries Ltd. Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>

              <div className="w-full">
                <h2 className="text-[#35115F] text-[1.25rem] md:text-[1.4rem] font-semibold">
                  Janaki Cable Industry Ltd.
                </h2>
                <p className="text-[#666] mt-1 text-[0.95rem]">
                  Investor documents are available below for download.
                </p>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Pitch Deck */}
            <div className="rounded-[12px] bg-[#F5F1FF] p-6 md:p-8 shadow-[0_0_3.834px_0_rgba(0,0,0,0.15)] border border-[#eee]">
              <h2 className="text-[#35115F] text-[1.25rem] font-semibold">
                Pitch Deck (PDF)
              </h2>
              <p className="text-[#666] mt-2 text-[0.95rem]">
                Download our latest pitch deck for Janaki Cable Industry Ltd.
              </p>

              <a
                href="https://laxmishreeinvestment.com/downloads/janakicableindustry-pitchdeck.pdf"
                target="_blank"
                rel="noreferrer"
                download
                className="inline-block mt-5 px-5 py-3 rounded-[10px] border border-[#35115F] text-[#35115F] font-semibold transition-all duration-200 w-full md:w-auto text-center hover:bg-[#35115F] hover:text-white focus:outline-none focus:ring-0"
              >
                Download Pitch Deck
              </a>
            </div>

            {/* Investor Form */}
            {/* <div className="rounded-[12px] bg-[#F5F1FF] p-6 md:p-8 shadow-[0_0_3.834px_0_rgba(0,0,0,0.15)] border border-[#eee]">
              <h2 className="text-[#35115F] text-[1.25rem] font-semibold">
                Investor Form (PDF)
              </h2>
              <p className="text-[#666] mt-2 text-[0.95rem]">
                Download, print, fill the form, and submit it at our office.
              </p>

              <a
                href="https://laxmishreeinvestment.com/downloads/rupakotresort-investor-form.pdf"
                target="_blank"
                rel="noreferrer"
                download
                className="inline-block mt-5 px-5 py-3 rounded-[10px] border border-[#35115F] text-[#35115F] font-semibold transition-all duration-200 w-full md:w-auto text-center hover:bg-[#35115F] hover:text-white focus:outline-none focus:ring-0"
              >
                Download Form
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
