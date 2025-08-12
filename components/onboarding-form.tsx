"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import WhatsAppPopup from "@/components/whatsapp-popup"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  contactNumber: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
  collegeName: z.string().min(2, { message: "College name must be at least 2 characters." }),
  semester: z.string().min(1, { message: "Please select a semester." }),
  section: z.string().optional(),
})

export default function OnboardingForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      collegeName: "",
      semester: "",
      section: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const response = await fetch("/api/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your details have been submitted successfully!",
        })
        setShowWhatsAppModal(true)
      } else {
        let errorMessage = "Something went wrong. Please try again."

        try {
          const contentType = response.headers.get("content-type")
          if (contentType && contentType.includes("application/json")) {
            const errorData = await response.json()
            errorMessage = errorData.message || errorMessage
          } else {
            // If it's not JSON, use a generic error message based on status
            if (response.status === 500) {
              errorMessage = "Server error. Please try again later."
            } else if (response.status === 400) {
              errorMessage = "Invalid form data. Please check your inputs."
            }
          }
        } catch (parseError) {
          console.error("Error parsing error response:", parseError)
          // Use default error message if we can't parse the response
        }

        toast({
          title: "Submission Failed",
          description: errorMessage,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: "Could not submit form. Please check your network connection.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleWhatsAppPopupClose = () => {
    setShowWhatsAppModal(false)
    router.push("/home")
  }

  return (
    <>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome B.Tech Student!</CardTitle>
          <CardDescription>Please fill out your details to access the study resources.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" {...form.register("name")} />
              {form.formState.errors.name && (
                <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" {...form.register("email")} />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input id="contactNumber" type="tel" placeholder="9876543210" {...form.register("contactNumber")} />
              {form.formState.errors.contactNumber && (
                <p className="text-sm text-red-500">{form.formState.errors.contactNumber.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="collegeName">College Name</Label>
              <Input id="collegeName" placeholder="ABC Institute of Technology" {...form.register("collegeName")} />
              {form.formState.errors.collegeName && (
                <p className="text-sm text-red-500">{form.formState.errors.collegeName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="semester">Semester</Label>
              <Select onValueChange={(value) => form.setValue("semester", value)} value={form.watch("semester")}>
                <SelectTrigger id="semester">
                  <SelectValue placeholder="Select Semester" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 8 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      Semester {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.semester && (
                <p className="text-sm text-red-500">{form.formState.errors.semester.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="section">Section (Optional)</Label>
              <Input id="section" placeholder="A, B, C..." {...form.register("section")} />
            </div>
            <Button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 focus:ring-gray-700"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit and Access"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <WhatsAppPopup
        isOpen={showWhatsAppModal}
        onClose={handleWhatsAppPopupClose}
        title="🎉 Welcome to B.Tech Study Platform!"
        description="Your registration was successful! Join our WhatsApp channel to get instant updates about new study materials, important announcements, and connect with fellow students."
        showSkipOption={true}
      />
    </>
  )
}
