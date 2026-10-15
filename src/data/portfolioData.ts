import {
  SiPython, SiJavascript, SiDjango, SiFlask,
  SiMysql, SiPostgresql, SiMongodb, SiSqlite,
  SiNumpy, SiPandas, SiGit, SiGithub,
  SiPostman, SiDocker, SiLinux,
  SiOpencv, SiLeetcode, SiHackerrank
} from 'react-icons/si';
import { FaJava, FaAws, FaWindows } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import type { ComponentType, SVGAttributes } from 'react';

type IconType = ComponentType<SVGAttributes<SVGElement> & { size?: number | string }>;

export interface SkillItem {
  name: string;
  icon: IconType;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  challenges: string;
  learnings: string;
  github?: string;
  live?: string;
  gradient: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
  scoreLabel: string;
}

export interface Certification {
  name: string;
  provider: string;
  link?: string;
}

export interface Internship {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface CodingProfile {
  name: string;
  url: string;
  icon: IconType;
  color: string;
}

export const personalInfo = {
  name: 'Govika M',
  title: 'Python Developer',
  email: 'govikamarimuthu10@gmail.com',
  phone: '+91-8072297525',
  location: 'Chennai, Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/govika-m-2b10492a6/',
  github: 'https://github.com/Govika1002',
  roles: [
    'Python Developer',
    'Backend Developer',
    'Software Engineer',
    'Django Developer',
    'API Developer',
  ],
  aboutMe: `Motivated and detail-oriented Python Developer with hands-on experience building web applications, REST APIs, and automation scripts. Currently pursuing a B.Tech in Information Technology, I've developed a strong foundation in Django, Flask, relational databases, and object-oriented programming.

My journey in tech is fueled by a genuine passion for writing clean, efficient code and solving complex problems. From building a military-grade image steganography system to creating smart farming solutions, I've consistently pushed myself to work on projects that blend creativity with technical rigor.

I'm eager to contribute to a fast-paced development team and grow as a software engineer, bringing my skills in Python, backend development, and a relentless curiosity to every challenge I take on.`,
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: SiPython, level: 90 },
      { name: 'Java', icon: FaJava, level: 70 },
      { name: 'JavaScript', icon: SiJavascript, level: 55 },
      { name: 'SQL', icon: SiMysql, level: 75 },
    ],
  },
  {
    title: 'Backend Frameworks',
    skills: [
      { name: 'Django', icon: SiDjango, level: 85 },
      { name: 'Flask', icon: SiFlask, level: 75 },
      { name: 'REST Framework', icon: SiDjango, level: 80 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 80 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 75 },
      { name: 'SQLite', icon: SiSqlite, level: 70 },
      { name: 'MongoDB', icon: SiMongodb, level: 50 },
    ],
  },
  {
    title: 'Libraries & Tools',
    skills: [
      { name: 'NumPy', icon: SiNumpy, level: 70 },
      { name: 'Pandas', icon: SiPandas, level: 70 },
      { name: 'OpenCV', icon: SiOpencv, level: 65 },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', icon: SiGit, level: 80 },
      { name: 'GitHub', icon: SiGithub, level: 85 },
      { name: 'VS Code', icon: VscVscode, level: 90 },
      { name: 'Postman', icon: SiPostman, level: 75 },
      { name: 'Docker', icon: SiDocker, level: 45 },
      { name: 'AWS', icon: FaAws, level: 40 },
    ],
  },
  {
    title: 'Operating Systems',
    skills: [
      { name: 'Linux', icon: SiLinux, level: 70 },
      { name: 'Windows', icon: FaWindows, level: 85 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Multimedia Image Steganography for Military Applications',
    description:
      'A secure defence communication system that hides secret military data inside images using LSB Steganography with AES-256 encryption. The system ensures data remains undetectable while providing authorized access through JWT authentication.',
    techStack: ['Python', 'Django REST Framework', 'PostgreSQL', 'JWT', 'OpenCV', 'AES-256', 'Pillow'],
    features: [
      'LSB Steganography for hiding data in images',
      'AES-256 encryption for military-grade security',
      'JWT-based authentication for authorized access',
      'RESTful API with Django REST Framework',
      'PostgreSQL for secure data storage',
      'Image processing with OpenCV & Pillow',
    ],
    challenges:
      'Balancing image quality retention while embedding encrypted data, and ensuring the steganographic process remains undetectable by statistical analysis.',
    learnings:
      'Deep understanding of cryptography, image processing pipelines, REST API security best practices, and military-grade data protection protocols.',
    github: 'https://github.com/Govika1002',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'Smart Farming Assistant',
    description:
      'A Java-based modular system designed to assist farmers with real-time monitoring and advisory for irrigation, fertilizer usage, pest alerts, and disease detection using sensor data analysis.',
    techStack: ['Java', 'OOP', 'Data Structures', 'ArrayList', 'Stack'],
    features: [
      'Weather monitoring module',
      'Soil moisture & temperature sensor integration',
      'Smart irrigation advisory system',
      'Fertilizer recommendation engine',
      'Pest alert & disease detection',
      'Menu-driven interface for farmer assistance',
    ],
    challenges:
      'Designing an intuitive menu-driven interface that non-technical farmers could easily navigate, while maintaining complex data structure operations under the hood.',
    learnings:
      'Mastered OOP design patterns, efficient data structure usage (ArrayList, Stack), and building user-friendly interfaces for non-technical users.',
    github: 'https://github.com/Govika1002',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  },
];

export const education: Education[] = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Paavai Engineering College',
    year: '2022 – 2026',
    score: '83%',
    scoreLabel: 'CGPA',
  },
  {
    degree: 'Higher Secondary Certificate (12th Grade)',
    institution: 'Cheran Matric Higher Secondary School',
    year: '2020 – 2022',
    score: '74%',
    scoreLabel: 'Percentage',
  },
];

export const certifications: Certification[] = [
  {
    name: 'Python for Everybody Specialization',
    provider: 'University of Michigan (Coursera)',
    link: 'https://www.coursera.org/',
  },
  {
    name: 'Django Web Development',
    provider: 'Udemy',
    link: 'https://www.udemy.com/',
  },
  {
    name: 'Python Certification',
    provider: 'HackerRank',
    link: 'https://www.hackerrank.com/',
  },
];

export const internship: Internship = {
  role: 'Python Developer Intern',
  company: 'Company',
  period: 'Jun 2025 – Aug 2025',
  highlights: [
    'Contributed to backend feature development for an internal Django-based web application',
    'Fixed bugs and optimized database queries, improving average API response time by 20%',
    'Collaborated with a team of 4 using Git for version control and Agile sprint practices',
  ],
};

export const achievements: Achievement[] = [
  {
    title: 'Open Source Contributor',
    description: 'Built and open-sourced 3+ Python projects on GitHub with 50+ combined stars',
    icon: '⭐',
  },
  {
    title: 'Coding Competition',
    description: '1st Runner-up at College-Level Coding Competition',
    icon: '🏆',
  },
  {
    title: 'Problem Solver',
    description: 'Solved 150+ DSA problems on LeetCode/GeeksforGeeks in Python',
    icon: '🧩',
  },
];

export const codingProfiles: CodingProfile[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Govika1002',
    icon: SiGithub,
    color: '#ffffff',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/govika-m-2b10492a6/',
    icon: SiGithub, // will override with Lucide
    color: '#0A66C2',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/',
    icon: SiLeetcode,
    color: '#FFA116',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/',
    icon: SiHackerrank,
    color: '#2EC866',
  },
];
