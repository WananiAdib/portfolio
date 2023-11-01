import Head from "next/head";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import About from "./components/About";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const Home = () => {

	return (
		<body>
			<Head>
				<title>Adib El Ounani</title>
			</Head>
			<div className="flex items-center justify-center flex-col scroll-smooth">
				<Navbar />	
				<Description />
				<h2 id="About" className="secTitle">
					About
				</h2>
				<About />
				<h2 className="secTitle" id="Projects">
					Projects
				</h2>
				<Projects />
				<h2 className="secTitle" id="Education">
					Education
				</h2>
				<Education />	
				<h2 className="secTitle" id="Experiences">
					Experiences
				</h2>
				<Experiences />
				<h2 className="secTitle" id="Certifications">Certifications</h2>
				<Certifications />
				<h2 className="secTitle" id="Skills">Skills</h2>
				<Skills />
				<h2 className="secTitle" id="Contact">
					Contact
				</h2>
				<Contact />
				<footer className="bg-primary text-white py-2 mt-12 w-full text-center">
					<small className="text-white mb-4 block">
						&copy; Adib El Ounani 2023. All rights reserved.
					</small>
					<p>
						Built with Nextjs and React. Hosted in Vercel. From 🇲🇦
						with ❤️.
					</p>
				</footer>
			</div>
		</body>
	);
};

export default Home;
