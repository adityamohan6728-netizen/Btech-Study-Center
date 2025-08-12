"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, ExternalLink, FileCheck, ArrowLeft } from 'lucide-react';
import Link from "next/link";

const ALL_COURSES = [
  {
    id: "1",
    title: "CS50's Intro to CS",
    description: "Harvard University's introductory computer science course.",
    type: "course",
    link: "https://cs50.harvard.edu/x/2024/",
  },
  {
    id: "2",
    title: "Machine Learning by Andrew Ng",
    description: "A foundational course on machine learning from Stanford University.",
    type: "course",
    link: "https://www.coursera.org/learn/machine-learning",
  },
  {
    id: "3",
    title: "Deep Learning Specialization",
    description: "Five courses covering deep learning fundamentals and applications.",
    type: "course",
    link: "https://www.coursera.org/specializations/deep-learning",
  },
  {
    id: "4",
    title: "Intro to Python Programming",
    description: "Learn Python basics for beginners.",
    type: "course",
    link: "https://www.udemy.com/course/python-for-beginners-learn-python-programming/",
  },
  {
    id: "5",
    title: "Data Structures & Algorithms",
    description: "Free course on fundamental data structures and algorithms.",
    type: "course",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
  },
];

export default function FreeCoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(ALL_COURSES);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCourses(ALL_COURSES);
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = ALL_COURSES.filter(course =>
        course.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        course.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        course.type.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredCourses(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="flex min-h-screen flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-background text-foreground"> {/* Changed bg-white dark:bg-gray-900 to bg-background text-foreground */}
      <div className="w-full max-w-5xl space-y-8">
        <div className="text-center mb-8">
          <div className="flex justify-start mb-4">
            <Link href="/home">
              <Button variant="outline" className="flex items-center gap-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"> {/* Adjusted text color for outline button */}
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-2">B.Tech Free Courses</h1> {/* Removed explicit text-gray-900 dark:text-gray-50 */}
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore a curated list of free online courses to enhance your skills.
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search free courses..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Card key={course.id} className="flex flex-col p-6"> {/* Removed explicit dark:bg-gray-800 dark:border-gray-700, Card handles it */}
                <CardHeader className="pb-2 px-0 pt-0">
                  <CardTitle className="text-2xl font-bold">{course.title}</CardTitle> {/* Removed explicit text-gray-900 dark:text-gray-100 */}
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-base mt-1">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow px-0 py-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Type: {course.type}</p>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-start gap-3 px-0 pt-4">
                  <Button asChild className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 flex items-center gap-2">
                    <a href={course.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Go to Course
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">No free courses found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
