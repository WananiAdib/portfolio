import Head from "next/head";
import Image from "next/image";
import pdp from "../public/professional_shadow.png";
import free from '../public/Professional_Photo-removebg-preview.png'
import Link from "next/link";
import linkedinIcon from "../public/linkedin.svg";
import githubLogo from '../public/github.svg'

const Home = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="relative bg-primary text-white p-4 w-[55rem] h-[45rem] shrink-0 rounded-[3.2rem]">
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
		</div>
	);
};

export default Home;
