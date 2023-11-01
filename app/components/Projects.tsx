import React from "react";
import Image from "next/image";
import darettibaaLogo from "../../public/darettibaa logo.png";

const Projects = () => {
	return (
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
