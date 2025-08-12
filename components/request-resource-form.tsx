"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { X } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Your name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  contact: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
  resourceName: z.string().min(3, { message: "Resource name must be at least 3 characters." }),
  resourceType: z.string().min(1, { message: "Please select a resource type." }),
  description: z.string().optional(),
})

interface RequestResourceFormProps {
  onSuccess: () => void
  onClose?: () => void
}

export default function RequestResourceForm({ onSuccess, onClose }: RequestResourceFormProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      resourceName: "",
      resourceType: "",
      description: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const response = await fetch("/api/request-resource", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        toast({
          title: "Request Sent!",
          description: "Your resource request has been submitted. We will reply as soon as possible.",
        })
        form.reset()
        onSuccess()
      } else {
        const errorData = await response.json()
        toast({
          title: "Request Failed",
          description: errorData.message || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting resource request form:", error)
      toast({
        title: "Error",
        description: "Could not submit request. Please check your network connection.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check if form is valid before submitting
    const isValid = await form.trigger()

    if (!isValid) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive",
      })
      return
    }

    // If validation passes, proceed with form submission
    form.handleSubmit(onSubmit)(e)
  }

  return (
    <Card className="w-full max-w-md mx-auto max-h-[90vh] overflow-y-auto">
      <CardHeader className="space-y-1 text-center relative">
        {onClose && (
          <Button variant="ghost" size="sm" className="absolute right-2 top-2" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        )}
        <CardTitle className="text-2xl font-bold">Request a Resource</CardTitle>
        <CardDescription>Fill out the form below to request a specific study resource.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="John Doe" {...form.register("name")} />
            {form.formState.errors.name && <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" {...form.register("email")} />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contact Number</Label>
            <Input id="contact" type="tel" placeholder="9876543210" {...form.register("contact")} />
            {form.formState.errors.contact && (
              <p className="text-sm text-red-500">{form.formState.errors.contact.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="resourceName">Resource Name</Label>
            <Input id="resourceName" placeholder="DSA Handbook" {...form.register("resourceName")} />
            {form.formState.errors.resourceName && (
              <p className="text-sm text-red-500">{form.formState.errors.resourceName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="resourceType">Resource Type</Label>
            <Select onValueChange={(value) => form.setValue("resourceType", value)} value={form.watch("resourceType")}>
              <SelectTrigger id="resourceType">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="notes">Notes</SelectItem>
                <SelectItem value="book">Book</SelectItem>
                <SelectItem value="handwritten-notes">Handwritten Notes</SelectItem>
                <SelectItem value="roadmap">Roadmap</SelectItem>
                <SelectItem value="free-course">Free Course</SelectItem>
                <SelectItem value="syllabus">Syllabus</SelectItem>
                <SelectItem value="pyq">Previous Year Question</SelectItem>
                <SelectItem value="important-question">Important Question</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.resourceType && (
              <p className="text-sm text-red-500">{form.formState.errors.resourceType.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Describe More (Optional)</Label>
            <Textarea
              id="description"
              placeholder="e.g., specific topics, authors, or years"
              className="min-h-[80px] resize-none"
              {...form.register("description")}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
