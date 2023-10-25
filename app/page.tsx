import Head from "next/head";
import Image from "next/image";
import pdp from "../public/professional_shadow.png";
import free from '../public/Professional_Photo-removebg-preview.png'
import Link from "next/link";
import linkedinIcon from "../public/linkedin.svg";
import githubLogo from '../public/github.svg'
import darettibaaLogo from '../public/darettibaa logo.png'
import nyush from '../public/NYU_Shanghai_Logo.jpg'

const Home = () => {
	return (
		<div className="flex items-center justify-center flex-col">
			<div className="relative bg-primary text-white p-4 w-220 h-[45rem] shrink-0 rounded-[3.2rem]">
				<h1 className="absolute text-[7.56rem] leading-[138%] font-arabic font-bold text-secondary top-[3.20rem] right-[3.7rem] text-right">
					أديب <br />الوناني
				</h1>
				<h1 className="absolute leading-tight text-[6.75rem] left-[19rem] top-[4.31rem] font-bold text-secondary">
					安<br />迪
				</h1>
				<h1 className="absolute left-[3.75rem] top-[16.71rem] leading-tight font-bold text-[5.25rem] z-10 text-shadow">Adib<br /> El Ounani</h1>
				<Image src={free} className="try top-[4.31rem] left-[15rem] absolute" alt="Professional Photo" />
        <a className="absolute left-[3.75rem] top-[30rem]" href="https://www.linkedin.com/in/adib-el-ounani-247495183/">
          <Image src={linkedinIcon} alt="linkedin logo" />
        </a>
        <a className="absolute top-[30rem] left-[8.5rem]" href="https://github.com/WananiAdib" >
          <Image src={githubLogo} alt="github logo" />
        </a>
        <a className="absolute flex items-center justify-center  left-1/2 w-[17.3rem] h-[4.2rem] top-[39rem] bg-secondary transform rounded-[3.2rem] -translate-x-1/2 font-medium text-[1.75rem]" href="#contact" >
          Contact
        </a>
			</div>
      <h2 className="secTitle">About</h2>
      <div className="bg-primary mt-[1rem] text-white w-220 rounded-[3.2rem] py-[2.6rem] px-[4rem] text-[1.6rem]">
        <p>Software engineer and NYU Shanghai grad with a global perspective, blending UK, USA, and Chinese tech vibes. 🌎 Moroccan roots, code at heart. 🚀 From web apps to AI, I'm all about making ideas pop! Explore my digital world and let's create something amazing together. 💡🔧</p>
      </div>
      <h2 className="secTitle">Projects</h2>
      <div className="bg-primary mt-[1rem] w-220 rounded-[3.2rem] flex" >
        <div className="p-[2rem]">
          <Image src={darettibaaLogo} alt="darettibaa logo" className="w-[12rem] rounded-[3.2rem]" />
        </div>
        <div className="pt-[2rem]">
          <a href="https://darettibaa.com">
            <h3 className="font-500 text-white text-[2.375rem] hover:underline">Darettibaa</h3>
          </a>
          <p className="text-white w-[32rem] pt-[0.4rem]">Darettibaa is a user-friendly web application designed to assist individuals in effortlessly typing in Arabic. With its intuitive interface and convenient features, users can seamlessly express themselves in the Arabic language, whether for personal communication or professional purposes.</p>
        </div>
      </div>
        <h2 className="secTitle">Education</h2>
        <div className="bg-primary mt-[1rem] w-220 rounded-[3.2rem] flex">
          <div className="p-[2rem]">
            <Image src={nyush} alt="nyu shanghai" className="w-[12rem] rounded-[3.2rem]" />
          </div>
          <div className="text-white pt-[2rem]">
            <h3 className="text-[2rem] font-500">NYU Shanghai</h3>
            <div className="flex justify-between items-center">
              <h4 className="text-[1.6rem]">B.Sc in Computer Science</h4>
              <p>Sep '19 - May '23</p>
            </div>
              <p className="w-[32rem] pt-[0.4rem]">
                Study Away Semesters in London and New York (2x) <br />
                Scholarship & Awards: NYU Pan-Asian Alumni Global Network Scholarship, Shanghai Scholarship U
              </p>
          </div>
        </div>
        <h2 className="secTitle">Experiences</h2>
        <h2 className="secTitle">Certifications</h2>
        <h2 className="secTitle">Skills</h2>
        <h2 className="secTitle" id="contact">Contact</h2>
		</div>
	);
};

export default Home;
