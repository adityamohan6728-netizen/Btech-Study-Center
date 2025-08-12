"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Download, Eye, FileCheck, ArrowLeft } from 'lucide-react';
import Link from "next/link";

const ALL_HANDWRITTEN_NOTES = [
  {
    id: "1",
    title: "Engg. Maths - Unit 1",
    description: "Handwritten notes for differential equations and linear algebra.",
    type: "handwritten notes",
    downloadLink: "/placeholder.pdf?query=handwritten-math-notes",
    previewLink: "/placeholder.pdf?query=handwritten-math-preview",
  },
  {
    id: "2",
    title: "Physics Lab Manual",
    description: "Detailed handwritten observations and calculations from physics experiments.",
    type: "handwritten notes",
    downloadLink: "/placeholder.pdf?query=handwritten-physics-lab",
    previewLink: "/placeholder.pdf?query=handwritten-physics-preview",
  },
  {
    id: "3",
    title: "Basic Electrical Engg.",
    description: "Neat handwritten notes on circuits, AC/DC fundamentals, and components.",
    type: "handwritten notes",
    downloadLink: "/placeholder.pdf?query=handwritten-eee-notes",
    previewLink: "/placeholder.pdf?query=handwritten-eee-preview",
  },
  {
    id: "4",
    title: "Chemistry - Organic",
    description: "Handwritten notes covering organic chemistry reactions and mechanisms.",
    type: "handwritten notes",
    downloadLink: "/placeholder.pdf?query=handwritten-chemistry-notes",
    previewLink: "/placeholder.pdf?query=handwritten-chemistry-preview",
  },
];

export default function HandWrittenNotesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHandWrittenNotes, setFilteredHandWrittenNotes] = useState(ALL_HANDWRITTEN_NOTES);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredHandWrittenNotes(ALL_HANDWRITTEN_NOTES);
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = ALL_HANDWRITTEN_NOTES.filter(note =>
        note.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        note.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        note.type.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredHandWrittenNotes(filtered);
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
          <h1 className="text-4xl font-bold mb-2">B.Tech Handwritten Notes</h1> {/* Removed explicit text-gray-900 dark:text-gray-50 */}
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Access neatly organized handwritten notes from various B.Tech subjects.
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search handwritten notes..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHandWrittenNotes.length > 0 ? (
            filteredHandWrittenNotes.map((note) => (
              <Card key={note.id} className="flex flex-col p-6"> {/* Removed explicit dark:bg-gray-800 dark:border-gray-700, Card handles it */}
                <CardHeader className="pb-2 px-0 pt-0">
                  <CardTitle className="text-2xl font-bold">{note.title}</CardTitle> {/* Removed explicit text-gray-900 dark:text-gray-100 */}
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-base mt-1">{note.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow px-0 py-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Type: {note.type}</p>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-start gap-3 px-0 pt-4">
                  <Button asChild className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 flex items-center gap-2">
                    <a href={note.downloadLink} download>
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                    <a href={note.previewLink} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-4 w-4" />
                      Preview
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">No handwritten notes found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
