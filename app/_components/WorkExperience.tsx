"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

interface WorkExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const workExperiences: WorkExperienceItemProps[] = [
  {
    title: "ML Undergraduate Research Intern",
    company: "Clemson University Dept. of Food, Nutrition, and Packaging Sciences",
    duration: "January 2023 - May 2023",
    responsibilities: [
      "Processed 60k+ food science abstracts through NLP tokenization using NLTK, enabling efficient text analysis",
      "Identified 15+ semantic ingredient relationships through Word2Vec model training using Gensim/Orange3",
      "Automated data cleaning pipelines, reducing preprocessing time by 40% through regex optimization and parallel processing with Python's Pandas/Dask",
      "Visualized 10+ key correlations using t-SNE dimensionality reduction, presented in bi-weekly papers"
    ]
  },
  {
    title: "Computer Science Tutor",
    company: "Clemson University",
    duration: "January 2023 - Present",
    responsibilities: [
      "Provided mentorship to 20+ students weekly, focusing on data structures, algorithms, and system design",
      "Reduced assignment delays by 25% by providing ad-hoc email support outside scheduled hours",
      "Reduced student debugging time by 30% by developing a custom React-based app that auto-generates visual flow diagram code execution traces and real-time error explanations"
    ]
  },
  {
    title: "Data Science Intern",
    company: "Hamlin Tennis Club",
    duration: "January 2019 - July 2022",
    responsibilities: [
      "Developed a churn prediction model utilizing Python and TensorFlow, reducing customer churn by 25%",
      "Increased revenue by 10% through dynamic pricing optimization with R/Shiny and historical sales data",
      "Streamlined club analytics by building interactive Tableau dashboards tracking membership and lessons",
      "Enhanced student engagement by 35% by integrating augmented reality tools into tennis lessons, creating interactive drills that improved customer retention"
    ]
  }
];

const WorkExperienceItem = ({ title, company, duration, responsibilities }: WorkExperienceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-6 space-y-4"
    >
      <div className="flex items-center space-x-2">
        <Building2 className="h-6 w-6 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-2">
        <p className="text-lg text-dark-200/70 dark:text-stone-200/70">{company}</p>
        <p className="text-sm text-dark-200/50 dark:text-stone-200/50">{duration}</p>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-dark-200/70 dark:text-stone-200/70">
            {responsibility}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const WorkExperience = () => {
  return (
    <div className="py-16 sm:py-24" id="experience">
      <motion.div
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="space-y-4 mb-10"
      >
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          Work Experience
        </h2>
        <p className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70">
          Here's a brief overview of my professional journey and the roles I've held.
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workExperiences.map((experience, index) => (
          <WorkExperienceItem key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;