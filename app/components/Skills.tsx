import React from 'react'

const Skills = () => {
	const technicalSkills = [
		'Python',
		'TailwindCSS',
		'AWS',
		'Docker',
		'CI/CD',
		'NextJS',
		'C/C++',
		'JavaScript',
		'MongoDB',
		'MySQL',
		'Pandas',
		'React',
		'Express',
		'Node.js',
		'OpenGL',
		'PyTorch',
		'Django',
		'AWS',
		'Firebase',
		'Figma',
		'WordPress',
		'Vim',
		'Solidity',
		'Typescript',
		'React',
		'HardhatJS',
		'MERN Stack',
		'Material UI',
		'Passport',
	]
	return (
		<div className="lg:w-220 w-[20rem] flex flex-wrap">
			{technicalSkills.map((skill, index) => (
				<span key={index} className="skill">
					{skill}
				</span>
			))}
		</div>
	)
}

export default Skills
