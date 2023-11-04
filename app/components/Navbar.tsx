'use client'

import { useState } from 'react'
import { Squash as Hamburger, Squash } from 'hamburger-react'

import Link from 'next/link'
const Navbar = () => {
	const [hid, setHid] = useState('hidden')
	const handleClick = () => {
		if (hid === 'hidden') {
			setHid('')
		} else {
			setHid('hidden')
		}
	}
	return (
		<nav className="bg-primary lg:w-220 rounded-[3.2rem] text-white my-[1rem]">
			<ul className="hidden lg:flex justify-around text-[1.4rem] font-bol p-[1rem]">
				<li>
					<Link href="#About">About</Link>
				</li>
				<li>
					<Link href="#Education">Education</Link>
				</li>
				<li>
					<Link href="#Projects">Projects</Link>
				</li>
				<li>
					<Link href="#Experiences">Experiences</Link>
				</li>
				<li>
					<Link href="#Certifications">Certifications</Link>
				</li>
				<li>
					<Link href="#Skills">Skills</Link>
				</li>
				<li>
					<Link href="#Contact">Contact</Link>
				</li>
			</ul>
			<div className="w-[20rem] flex justify-center items-center lg:hidden h-[3.25rem]">
				<button className="" onClick={handleClick}>
					<Squash />
				</button>
			</div>
			<div className={`${hid} transition ease-in-out delay-150`}>
				<ul className="flex flex-col items-center lg:hidden text-[1.4rem] font-bol p-[1rem]">
					<li>
						<Link href="#About">About</Link>
					</li>
					<li>
						<Link href="#Education">Education</Link>
					</li>
					<li>
						<Link href="#Projects">Projects</Link>
					</li>
					<li>
						<Link href="#Experiences">Experiences</Link>
					</li>
					<li>
						<Link href="#Certifications">Certifications</Link>
					</li>
					<li>
						<Link href="#Skills">Skills</Link>
					</li>
					<li>
						<Link href="#Contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
