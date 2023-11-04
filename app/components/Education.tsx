import React from 'react'
import Image from 'next/image'
import nyush from '../../public/NYU_Shanghai_Logo.jpg'

const Education = () => {
	return (
		<div className="bg-primary mt-[1rem] w-[20rem] lg:w-220 rounded-[3.2rem] flex flex-wrap justify-center lg:justify-start">
			<div className="lg:p-[2rem] px-[2rem] pt-[2rem] w-[16rem]">
				<Image src={nyush} alt="nyu shanghai" className="rounded-[3.2rem]" />
			</div>
			<div className="text-white lg:w-[32rem] lg:pt-[2rem] flex flex-col items-center lg:items-start">
				<h3 className="text-[2rem] font-500">NYU Shanghai</h3>
				<div className="flex lg:w-[32rem] lg:justify-between lg:flex-row flex-col  items-center">
					<h4 className="text-[1.6rem] px-[1.5rem] lg:px-0 text-center">
						B.Sc in Computer Science
					</h4>
					<p>Sep &apos;19 - May &apos;23</p>
				</div>
				<p className="pt-[0.4rem] px-[1.5rem] pb-[1.5rem] lg:px-0">
					Study Away Semesters in London and New York (2x)
					<br />
					Scholarship & Awards: NYU Pan-Asian Alumni Global Network Scholarship,
					Shanghai Scholarship U
				</p>
			</div>
		</div>
	)
}

export default Education
