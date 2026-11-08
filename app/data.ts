type Project = {
  name: string
  description?: string
  link: string
  status?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  // link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'SolveAgain',
    link: 'https://cadence.wananiadib.com',
    status: 'In progress',
    id: 'solveagain',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Kaedim',
    title: 'Full Stack Engineer',
    start: '2023',
    end: '2024',
    // link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Blacty',
    title: 'Software Engineer',
    start: '2024',
    end: '2024',
    // link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Nolana AI',
    title: 'Full Stack Engineer',
    start: '2025',
    end: 'Jul 2026',
    // link: 'https://ibelick.com',
    id: 'work3',
  },
  {
    company: 'Ylookup',
    title: 'AI Engineer',
    start: 'Jul 2026',
    end: 'Present',
    id: 'work4',
  },
]

// Add authored, published MDX posts here when they are ready.
export const BLOG_POSTS: BlogPost[] = []

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/WananiAdib',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/adibdeving',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/adib-el-ounani',
  },
]

// Keep the contact address obfuscated in rendered HTML and page data.
export const OBFUSCATED_EMAIL = 'wananiadib[at]gmail[.]com'
