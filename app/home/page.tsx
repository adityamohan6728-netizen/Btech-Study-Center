"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, FileText, Book, PenTool, Video, FileCheck, HelpCircle, Star, Map, MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { ALL_SEARCHABLE_ITEMS } from "@/lib/search-data"

const allCategories = [
  {
    name: "Notes",
    href: "/notes",
    description: "Study notes and summaries",
    icon: FileText,
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950",
  },
  {
    name: "Books",
    href: "/books",
    description: "Textbooks and reference materials",
    icon: Book,
    iconColor: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950",
  },
  {
    name: "Handwritten Notes",
    href: "/hand-written-notes",
    description: "Student/teacher handwritten content",
    icon: PenTool,
    iconColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950",
  },
  {
    name: "Free Courses",
    href: "/free-courses",
    description: "Video courses and tutorials",
    icon: Video,
    iconColor: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-950",
  },
  {
    name: "Roadmaps",
    href: "/roadmap",
    description: "Structured learning paths",
    icon: Map,
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950",
  },
  //{
  //  name: "Syllabus",
  //  href: "/syllabus",
  //  description: "Complete curriculum documents",
  //  icon: FileCheck,
  //  iconColor: "text-indigo-600 dark:text-indigo-400",
  //  bgColor: "bg-indigo-50 dark:bg-indigo-950",
  //},
  //{
  //  name: "Previous Year Questions",
  //  href: "/previous-year-questions",
  //  description: "Past exam papers and solutions",
  //  icon: HelpCircle,
  //  iconColor: "text-orange-600 dark:text-orange-400",
  //  bgColor: "bg-orange-50 dark:bg-orange-950",
  //},
  {
    name: "Important Questions",
    href: "/important-questions",
    description: "Curated exam questions",
    icon: Star,
    iconColor: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-950",
  },
  {
  name: "RISU",
  href: "https://study-hub-orpin.vercel.app/",
  description: "Resources of the Previous year of RISU ",
  icon: () => (
    <img
      src="/RIU.png"
      alt="RISU"
      className="h-10 w-10"
      suppressHydrationWarning
    />
  ),
  iconColor: "text-green-600 dark:text-green-400",
  isExternal: true,
  },
]

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCategories, setFilteredCategories] = useState(allCategories)
  const router = useRouter()

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCategories(allCategories)
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase()

      const exactMatch = ALL_SEARCHABLE_ITEMS.find((item) => item.title.toLowerCase() === lowerCaseSearchTerm)

      if (exactMatch) {
        router.push(exactMatch.href)
        setSearchTerm("")
        return
      }

      const filtered = allCategories.filter(
        (category) =>
          category.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          category.description.toLowerCase().includes(lowerCaseSearchTerm),
      )
      setFilteredCategories(filtered)
    }
  }, [searchTerm, router])

  return (
    <div className="flex min-h-screen flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      {" "}
      {/* Changed bg-white dark:bg-gray-900 to bg-background text-foreground */}
      <div className="w-full max-w-5xl space-y-10">
        <h1 className="text-5xl font-extrabold text-center tracking-tight">
          {" "}
          {/* Removed explicit text-gray-900 dark:text-gray-50 */}
          B.Tech Study Center
        </h1>
        <p className="text-center text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your centralized hub for B.Tech academic resources. Explore notes, roadmaps, books, and free courses.
        </p>

        <div className="relative w-full max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search categories or resources..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => {
              const IconComponent = category.icon

              const linkProps = category.isExternal
                ? { href: category.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: category.href }

              return (
                <Link key={category.name} {...linkProps} className="group block h-full">
                  <Card className="h-full flex flex-col p-6 transition-all duration-200 ease-in-out transform hover:scale-[1.02] hover:shadow-lg">
                    {" "}
                    {/* Removed explicit dark:bg-gray-800 dark:border-gray-700, Card handles it */}
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full ${category.bgColor}`}>
                        <IconComponent className={`h-6 w-6 ${category.iconColor}`} />
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 flex-grow">{category.description}</p>
                    <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-medium">
                      <FileCheck className="h-4 w-4 mr-1" />
                      Available for download
                    </div>
                  </Card>
                </Link>
              )
            })
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
              No categories found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
