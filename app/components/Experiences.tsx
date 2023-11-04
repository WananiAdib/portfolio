import React from 'react'

const Experiences = () => {
	return (
		<>
			<div className="bg-primary text-center lg:text-start w-[20rem] lg:w-220 rounded-[3.2rem] text-white px-[3rem] py-[1rem]">
				<h3 className="text-[3rem] font-semibold">HumanID</h3>
				<div>
					<div className="flex flex-col lg:flex-row justify-between items-center ">
						<h4 className=" text-[1.5rem] font-medium ">Tech Lead</h4>
						<p>May&apos;22 - Oct&apos;22</p>
					</div>
					<ul className="lg:pl-[3rem] list-disc text-start">
						<li>
							Promoted to Tech Lead, managing a team of 5, and overseeing secure,
							privacy-focused login SDK using phone numbers, meeting industry
							standards.
						</li>
						<li>
							Automated hiring, reducing cycle time by 50%, ensuring secure and
							user-friendly login systems.
						</li>
						<li>
							Held multiple stake-holder meetings and partner clients on our solutions.
						</li>
					</ul>
				</div>
				<div>
					<div className="mt-[1rem] flex flex-col lg:flex-row justify-between items-center">
						<h4 className="text-[1.5rem] font-medium">Software Engineer Intern</h4>
						<p>Feb &apos;22 - May &apos;22</p>
					</div>
					<ul className="lg:pl-[3rem] list-disc text-start">
						<li>
							Supported projects as Software Engineering Intern, working with Django
							backend and React frontend.
						</li>
						<li>
							Contributed to industry-standard security and privacy features in
							HumanID's login SDK.
						</li>
						<li>
							Focused on improving user experiences and security standards during the
							internship.
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-primary w-[20rem] lg:w-220 text-center lg:text-start rounded-[3.2rem] text-white px-[3rem] py-[1rem] mt-[2rem]">
				<h3 className="text-[3rem] font-semibold">AAVA</h3>
				<div className="flex flex-col lg:flex-row justify-between items-center">
					<h4 className="text-[1.5rem] font-medium">Machine Learning Intern</h4>
					<p>May &apos;21 - May &apos;22</p>
				</div>
				<ul className="lg:pl-[3rem] list-disc text-start">
					<li>
						Led a one-year aircraft valuation project, unifying diverse data sources
						into a structured dataset, enhancing data quality and ensuring data
						standardization
					</li>
					<li>
						Developed an advanced LSTM model with an attention layer, significantly
						improving predictive accuracy for aircraft valuation, and co-authored a
						research paper for the capstone project.
					</li>
					<li>
						Optimized existing codebases to streamline data processing workflows,
						enhancing project efficiency and contributing to the project's success
					</li>
				</ul>
			</div>
		</>
	)
}

export default Experiences
