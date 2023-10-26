import Head from "next/head";
import Image from "next/image";
import pdp from "../public/professional_shadow.png";
import free from "../public/Professional_Photo-removebg-preview.png";
import Link from "next/link";
import linkedinIcon from "../public/linkedin.svg";
import githubLogo from "../public/github.svg";
import darettibaaLogo from "../public/darettibaa logo.png";
import nyush from "../public/NYU_Shanghai_Logo.jpg";

const Home = () => {
	const technicalSkills = [
		"Python",
		"TailwindCSS",
		"AWS",
		"Docker",
		"CI/CD",
		"NextJS",
		"C/C++",
		"JavaScript",
		"MongoDB",
		"MySQL",
		"Pandas",
		"React",
		"Express",
		"Node.js",
		"OpenGL",
		"PyTorch",
		"Django",
		"AWS",
		"Firebase",
		"Figma",
		"WordPress",
		"Vim",
		"Solidity",
		"Typescript",
		"React",
		"HardhatJS",
		"MERN Stack",
		"Material UI",
		"Passport",
	];

	return (
		<body>
			<Head>
				<title>Adib El Ounani</title>
			</Head>
			<div className="flex items-center justify-center flex-col scroll-smooth">
				<nav className="bg-primary w-220 rounded-[3.2rem] text-white my-[1rem]">
					<ul className="flex justify-around text-[1.4rem] font-bol p-[1rem]">
						<li>
							<a href="#About">About</a>
						</li>
						<li>
							<a href="#Education">Education</a>
						</li>
						<li>
							<a href="#Projects">Projects</a>
						</li>
						<li>
							<a href="#Experiences">Experiences</a>
						</li>
						<li>
							<a href="#Certifications">Certifications</a>
						</li>
						<li>
							<a href="#Skills">Skills</a>
						</li>
						<li>
							<a href="#Contact">Contact</a>
						</li>
					</ul>
				</nav>
				<div className="relative bg-primary text-white p-4 w-220 h-[45rem] shrink-0 rounded-[3.2rem]">
					<h1 className="absolute text-[7.56rem] leading-[138%] font-arabic font-bold text-secondary top-[3.20rem] right-[3.7rem] text-right">
						أديب <br />
						الوناني
					</h1>
					<h1 className="absolute leading-tight text-[6.75rem] left-[19rem] top-[4.31rem] font-bold text-secondary">
						安<br />迪
					</h1>
					<h1 className="absolute left-[3.75rem] top-[16.71rem] leading-tight font-bold text-[5.25rem] z-10 text-shadow">
						Adib
						<br /> El Ounani
					</h1>
					<Image
						src={free}
						className="try top-[4.31rem] left-[15rem] absolute"
						alt="Professional Photo"
					/>
					<a
						className="absolute left-[3.75rem] top-[30rem]"
						href="https://www.linkedin.com/in/adib-el-ounani-247495183/"
					>
						<Image src={linkedinIcon} alt="linkedin logo" />
					</a>
					<a
						className="absolute top-[30rem] left-[8.5rem]"
						href="https://github.com/WananiAdib"
					>
						<Image src={githubLogo} alt="github logo" />
					</a>
					<a
						className="absolute flex items-center justify-center  left-1/2 w-[17.3rem] h-[4.2rem] top-[39rem] bg-secondary transform rounded-[3.2rem] -translate-x-1/2 font-medium text-[1.75rem]"
						href="#contact"
					>
						Contact
					</a>
				</div>
				<h2 id="About" className="secTitle">
					About
				</h2>
				<div className="bg-primary mt-[1rem] text-white w-220 rounded-[3.2rem] py-[2.6rem] px-[4rem] text-[1.6rem]">
					<p>
						Software engineer and NYU Shanghai grad with a global
						perspective, blending UK, USA, and Chinese tech vibes.
						🌎 Moroccan roots, code at heart. 🚀 From web apps to
						AI, I&apos;m all about making ideas pop! Explore my
						digital world and let&apos;s create something amazing
						together. 💡🔧
					</p>
				</div>
				<h2 className="secTitle" id="Projects">
					Projects
				</h2>
				<div className="bg-primary mt-[1rem] w-220 rounded-[3.2rem] flex">
					<div className="p-[2rem]">
						<Image
							src={darettibaaLogo}
							alt="darettibaa logo"
							className="w-[12rem] rounded-[3.2rem]"
						/>
					</div>
					<div className="pt-[2rem]">
						<a href="https://darettibaa.com">
							<h3 className="font-500 text-white text-[2.375rem] hover:underline">
								Darettibaa
							</h3>
						</a>
						<p className="text-white w-[32rem] pt-[0.4rem]">
							Darettibaa is a user-friendly web application
							designed to assist individuals in effortlessly
							typing in Arabic. With its intuitive interface and
							convenient features, users can seamlessly express
							themselves in the Arabic language, whether for
							personal communication or professional purposes.
						</p>
					</div>
				</div>
				<h2 className="secTitle" id="Education">
					Education
				</h2>
				<div className="bg-primary mt-[1rem] w-220 rounded-[3.2rem] flex">
					<div className="p-[2rem]">
						<Image
							src={nyush}
							alt="nyu shanghai"
							className="w-[12rem] rounded-[3.2rem]"
						/>
					</div>
					<div className="text-white pt-[2rem]">
						<h3 className="text-[2rem] font-500">NYU Shanghai</h3>
						<div className="flex justify-between items-center">
							<h4 className="text-[1.6rem]">
								B.Sc in Computer Science
							</h4>
							<p>Sep &apos;19 - May &apos;23</p>
						</div>
						<p className="w-[32rem] pt-[0.4rem]">
							Study Away Semesters in London and New York (2x){" "}
							<br />
							Scholarship & Awards: NYU Pan-Asian Alumni Global
							Network Scholarship, Shanghai Scholarship U
						</p>
					</div>
				</div>
				<h2 className="secTitle" id="Experiences">
					Experiences
				</h2>
				<div className="bg-primary w-220 rounded-[3.2rem] text-white px-[3rem] py-[1rem]">
					<h3 className="text-[3rem] font-semibold">HumanID</h3>
					<div className="flex justify-between items-center ">
						<h4 className=" text-[1.5rem] font-medium ">
							Tech Lead
						</h4>
						<p>May&apos;22 - Oct&apos;22</p>
					</div>
					<p className="pl-[3rem]">
						Used agile methodologies to remotely lead and monitor a
						team of 5 developers. Attend meetings with clients,
						stakeholders and upper management to discuss the project
						objectives. Assist software engineers in applying
						feedback from code inspection. Streamlined hiring
						process using Google Scripts, decreasing duration by
						90%.
					</p>
					<div className="mt-[1rem] flex justify-between items-center">
						<h4 className="text-[1.5rem] font-medium">
							Software Engineer Intern
						</h4>
						<p>Feb &apos;22 - May &apos;22</p>
					</div>
				</div>
				<div className="bg-primary w-220 rounded-[3.2rem] text-white px-[3rem] py-[1rem] mt-[2rem]">
					<h3 className="text-[3rem] font-semibold">AAVA</h3>
					<div className="flex justify-between items-center">
						<h4 className="text-[1.5rem] font-medium">
							Machine Learning Intern
						</h4>
						<p>May &apos;21 - May &apos;22</p>
					</div>
					<p>
						Data-cleaned world’s biggest aircraft valuation dataset
						from multiple unorganized datasets. Developed an LSTM
						Model with an Attention Layer using PyTorch.
						Collaborated with coworkers to write subsequent results
						as a research paper.
					</p>
				</div>
				<h2 className="secTitle">Certifications</h2>
				<div className="bg-primary rounded-[3.2rem] w-220 px-[3rem] py-[2rem] text-white">
					<div className="flex justify-between items-center">
						<h3 className="font-semibold text-[2rem]">
							DevOps on AWS Specialization
						</h3>
						<p>Oct &apos;23</p>
					</div>
					<p className="text-[1.2rem]">Coursera</p>
				</div>
				<h2 className="secTitle">Skills</h2>
				<div className="w-220 flex flex-wrap">
					{technicalSkills.map((skill, index) => (
						<span key={index} className="skill">
							{skill}
						</span>
					))}
				</div>
				<h2 className="secTitle" id="Contact">
					Contact
				</h2>
				<div className="w-220 bg-primary text-white rounded-[3.2rem] px-[3rem] py-[2rem] text-[1.2rem]">
					<p>
						Please contact me at{" "}
						<a
							className="underline"
							href="mailto:wananiadib@gmail.com"
						>
							wananiadib@gmail.com
						</a>
					</p>
				</div>
				<footer className="bg-primary text-white py-2 mt-12 w-full text-center">
					<small className="text-white mb-4 block">
						&copy; Adib El Ounani 2023. All rights reserved.
					</small>
					<p>
						Built with Nextjs and React. Hosted in Vercel. From 🇲🇦
						with ❤️.
					</p>
				</footer>
			</div>
		</body>
	);
};

export default Home;
