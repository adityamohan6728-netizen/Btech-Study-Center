"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import OnboardingForm from "@/components/onboarding-form"
import WhatsAppPopup from "@/components/whatsapp-popup"

export default function OnboardingPage() {
  const router = useRouter()
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hasVisited = Cookies.get("hasVisitedBTechPlatform")

    if (hasVisited) {
      setShowWhatsAppPopup(true)
      setIsLoading(false)
    } else {
      Cookies.set("hasVisitedBTechPlatform", "true", { expires: 365 })
      setIsLoading(false)
    }
  }, [router])

  const handleWhatsAppPopupClose = () => {
    setShowWhatsAppPopup(false)
    router.push("/home")
  }

  if (isLoading) {
    return null
  }

  if (showWhatsAppPopup) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <WhatsAppPopup
          isOpen={showWhatsAppPopup}
          onClose={handleWhatsAppPopupClose}
          title="Welcome Back! Join Our WhatsApp Channel"
          description="Stay connected with our B.Tech community! Get instant updates on new study materials, announcements, and connect with fellow students."
        />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <OnboardingForm />
    </div>
  )
}
