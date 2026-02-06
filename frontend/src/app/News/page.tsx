/* eslint-disable react/no-unescaped-entities */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <Navbar />

      {/* ✅ SAME layout/padding as Notices page */}
      <div className="min-h-screen bg-white">
        <div className="w-full max-w-[440px] mx-auto px-6 pt-[6.5rem] pb-[60px] lg:max-w-[1200px] lg:px-8">
          {/* ✅ Header Section (same as Notices) */}
          <div className="flex flex-col gap-5 mb-[60px]">
            <div className="flex items-start md:items-center justify-between gap-4 flex-col md:flex-row">
              {/* Left title block */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-[9px]">
                    {/* <div className="w-[1px] h-[30px] bg-[#A53ACA]"></div> */}
                    <div className="text-[#9D29C6] text-2xl font-semibold leading-[140%] capitalize">
                      News
                    </div>
                  </div>
                </div>

                <div className="opacity-90 mt-3">
                  <p className="text-[#35115F] text-lg font-medium">
                    Stay updated with the latest announcements and updates from
                    Laxmi Shree Investment.
                  </p>
                </div>
              </div>

              {/* Right CTA */}
              <Link
                href="/Notices"
                className="w-full md:w-auto text-center px-4 py-2 rounded-[10px] border border-[#35115F] text-[#35115F] font-semibold transition-all duration-200 hover:bg-[#35115F] hover:text-white focus:outline-none"
              >
                View Investor Notices →
              </Link>
            </div>
          </div>

          {/* News Cards */}
          <div className="flex flex-col gap-[30px] lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
            {/* Rising Hydro 30 Jun 2025 */}
            <Link
              href="https://www.sharesansar.com/index.php/newsdetail/muktinath-capital-appointed-as-issue-manager-for-rising-hydropowers-ipo-2025-06-30"
              className="rounded-[14px] border border-[#eee] bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] p-6 transition hover:shadow-md hover:-translate-y-[2px]"
            >
              <p className="text-[0.8rem] text-[#999]">Jun 30, 2025</p>

              <h2 className="text-[#35115F] text-[1.2rem] font-semibold mt-2">
                Muktinath Capital Appointed as Issue Manager for Rising Hydropower’s IPO
              </h2>

              <p className="text-[#666] mt-2 text-[0.95rem] line-clamp-3">
                राइजिङ्ग हाइड्रोपावरले IPO को लागी मुक्तिनाथ क्यापिटललाई परामर्शदाता (Issue Manager)
                का रूपमा नियुक्त गरेको छ, जसले शेयर जारी प्रक्रिया संचालन गर्नेछ।
              </p>

              <span className="inline-block mt-4 text-[#35115F] font-semibold">
                Read more →
              </span>
            </Link>

            {/* Garjang Hydropower 6 July 2025 */}
            <Link
              href="https://www.facebook.com/100038759265489/posts/1556484045653556/?rdid=LlEHSOCWWmAsj7qF"
              className="rounded-[14px] border border-[#eee] bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] p-6 transition hover:shadow-md hover:-translate-y-[2px]"
            >
              <p className="text-[0.8rem] text-[#999]">July 6, 2025</p>

              <h2 className="text-[#35115F] text-[1.2rem] font-semibold mt-2">
                गर्जाङ उपत्यका हाइड्रो पावर लिमिटेडले सार्वसाधारणलाई शेयर जारी गर्दै
              </h2>

              <p className="text-[#666] mt-2 text-[0.95rem] line-clamp-3">
                मुक्तिनाथ क्यापिटलले सेयर बजारसँग जोडिएको नयाँ अपडेटहरू, IPO खुल्ला घोषणाहरू र लगानी
                सूचनाहरू सेयर गरेको छ।
              </p>

              <span className="inline-block mt-4 text-[#35115F] font-semibold">
                Read more →
              </span>
            </Link>

            {/* Asian Battery 16 July 2025 */}
            <Link
              href="https://bizshala.com/article/16447"
              className="rounded-[14px] border border-[#eee] bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] p-6 transition hover:shadow-md hover:-translate-y-[2px]"
            >
              <p className="text-[0.8rem] text-[#999]">July 16, 2025</p>

              <h2 className="text-[#35115F] text-[1.2rem] font-semibold mt-2">
                एशियन ब्याट्रीजले आईपीओ निष्कासन गर्ने, बिक्री प्रबन्धकमा हिमालयन क्यापिटल
              </h2>

              <p className="text-[#666] mt-2 text-[0.95rem] line-clamp-3">
                एशियन ब्याट्रीजले आईपीओ निष्कासन गर्ने योजना सार्वजनिक गर्दै बिक्री प्रबन्धकका रूपमा
                हिमालयन क्यापिटललाई नियुक्त गरेको छ।
              </p>

              <span className="inline-block mt-4 text-[#35115F] font-semibold">
                Read more →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
