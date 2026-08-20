export type Career = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;

  skills: string[];

  subjects: string[];

  degrees: string[];

  industries: string[];

  careerPaths: string[];

  interests: string[];

  strengths: string[];

  nextSteps: {
    title: string;
    description: string;
    action: string;
  }[];
};

export const careers: Career[] = [
  {
    slug: "product-manager",
    title: "Product Manager",
    category: "Business + Technology",

    shortDescription:
      "Bring technology, business and people together to create products that solve real problems.",

    description:
      "Product Managers work at the intersection of technology, business and people. They understand user problems, decide what should be built and work with different teams to turn ideas into useful products.",

    skills: [
      "Problem solving",
      "Communication",
      "Leadership",
      "Analytical thinking",
      "Creativity",
    ],

    subjects: [
      "Mathematics",
      "Computer Science",
      "Business Studies",
      "Economics",
      "Psychology",
    ],

    degrees: [
      "Computer Science",
      "Business Administration",
      "Economics",
      "Engineering",
      "Design",
    ],

    industries: [
      "Technology",
      "FinTech",
      "HealthTech",
      "EdTech",
      "E-commerce",
      "SaaS",
    ],

    careerPaths: [
      "Product Manager",
      "Senior Product Manager",
      "Product Lead",
      "Director of Product",
      "Chief Product Officer",
      "Startup Founder",
    ],

    interests: [
      "Technology",
      "Business",
      "Problem solving",
      "Building products",
      "Understanding people",
    ],

    strengths: [
      "Communication",
      "Leadership",
      "Curiosity",
      "Decision making",
      "Strategic thinking",
    ],

    nextSteps: [
      {
        title: "Build a project",
        description:
          "Pick a real student problem and design a simple digital solution.",
        action: "Start a project",
      },
      {
        title: "Learn a skill",
        description:
          "Learn product thinking, user research and basic analytics.",
        action: "Explore skills",
      },
      {
        title: "Explore a university",
        description:
          "Look for programs combining technology, business or design.",
        action: "Explore universities",
      },
    ],
  },

  {
    slug: "software-engineer",
    title: "Software Engineer",
    category: "Technology",

    shortDescription:
      "Design and build software that solves problems for people and businesses.",

    description:
      "Software Engineers use programming, problem solving and system design to build applications, platforms and digital products.",

    skills: [
      "Programming",
      "Problem solving",
      "Data structures",
      "System design",
      "Logical thinking",
    ],

    subjects: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "Statistics",
    ],

    degrees: [
      "Computer Science",
      "Software Engineering",
      "Information Technology",
      "Computer Engineering",
    ],

    industries: [
      "Technology",
      "FinTech",
      "AI",
      "Cybersecurity",
      "Gaming",
      "E-commerce",
    ],

    careerPaths: [
      "Software Engineer",
      "Senior Software Engineer",
      "Tech Lead",
      "Engineering Manager",
      "Staff Engineer",
      "CTO",
    ],

    interests: [
      "Technology",
      "Coding",
      "Building things",
      "Problem solving",
      "Artificial Intelligence",
    ],

    strengths: [
      "Logical thinking",
      "Persistence",
      "Curiosity",
      "Analytical thinking",
      "Attention to detail",
    ],

    nextSteps: [
      {
        title: "Build a project",
        description:
          "Build a small application that solves a real-world problem.",
        action: "Start coding",
      },
      {
        title: "Learn a skill",
        description:
          "Strengthen programming, DSA and software development fundamentals.",
        action: "Learn coding",
      },
      {
        title: "Explore a university",
        description:
          "Compare Computer Science and Software Engineering programs.",
        action: "Explore universities",
      },
    ],
  },

  {
    slug: "ai-engineer",
    title: "AI Engineer",
    category: "AI + Technology",

    shortDescription:
      "Build intelligent systems that can understand data, learn patterns and assist people.",

    description:
      "AI Engineers design and build systems using machine learning, generative AI and data to solve complex problems.",

    skills: [
      "Python",
      "Machine learning",
      "Mathematics",
      "Problem solving",
      "Data analysis",
    ],

    subjects: [
      "Mathematics",
      "Computer Science",
      "Statistics",
      "Physics",
    ],

    degrees: [
      "Computer Science",
      "Artificial Intelligence",
      "Data Science",
      "Mathematics",
      "Statistics",
    ],

    industries: [
      "Artificial Intelligence",
      "Healthcare",
      "Finance",
      "Robotics",
      "Technology",
      "Research",
    ],

    careerPaths: [
      "AI Engineer",
      "Machine Learning Engineer",
      "AI Researcher",
      "Applied Scientist",
      "AI Architect",
    ],

    interests: [
      "Artificial Intelligence",
      "Technology",
      "Mathematics",
      "Research",
      "Data",
    ],

    strengths: [
      "Analytical thinking",
      "Curiosity",
      "Mathematical thinking",
      "Experimentation",
      "Problem solving",
    ],

    nextSteps: [
      {
        title: "Build an AI project",
        description:
          "Create a beginner-friendly AI application using a real-world dataset.",
        action: "Build with AI",
      },
      {
        title: "Learn a skill",
        description:
          "Start with Python, statistics and machine learning fundamentals.",
        action: "Learn AI",
      },
      {
        title: "Explore a university",
        description:
          "Explore Computer Science, AI and Data Science programs.",
        action: "Explore universities",
      },
    ],
  },

  {
    slug: "psychologist",
    title: "Psychologist",
    category: "People + Science",

    shortDescription:
      "Understand human behaviour and help people navigate thoughts, emotions and challenges.",

    description:
      "Psychologists study human behaviour, emotions and mental processes. They use research and evidence-based approaches to understand and support people.",

    skills: [
      "Communication",
      "Empathy",
      "Research",
      "Critical thinking",
      "Observation",
    ],

    subjects: [
      "Psychology",
      "Biology",
      "Sociology",
      "English",
      "Statistics",
    ],

    degrees: [
      "Psychology",
      "Behavioural Science",
      "Neuroscience",
      "Social Science",
    ],

    industries: [
      "Healthcare",
      "Education",
      "Research",
      "Corporate",
      "Sports",
    ],

    careerPaths: [
      "Psychologist",
      "Counsellor",
      "Researcher",
      "Organisational Psychologist",
      "Clinical Psychologist",
    ],

    interests: [
      "Psychology",
      "Human behaviour",
      "Helping people",
      "Research",
      "Communication",
    ],

    strengths: [
      "Empathy",
      "Listening",
      "Patience",
      "Observation",
      "Communication",
    ],

    nextSteps: [
      {
        title: "Explore psychology",
        description:
          "Start reading about human behaviour and psychological research.",
        action: "Explore psychology",
      },
      {
        title: "Learn a skill",
        description:
          "Develop communication, observation and research skills.",
        action: "Build skills",
      },
      {
        title: "Explore a university",
        description:
          "Compare psychology and behavioural science programs.",
        action: "Explore universities",
      },
    ],
  },
];

export function getCareer(slug: string) {
  return careers.find((career) => career.slug === slug);
}