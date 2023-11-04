import React from "react";
import Image from "next/image";
import darettibaaLogo from "../../public/darettibaa logo.png";

const Projects = () => {
	return (
		<div className="bg-primary mt-[1rem] lg:w-220 rounded-[3.2rem] w-[20rem] flex flex-wrap justify-center lg:justify-start">
			<div className="lg:p-[2rem] px-[2rem] pt-[2rem] w-[16rem]">
				<Image
					src={darettibaaLogo}
					alt="darettibaa logo"
					className="rounded-[3.2rem]"
				/>
			</div>
			<div className="lg:pt-[2rem] flex flex-col items-center lg:items-start">
				<a href="https://darettibaa.com">
					<h3 className="font-500 text-white text-[2.375rem] hover:underline">
						Darettibaa
					</h3>
				</a>
				<p className="text-white lg:w-[32rem] lg:pt-[0.4rem] px-[1.5rem] pb-[1.5rem] lg:p-0 text-center lg:text-start">
					Darettibaa is a user-friendly web application designed to
					assist individuals in effortlessly typing in Arabic. With
					its intuitive interface and convenient features, users can
					seamlessly express themselves in the Arabic language,
					whether for personal communication or professional purposes.
				</p>
			</div>
		</div>
	);
};

export default Projects;
