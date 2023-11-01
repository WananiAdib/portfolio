const Navbar = () => {
	return (
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
	);
};

export default Navbar;
