import React from "react";

const Experiences = () => {
	return (
		<>
			<div className="bg-primary w-220 rounded-[3.2rem] text-white px-[3rem] py-[1rem]">
				<h3 className="text-[3rem] font-semibold">HumanID</h3>
				<div className="flex justify-between items-center ">
					<h4 className=" text-[1.5rem] font-medium ">Tech Lead</h4>
					<p>May&apos;22 - Oct&apos;22</p>
				</div>
				<p className="pl-[3rem]">
					Used agile methodologies to remotely lead and monitor a team
					of 5 developers. Attend meetings with clients, stakeholders
					and upper management to discuss the project objectives.
					Assist software engineers in applying feedback from code
					inspection. Streamlined hiring process using Google Scripts,
					decreasing duration by 90%.
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
					Data-cleaned world’s biggest aircraft valuation dataset from
					multiple unorganized datasets. Developed an LSTM Model with
					an Attention Layer using PyTorch. Collaborated with
					coworkers to write subsequent results as a research paper.
				</p>
			</div>
		</>
	);
};

export default Experiences;
