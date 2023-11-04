import React from 'react'
import Image from 'next/image'
import free from '../../public/Professional_Photo-removebg-preview.png'
import linkedinIcon from '../../public/linkedin.svg'
import githubLogo from '../../public/github.svg'

const Description = () => {
	return (
		<div className="relative bg-primary text-white p-4 w-[20rem] h-[30rem] lg:w-220 lg:h-[45rem] shrink-0 rounded-[3.2rem]">
			<h1 className="absolute  text-[3.3rem] top-[4.2rem] right-[0.8rem] lg:text-[7.56rem] leading-[138%] font-arabic font-bold text-secondary lg:top-[3.20rem] lg:right-[3.7rem] text-right">
				أديب <br />
				الوناني
			</h1>
			<h1 className="absolute leading-tight text-[3.625rem] top-[4rem] left-[4.19rem] lg:text-[6.75rem] lg:left-[19rem] lg:top-[4.31rem] font-bold text-secondary">
				安<br />迪
			</h1>
			<h1 className="absolute text-[2.43rem] left-[1.75rem] top-[12.75rem] lg:left-[3.75rem] lg:top-[16.71rem] leading-tight font-bold lg:text-[5.25rem] z-10 text-shadow">
				Adib
				<br /> El Ounani
			</h1>
			<Image
				src={free}
				className="try w-[16.44rem] top-[4.5rem] left-[3.44rem] lg:w-[31.25rem] lg:top-[4.31rem] lg:left-[15rem] absolute"
				alt="Professional Photo"
			/>
			<a
				className="absolute top-[19rem] left-[1.75rem] w-[1.75rem] lg:w-[3rem] lg:left-[3.75rem] lg:top-[30rem]"
				href="https://www.linkedin.com/in/adib-el-ounani-247495183/"
			>
				<Image src={linkedinIcon} alt="linkedin logo" />
			</a>
			<a
				className="absolute w-[1.75rem] top-[19rem] left-[4rem] lg:w-[3rem] lg:top-[30rem] lg:left-[8.5rem]"
				href="https://github.com/WananiAdib"
			>
				<Image src={githubLogo} alt="github logo" />
			</a>
			<a
				className="absolute flex items-center justify-center  left-1/2 w-[14.25rem] h-[3.5rem] top-[24.6rem] text-[1.43rem] lg:w-[17.3rem] lg:h-[4.2rem] lg:top-[39rem] bg-secondary transform rounded-[3.2rem] -translate-x-1/2 font-medium lg:text-[1.75rem]"
				href="#Contact"
			>
				Contact
			</a>
		</div>
	)
}

export default Description
