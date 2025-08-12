"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import RequestResourceForm from "./request-resource-form";
import { useState } from "react";

export default function Navbar() {
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Notes", href: "/notes" },
    { name: "Handwritten Notes", href: "/hand-written-notes" },
    { name: "Roadmaps", href: "/roadmap" },
    { name: "Books", href: "/books" },
    { name: "Free Courses", href: "/free-courses" },
    //{ name: "Syllabus", href: "/syllabus" },
    //{ name: "Previous Year Questions", href: "/previous-year-questions" },
    { name: "Important Questions", href: "/important-questions" },
    { name: "Register Now", href: "/register" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur-sm dark:bg-gray-950/90">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/home"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <span className="sr-only">B.Tech Study Center</span>
            <span className="text-gray-900 dark:text-gray-50">
              B.Tech Study Center
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Request Resource Dialog */}
          <Dialog open={isRequestFormOpen} onOpenChange={setIsRequestFormOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 focus:ring-gray-700">
                Request Resource
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-transparent border-none shadow-none p-0">
              <DialogHeader>
                <VisuallyHidden>
                  <DialogTitle>Request Resource Form</DialogTitle>
                </VisuallyHidden>
              </DialogHeader>
              <RequestResourceForm
                onSuccess={() => setIsRequestFormOpen(false)}
                onClose={() => setIsRequestFormOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 p-4">
              <Link
                href="/home"
                className="flex items-center gap-2 text-lg font-semibold mb-4"
                onClick={() => setIsSheetOpen(false)}
              >
                <span className="text-gray-900 dark:text-gray-50">
                  B.Tech Study Center
                </span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Request Resource Dialog */}
              <Dialog open={isRequestFormOpen} onOpenChange={setIsRequestFormOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="text-lg font-medium px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 focus:ring-gray-700 w-full justify-center"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Request Resource
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-transparent border-none shadow-none p-0">
                  <DialogHeader>
                    <VisuallyHidden>
                      <DialogTitle>Request Resource Form</DialogTitle>
                    </VisuallyHidden>
                  </DialogHeader>
                  <RequestResourceForm
                    onSuccess={() => setIsRequestFormOpen(false)}
                    onClose={() => setIsRequestFormOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}