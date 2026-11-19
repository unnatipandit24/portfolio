// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Unnati Pandit",
  firstName: "Unnati",
  title: "React Native developer",
  intro:
    "Computer Science Engineering (AI) graduate with a 9.0 CGPA. Experience includes building a customer CRM, push notifications and payments in React Native at TechyMonks.",
  email: "unnatipandit2411@gmail.com",
  location: "Delhi, India",
  // Replace with your real profile URLs.
  github: "https://github.com/unnatipandit24",
  linkedin: "https://www.linkedin.com/in/unnati-pandit/",
  // Put your photo at public/photo.jpg (a cut-out PNG named photo.png also works if you change this path).
  photo: "/unnati.jpeg",
};

export const stats = [
  { value: "9.0", label: "CGPA in CSE (AI)" },
  { value: "150+", label: "test cases written for Authentix" },
  { value: "20+", label: "reusable UI components in Bookify" },
  { value: "30%", label: "HR efficiency gain at Indian Railways" },
];

export const currentRole = {
  period: "Jul 2026 to present · Remote",
  title: "React Native Developer",
  company: "TechyMonks · LinkMe",
  features: [
    {
      title: "Customer CRM",
      text: "Built a customer CRM with notes for LinkMe, a salon management platform, using React Native, Expo and Redux Toolkit against REST APIs on a NestJS and Prisma backend.",
    },
    {
      title: "Push notifications",
      text: "FCM with automatic token registration and refresh. End-to-end delivery confirmed on Android, with the iOS pipeline prepared through APNs and EAS Build.",
    },
    {
      title: "Paid credits",
      text: "A Razorpay credit purchase and consumption system that gates paid features such as WhatsApp marketing campaigns and worker marketplace lookups.",
    },
    {
      title: "Front desk workflows",
      text: "Walk-in invoicing without prior booking and a worker job marketplace, cutting manual steps for salon owners.",
    },
    {
      title: "Updates and media",
      text: "Shipped over-the-air (OTA) updates, and worked with images and PDFs inside the app.",
    },
  ],
};

export const pastRoles = [
  {
    period: "Jun 2025 to Jul 2025 · Lucknow",
    title: "Application Developer Intern",
    company: "CodeVirus Security",
    paragraphs: [
      "Built the frontend of Bookify, a book discovery and organization app, with Android Studio, MySQL and MVVM. Developed 15+ screens and 20+ reusable UI components.",
      "Integrated 10+ REST API endpoints for search, authentication and data synchronization.",
    ],
  },
  {
    period: "Jul 2024 to Aug 2024 · Varanasi",
    title: "CSE Summer Intern",
    company: "Indian Railways",
    paragraphs: [
      "Designed and built an Employee and Salary Management System in Java and MySQL at IR (BLW), with secure database operations for employee records.",
      "Improved HR efficiency by 30% by automating manual record-keeping, and trained HR staff to adopt the system.",
    ],
  },
];

export const projects = [
  {
    date: "May 2026",
    name: "Authentix",
    summary:
      "A cross-platform app that detects counterfeit product reviews from text, screenshots and voice input.",
    detail:
      "Wrote and ran 150+ functional, usability and regression test cases. Found 30+ critical defects and cut post-release crashes by 25%.",
    stack: "React Native · TypeScript · Firebase · Python",
  },
  {
    date: "December 2025",
    name: "CodeCrak",
    summary:
      "A portfolio app for students that pulls LeetCode and Codeforces activity, resumes and video intros into one profile.",
    detail:
      "Designed secure Firebase authentication and validated it across 80+ test cases, reducing data ingestion errors by 30%.",
    stack: "React Native · Firebase · LeetCode API · Codeforces API",
  },
];

export const skills = [
  { group: "Mobile and web", items: "React Native, Expo, React, Redux Toolkit, React Navigation, OTA updates" },
  { group: "Languages", items: "TypeScript, JavaScript, Java, Python" },
  { group: "Backend and APIs", items: "REST APIs, Firebase, Appwrite, FCM, Razorpay" },
  { group: "Databases", items: "MySQL, Firebase (NoSQL), RDBMS concepts" },
  { group: "AI and ML", items: "Deep learning, NLP, classification, regression, generative AI, LLMs, RAG, fine tuning" },
  { group: "Tools", items: "Git, GitHub, Jira, EAS Build, VS Code, Firebase Console" },
  { group: "Analytics", items: "Advanced Excel, Tableau, SQL" },
  { group: "Core concepts", items: "Data structures and algorithms, OOP, SDLC, Agile, version control" },
];

export const education = {
  school: "University of Lucknow",
  degree: "Computer Science Engineering, Artificial Intelligence",
  period: "2022 to 2026 · CGPA 9.0",
  logo: "/UoL.png",
};

export const certifications = {
  title: "AWS Certified Cloud Practitioner",
  details: [
    "Foundational certification covering core AWS services, cloud architecture concepts and the shared responsibility security model.",
    "Also covers AWS pricing, billing and support, which helps me choose cost-aware options when building cloud-backed apps.",
  ],
  logo: "/aws-cloud-practitioner.png",
};
