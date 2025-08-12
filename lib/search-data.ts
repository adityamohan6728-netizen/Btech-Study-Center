// lib/search-data.ts

interface SearchableItem {
  title: string;
  description: string;
  href: string;
  type: string;
}

export const ALL_SEARCHABLE_ITEMS: SearchableItem[] = [
  // Categories from home/page.tsx
  { title: "Notes", href: "/notes", description: "Study notes and summaries", type: "category" },
  { title: "Books", href: "/books", description: "Textbooks and reference materials", type: "category" },
  { title: "Handwritten Notes", href: "/hand-written-notes", description: "Student/teacher handwritten content", type: "category" },
  { title: "Free Courses", href: "/free-courses", description: "Video courses and tutorials", type: "category" },
  { title: "Syllabus", href: "/syllabus", description: "Complete curriculum documents", type: "category" },
  { title: "Previous Year Questions", href: "/previous-year-questions", description: "Past exam papers and solutions", type: "category" },
  { title: "Important Questions", href: "/important-questions", description: "Curated exam questions", type: "category" },
  { title: "Roadmaps", href: "/roadmap", description: "Structured learning paths", type: "category" },

  // Notes from app/notes/page.tsx
  { title: "DSA - Linked Lists", href: "/notes", description: "Detailed notes on linked lists, types, and operations.", type: "notes" },
  { title: "OS - Process Management", href: "/notes", description: "Comprehensive notes on process scheduling and synchronization.", type: "notes" },
  { title: "DBMS - ER Model", href: "/notes", description: "Notes on Entity-Relationship (ER) modeling for database design.", type: "notes" },
  { title: "CN - OSI Model", href: "/notes", description: "Notes on the OSI model and its layers.", type: "notes" },
  { title: "SE - Software Testing", href: "/notes", description: "Notes on different types of software testing and methodologies.", type: "notes" },

  // Handwritten Notes from app/hand-written-notes/page.tsx
  { title: "Engg. Maths - Unit 1", href: "/hand-written-notes", description: "Handwritten notes for differential equations and linear algebra.", type: "handwritten notes" },
  { title: "Physics Lab Manual", href: "/hand-written-notes", description: "Detailed handwritten observations and calculations from physics experiments.", type: "handwritten notes" },
  { title: "Basic Electrical Engg.", href: "/hand-written-notes", description: "Neat handwritten notes on circuits, AC/DC fundamentals, and components.", type: "handwritten notes" },
  { title: "Chemistry - Organic", href: "/hand-written-notes", description: "Handwritten notes covering organic chemistry reactions and mechanisms.", type: "handwritten notes" },

  // Roadmaps from app/roadmap/page.tsx
  { title: "Full Stack Web Dev", href: "/roadmap", description: "A step-by-step guide to becoming a full-stack developer.", type: "roadmap" },
  { title: "Data Science Career Path", href: "/roadmap", description: "Learn the essential skills and tools for a career in data science.", type: "roadmap" },
  { title: "Competitive Programming", href: "/roadmap", description: "Strategies and resources to excel in competitive programming.", type: "roadmap" },
  { title: "Machine Learning Engineer", href: "/roadmap", description: "Roadmap to become a Machine Learning Engineer.", type: "roadmap" },

  // Books from app/books/page.tsx
  { title: "Intro to Algorithms (CLRS)", href: "/books", description: "The classic textbook on algorithms, essential for computer science students.", type: "book" },
  { title: "Operating System Concepts", href: "/books", description: "A comprehensive guide to operating system principles and design.", type: "book" },
  { title: "C Programming Language (K&R)", href: "/books", description: "A concise and authoritative book on C programming.", type: "book" },
  { title: "Database System Concepts", href: "/books", description: "Covers fundamental concepts of database systems.", type: "book" },
  { title: "Computer Networks (Tanenbaum)", href: "/books", description: "A widely used textbook on computer networking.", type: "book" },

  // Free Courses from app/free-courses/page.tsx
  { title: "CS50's Intro to CS", href: "/free-courses", description: "Harvard University's introductory computer science course.", type: "course" },
  { title: "Machine Learning by Andrew Ng", href: "/free-courses", description: "A foundational course on machine learning from Stanford University.", type: "course" },
  { title: "Deep Learning Specialization", href: "/free-courses", description: "Five courses covering deep learning fundamentals and applications.", type: "course" },
  { title: "Intro to Python Programming", href: "/free-courses", description: "Learn Python basics for beginners.", type: "course" },
  { title: "Data Structures & Algorithms", href: "/free-courses", description: "Free course on fundamental data structures and algorithms.", type: "course" },

  // Syllabus from app/syllabus/page.tsx
  { title: "CSE 1st Year Syllabus", href: "/syllabus", description: "Complete syllabus for B.Tech CSE First Year, all subjects.", type: "syllabus" },
  { title: "CSE 2nd Year Syllabus", href: "/syllabus", description: "Detailed syllabus for B.Tech CSE Second Year, all subjects.", type: "syllabus" },
  { title: "CSE 3rd Year Syllabus", href: "/syllabus", description: "Comprehensive syllabus for B.Tech CSE Third Year, all subjects.", type: "syllabus" },
  { title: "CSE 4th Year Syllabus", href: "/syllabus", description: "Full syllabus for B.Tech CSE Fourth Year, all subjects.", type: "syllabus" },

  // Previous Year Questions from app/previous-year-questions/page.tsx
  { title: "DSA - 2023 PYQ", href: "/previous-year-questions", description: "Previous year questions for Data Structures and Algorithms (2023).", type: "PYQ" },
  { title: "OS - 2022 PYQ", href: "/previous-year-questions", description: "Previous year questions for Operating Systems (2022).", type: "PYQ" },
  { title: "DBMS - 2021 PYQ", href: "/previous-year-questions", description: "Previous year questions for Database Management Systems (2021).", type: "PYQ" },
  { title: "CN - 2020 PYQ", href: "/previous-year-questions", description: "Previous year questions for Computer Networks (2020).", type: "PYQ" },

  // Important Questions from app/important-questions/page.tsx
  { title: "DSA - Top 50 Questions", href: "/important-questions", description: "Curated list of 50 most important questions for Data Structures and Algorithms.", type: "important questions" },
  { title: "OS - Key Concepts", href: "/important-questions", description: "Important questions covering key concepts in Operating Systems.", type: "important questions" },
  { title: "DBMS - Interview Prep", href: "/important-questions", description: "Important questions for DBMS often asked in interviews.", type: "important questions" },
  { title: "CN - Network Protocols", href: "/important-questions", description: "Important questions on various network protocols in Computer Networks.", type: "important questions" },
];
