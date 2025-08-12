"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Download, Eye, FileCheck, ArrowLeft } from 'lucide-react';
import Link from "next/link";

const ALL_ROADMAPS = [
  {
    id: "1",
    title: "Full Stack Web Dev",
    description: "A step-by-step guide to becoming a full-stack developer.",
    type: "roadmap",
    downloadLink: "/placeholder.pdf?query=fullstack-roadmap",
    previewLink: "/placeholder.pdf?query=fullstack-roadmap-preview",
  },
  {
    id: "2",
    title: "Data Science Career Path",
    description: "Learn the essential skills and tools for a career in data science.",
    type: "roadmap",
    downloadLink: "/placeholder.pdf?query=data-science-roadmap",
    previewLink: "/placeholder.pdf?query=data-science-roadmap-preview",
  },
  {
    id: "3",
    title: "Competitive Programming",
    description: "Strategies and resources to excel in competitive programming.",
    type: "roadmap",
    downloadLink: "/placeholder.pdf?query=competitive-programming-roadmap",
    previewLink: "/placeholder.pdf?query=competitive-programming-roadmap-preview",
  },
  {
    id: "4",
    title: "Machine Learning Engineer",
    description: "Roadmap to become a Machine Learning Engineer.",
    type: "roadmap",
    downloadLink: "/placeholder.pdf?query=ml-engineer-roadmap",
    previewLink: "/placeholder.pdf?query=ml-engineer-roadmap-preview",
  },
];

export default function RoadmapPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRoadmaps, setFilteredRoadmaps] = useState(ALL_ROADMAPS);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredRoadmaps(ALL_ROADMAPS);
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = ALL_ROADMAPS.filter(roadmap =>
        roadmap.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        roadmap.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        roadmap.type.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredRoadmaps(filtered);
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
          <h1 className="text-4xl font-bold mb-2">B.Tech Roadmaps</h1> {/* Removed explicit text-gray-900 dark:text-gray-50 */}
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Structured learning paths to guide your academic and career journey.
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search roadmaps..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoadmaps.length > 0 ? (
            filteredRoadmaps.map((roadmap) => (
              <Card key={roadmap.id} className="flex flex-col p-6"> {/* Removed explicit dark:bg-gray-800 dark:border-gray-700, Card handles it */}
                <CardHeader className="pb-2 px-0 pt-0">
                  <CardTitle className="text-2xl font-bold">{roadmap.title}</CardTitle> {/* Removed explicit text-gray-900 dark:text-gray-100 */}
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-base mt-1">{roadmap.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow px-0 py-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Type: {roadmap.type}</p>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-start gap-3 px-0 pt-4">
                  <Button asChild className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 flex items-center gap-2">
                    <a href={roadmap.downloadLink} download>
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                    <a href={roadmap.previewLink} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-4 w-4" />
                      Preview
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">No roadmaps found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
