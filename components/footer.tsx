"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import RequestResourceForm from "./request-resource-form";
import { useState } from "react";

export default function Footer() {
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);

  return (
    <footer className="w-full border-t bg-white dark:bg-gray-950 py-8 text-gray-600 dark:text-gray-400">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { href: "/home", label: "Home" },
              { href: "/notes", label: "Notes" },
              { href: "/books", label: "Books" },
              { href: "/free-courses", label: "Free Courses" },
              { href: "/roadmap", label: "Roadmaps" },
              { href: "https://whatsapp.com/channel/0029VbBXSFo05MUZgGhOkk11", label: "Join WhatsApp", external: true },
              { href: "/register", label: "Register Now" }
            ].map(({ href, label, external }) => (
              <li key={label}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
                  >
                    {label}
                  </a>
                ) : (
                  <Link href={href} className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* About Owner Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">About the Owner</h3>
          <p className="text-sm mb-4">
            This platform is developed and maintained by Aditya Mohan, a B.Tech student in Computer Science and Engineering, committed to delivering high-quality academic resources to support and empower fellow learners.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: Github, href: "https://github.com/adityamohan-cse", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-mohan-cse", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/adityamohan_cse", label: "Twitter" },
              { icon: Instagram, href: "https://instagram.com/adityamohan.cse", label: "Instagram" },
              { icon: Globe, href: "http://adityamohan.tech/", label: "Website" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
              >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Details Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">Contact Details</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              Email:{" "}
              <a
                href="mailto:adityamohan.cse@gmail.com"
                className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
              >
                adityamohan.cse@gmail.com
              </a>
            </li>
          </ul>
          <div className="space-y-6">
            <Dialog open={isRequestFormOpen} onOpenChange={setIsRequestFormOpen}>
              <DialogTrigger asChild>
                <Button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200">
                  Request Resource
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-transparent border-none shadow-none p-0">
                <DialogHeader>
                  <DialogTitle className="sr-only">Request Resource</DialogTitle>
                  <DialogDescription className="sr-only">
                    Fill the form to request a new academic resource.
                  </DialogDescription>
                </DialogHeader>
                <RequestResourceForm
                  onSuccess={() => setIsRequestFormOpen(false)}
                  onClose={() => setIsRequestFormOpen(false)}
                />
              </DialogContent>
            </Dialog>
            <Button
              asChild
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white"
            >
              <a
                href="https://whatsapp.com/channel/0029VbBXSFo05MUZgGhOkk11"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
