"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Download, Eye, ArrowLeft } from 'lucide-react';
import Link from "next/link";

const ALL_NOTES = [
  {
    id: "1",
    title: "C Programming",
    description: "C Programming Notes",
    type: "notes",
    downloadLink: "/Notes/CNotesForProfessionals.pdf",
    previewLink: "/Notes/CNotesForProfessionals.pdf",
  },
  {
    id: "2",
    title: "C++",
    description: "C++ Notes",
    type: "notes",
    downloadLink: "/Notes/CPlusPlusNotesForProfessionals.pdf",
    previewLink: "/Notes/CPlusPlusNotesForProfessionals.pdf",
  },
  {
    id: "3",
    title: "Java",
    description: "Java® Notes",
    type: "notes",
    downloadLink: "/Notes/JavaNotesForProfessionals.pdf",
    previewLink: "/Notes/JavaNotesForProfessionals.pdf",
  },
  {
    id: "4",
    title: "JavaScript",
    description: "JavaScript® Notes",
    type: "notes",
    downloadLink: "/Notes/JavaScriptNotesForProfessionals.pdf",
    previewLink: "/Notes/JavaScriptNotesForProfessionals.pdf",
  },
  {
    id: "5",
    title: "Python",
    description: "Python® Notes",
    type: "notes",
    downloadLink: "/Notes/PythonNotesForProfessionals.pdf",
    previewLink: "/Notes/PythonNotesForProfessionals.pdf",
  },
  {
    id: "6",
    title: "HTML5",
    description: "HTML5 Notes",
    type: "notes",
    downloadLink: "/Notes/HTML5NotesForProfessionals.pdf",
    previewLink: "/Notes/HTML5NotesForProfessionals.pdf",
  },
  {
    id: "7",
    title: "CSS",
    description: "CSS Notes",
    type: "notes",
    downloadLink: "/Notes/CSSNotesForProfessionals.pdf",
    previewLink: "/Notes/CSSNotesForProfessionals.pdf",
  },
  {
    id: "8",
    title: "Objective-C",
    description: "Objective-C® Notes",
    type: "notes",
    downloadLink: "/Notes/ObjectiveCNotesForProfessionals.pdf",
    previewLink: "/Notes/ObjectiveCNotesForProfessionals.pdf",
  },
  {
    id: "9",
    title: "Node.js",
    description: "Node.js Notes",
    type: "notes",
    downloadLink: "/Notes/NodeJSNotesForProfessionals.pdf",
    previewLink: "/Notes/NodeJSNotesForProfessionals.pdf",
  },
  {
    id: "10",
    title: "React JS",
    description: "React JS Notes",
    type: "notes",
    downloadLink: "/Notes/ReactJSNotesForProfessionals.pdf",
    previewLink: "/Notes/ReactJSNotesForProfessionals.pdf",
  },
  {
    id: "11",
    title: "React Native",
    description: "React Native Notes",
    type: "notes",
    downloadLink: "/Notes/ReactNativeNotesForProfessionals.pdf",
    previewLink: "/Notes/ReactNativeNotesForProfessionals.pdf",
  },
  {
    id: "12",
    title: "Git",
    description: "Git® Notes",
    type: "notes",
    downloadLink: "/Notes/GitNotesForProfessionals.pdf",
    previewLink: "/Notes/GitNotesForProfessionals.pdf",
  },
  {
    id: "13",
    title: "Algorithms",
    description: "Algorithms Notes",
    type: "notes",
    downloadLink: "/Notes/AlgorithmsNotesForProfessionals.pdf",
    previewLink: "/Notes/AlgorithmsNotesForProfessionals.pdf",
  },
  {
    id: "14",
    title: ".NET",
    description: ".NET Framework Notes",
    type: "notes",
    downloadLink: "/Notes/DotNETFrameworkNotesForProfessionals.pdf",
    previewLink: "/Notes/DotNETFrameworkNotesForProfessionals.pdf",
  },
  {
    id: "15",
    title: "MongoDB®",
    description: "MongoDB® Notes",
    type: "notes",
    downloadLink: "/Notes/MongoDBNotesForProfessionals.pdf",
    previewLink: "/Notes/MongoDBNotesForProfessionals.pdf",
  },
  {
    id: "16",
    title: "Linux",
    description: "Linux® commands",
    type: "notes",
    downloadLink: "/Notes/LinuxNotesForProfessionals.pdf",
    previewLink: "/Notes/LinuxNotesForProfessionals.pdf",
  },
  {
    id: "17",
    title: "C#",
    description: "C# Notes",
    type: "notes",
    downloadLink: "/Notes/CSharpNotesForProfessionals.pdf",
    previewLink: "/Notes/CSharpNotesForProfessionals.pdf",
  },
  {
    id: "18",
    title: "SQL",
    description: "SQL Notes",
    type: "notes",
    downloadLink: "/Notes/SQLNotesForProfessionals.pdf",
    previewLink: "/Notes/SQLNotesForProfessionals.pdf",
  },
  {
    id: "19",
    title: "MySQL",
    description: "MySQL® Notes",
    type: "notes",
    downloadLink: "/Notes/MySQLNotesForProfessionals.pdf",
    previewLink: "/Notes/MySQLNotesForProfessionals.pdf",
  },
  {
    id: "20",
    title: "AI/ML",
    description: "ARTIFICIAL INTELLIGENCE  MACHINE LEARNING",
    type: "notes",
    downloadLink: "/Notes/AI&MLDIGITALNOTES.pdf",
    previewLink: "/Notes/AI&MLDIGITALNOTES.pdf",
  },
  {
    id: "21",
    title: "DSA",
    description: "DSA DEEP DIVE NOTESNOTES",
    type: "notes",
    downloadLink: "/Notes/DSA Notes.pdf",
    previewLink: "/Notes/DSA Notes.pdf",
  },
];

export default function NotesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(ALL_NOTES);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredNotes(ALL_NOTES);
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = ALL_NOTES.filter(note =>
        note.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        note.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        note.type.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredNotes(filtered);
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
          <h1 className="text-4xl font-bold mb-2">B.Tech CSE Notes</h1> {/* Removed explicit text-gray-900 dark:text-gray-50 */}
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Access comprehensive notes for various B.Tech Computer Science Engineering subjects.
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search b.tech cse notes..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
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
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">No notes found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
