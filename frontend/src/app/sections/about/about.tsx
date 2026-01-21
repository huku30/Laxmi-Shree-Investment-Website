/* eslint-disable react/no-unescaped-entities */

import styles from './styles.module.css';

export default function AboutUs() {
  return (
    <section className="px-[1.4rem] mb-[4rem] md:px-[2.5rem] lg:px-[4rem] xl:px-[5rem] 3xl:px-[8rem]">
      <div className="max-w-7xl mx-auto 3xl:max-w-[90rem]">
        <div className="flex flex-col items-center gap-[2.5rem] md:gap-[3rem] lg:gap-[2.5rem] xl:gap-[1rem] 3xl:gap-[4rem]">
          {/* Title */}
          <h1 className="text-center text-[#9D29C6] text-[1.875rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] 3xl:text-[3rem] font-semibold leading-tight capitalize ">
            About Us
          </h1>
          
          {/* Content Container */}
          <div className={styles.about_content_container}>
            <div className={`${styles.about_content_overlay} px-[1.4rem] md:p-[3rem] lg:p-[4rem] xl:px-[10rem] xl:p-[1.5rem] 3xl:px-[12rem] 3xl:py-[.8rem] flex flex-col items-center lg:flex lg:flex-col lg:items-center`}>
              <div className={`${styles.about_text_container} w-full text-[#421855] text-[1.15rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.2rem] 3xl:text-[1.5rem] font-medium leading-relaxed text-justify capitalize space-y-[1.5rem] xl:flex xl:flex-col xl:items-center lg:flex lg:flex-col lg:items-center 3xl:space-y-[2rem] 3xl:leading-[170%]`}>
                <p className="">
                    Welcome to Laxmi Shree Investment Pvt. Ltd. (LSI) – a diversified investment company committed to accelerating Nepal's development through strategic investments. We are a leading private investment group driving sustainable growth across multiple sectors. Our approach follows a simple philosophy: Learn, Earn, Invest, Grow, and Develop – the foundation of our company's success.
                </p>
                <p className="">
                  Laxmi Shree Investment brings together local insight and global standards to turn opportunities into thriving ventures. Whether you're an investor seeking high-impact projects or a partner with a vision, you've come to the right place. Join us in building prosperity – explore our sectors or contact our team to discover how we can collaborate on Nepal's next success story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}