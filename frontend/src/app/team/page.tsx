/* eslint-disable react/no-unescaped-entities */

import TeamCard from "../components/TeamCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const advisorTeam =[
{
  name: "Dr.Bijay Prakash Sainju(PhD)",
  position: "",
  imageUrl : "advisor/bijay_prakash_sainju.png",
  emailUrl: "bijay.sainju@company.com",
  linkedinUrl: "https://www.linkedin.com/in/bijay-prakash-sainju/"
},

{
  name :"Sr. Cpt. Samaj Kumar Shrestha",
  position : "",
  imageUrl : "advisor/samaj_shrestha.png",
  emailUrl : "samaj.shrestha@company.com",
  linkedinUrl: "https://www.linkedin.com"
}

];

const teamMembers = [
  {
    name: "Laxmi Prasad Prasai",
    position: "Chairman",
    imageUrl: "founders/laxmiprasai.png",
    emailUrl: "aarav@company.com",
    linkedinUrl: "https://www.linkedin.com/in/laxmi-prasad-prasai-5771a5392/"
  },
  {
    name: "Shankar Bahadur Ghimire",
    position: "MD",
    imageUrl: "founders/sankharghimire.png",
    emailUrl: "priya@company.com",
    linkedinUrl: "http://linkedin.com/in/shankar-ghimire-81b936232"
  },
  {
    name: "Laxmi Bhattarai",
    position: "Director",
    imageUrl: "founders/laxmibhattarai.png",
    emailUrl: "priya@company.com",
    linkedinUrl: "http://linkedin.com/in/laxmi-bhattarai-7665264b"
  },
  {
    name: "Er.Lilamani Pathak",
    position: "Director",
    imageUrl: "founders/lilapathak.png",
    emailUrl: "priya@company.com",
    linkedinUrl: "http://linkedin.com/in/lilamani-pathak-a8a3baa6"
  }
];

const financialanalystTeam = [
{
  name : "Er.Binod Maharjhan",
  position: "",
  imageUrl : "financial/binod_maharjhan.png",
  emailUrl : "binod.maharjhan@company.com",
  linkedinUrl: "https://www.linkedin.com"
},

{
  name : "CA Shraddha Nepal",
  position : "",
  imageUrl : "financial/shraddha_nepal.png",
  emailUrl : "shraddha.nepal@company.com",
  linkedinUrl : "https://www.linkedin.com"
}

];

const managementTeam = [
   {
    name: "Narayan Koirala",
    position: "CEO",
    imageUrl: "management/narayan_koirala.png",
    emailUrl: "narayan.koirala@company.com",
    linkedinUrl: "https://www.linkedin.com/"
   },

  {
    name: "CA Biraj Adhikari",
    position: "Head of Finance",
    imageUrl: "management/biraj_adhikari.png",
    emailUrl: "john.doe@company.com",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    name: "Bikalpa Prasai",
    position: "Manager",
    imageUrl: "management/Bikalpa_Prasai.jpg",
    emailUrl: "jane.smith@company.com",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    name: "Om Prakash Tamrakar",
    position: "Account Officer",
    imageUrl: "management/om_prakash.png",
    emailUrl: "michael.johnson@company.com",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    name: "Kushma Dawadi",
    position: "Admin Officer",
    imageUrl: "management/Kushma_Dawadi.jpg",
    emailUrl: "michael.johnson@company.com",
    linkedinUrl: "https://www.linkedin.com/"
  }
];

const companySecretary = [
  {
    
    name: "Advocate Bibek Panta",
    position: "Company Secretary",
    imageUrl: "secretary/Bibek_Panta.jpg",
    emailUrl: "john.doe@company.com",
    linkedinUrl: "https://www.linkedin.com/"
  }
  

];

// const companyCEO = [
//   {
    
//     name: "Narayan Koirala",
//     position: "CEO",
//     imageUrl: "ceo/Narayan_Koirala.jpg",
//     emailUrl: "john.doe@company.com",
//     linkedinUrl: "https://www.linkedin.com/"
//   }
  

// ];

export default function TeamPage() {
  return (
    <>
      <Navbar/>

            { /*Advisor  Section */}
<section className="px-4 pt-[5rem] md:px-8 lg:px-16 pb-8">
        <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Advisor</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {advisorTeam.map((member, idx) => (
            <TeamCard
              key={idx}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
              emailUrl={member.emailUrl}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </section>


      <section className="px-4 pt-[6.5rem] md:px-8 lg:px-16 pb-8">
        <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Our Leadership Team</h1>
        
        <div className="max-w-7xl mx-auto space-y-6">




          
          {/* First Row - Chairman (Single, Centered) */}
          <div className="flex justify-center">
            <TeamCard
              name={teamMembers[0].name}
              position={teamMembers[0].position}
              imageUrl={teamMembers[0].imageUrl}
              emailUrl={teamMembers[0].emailUrl}
              linkedinUrl={teamMembers[0].linkedinUrl}
            />
          </div>

          {/* Second Row - MD and Directors (Three cards in a row) */}
          <div className="flex justify-center items-center gap-6 md:gap-8 lg:gap-12 xl:gap-12 flex-wrap">
            {teamMembers.slice(1, 4).map((member, idx) => (
              <TeamCard
                key={idx + 1}
                name={member.name}
                position={member.position}
                imageUrl={member.imageUrl}
                emailUrl={member.emailUrl}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </section>

      { /*Commented section for future use  }
      { <section className="px-4 pt-[5rem] md:px-8 lg:px-16">
        <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Advisory Board</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, idx) => (
            <TeamCard
              key={idx}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
              emailUrl={member.emailUrl}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div> 
      </section>}



   { /*financial analyst */}
<section className="px-4 pt-[5rem] md:px-8 lg:px-16 pb-8">
        <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Financial Analyst</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {financialanalystTeam.map((member, idx) => (
            <TeamCard
              key={idx}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
              emailUrl={member.emailUrl}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </section>


   {/* Company Secretary Section */}
      <section className="px-4 pt-[5rem] md:px-8 lg:px-16 pb-8">
        <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Company Secretary</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {companySecretary.map((member, idx) => (
            <TeamCard
              key={idx}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
              emailUrl={member.emailUrl}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </section>




      {/* Management Team Section */}
      <section className="px-4 pt-[5rem] md:px-8 lg:px-16 pb-8">
        <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Management Team</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {managementTeam.map((member, idx) => (
            <TeamCard
              key={idx}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
              emailUrl={member.emailUrl}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </section>
   
      {/* Commented section for future use */}
      {/* <section className="px-4 pt-[5rem] md:px-8 lg:px-16">
        <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Advisory Board</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, idx) => (
            <TeamCard
              key={idx}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
              emailUrl={member.emailUrl}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div> 
      </section>*/}
      
      <div className="mt-[4rem]">
        <Footer/>
      </div>
    </>
  );
}