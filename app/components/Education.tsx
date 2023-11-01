import React from 'react'
import Image from 'next/image'
import nyush from '../../public/NYU_Shanghai_Logo.jpg'

const Education = () => {
  return (
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
  )
}

export default Education