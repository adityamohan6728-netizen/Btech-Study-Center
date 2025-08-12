"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface WhatsAppPopupProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  showSkipOption?: boolean
}

export default function WhatsAppPopup({
  isOpen,
  onClose,
  title = "Join Our WhatsApp Channel!",
  description = "Stay updated with the latest study materials, announcements, and connect with fellow B.Tech students.",
  showSkipOption = true,
}: WhatsAppPopupProps) {
  const whatsappChannelUrl = "https://whatsapp.com/channel/0029VbBXSFo05MUZgGhOkk11"

  const handleJoinWhatsApp = () => {
    window.open(whatsappChannelUrl, "_blank")
    onClose()
  }

  const handleSkip = () => {
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-green-600" />
            {title}
          </DialogTitle>
          <DialogDescription className="text-left">{description}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <MessageCircle className="h-4 w-4 text-green-600" />
            Get instant notifications Intership , Workshop , Job Opening , Tech opportunity
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <MessageCircle className="h-4 w-4 text-green-600" />
            Get all the tech opportunity information instently including apply link
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <MessageCircle className="h-4 w-4 text-green-600" />
            Access exclusive study materials and premium resourses instently
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button onClick={handleJoinWhatsApp} className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
            <MessageCircle className="h-4 w-4 mr-2" />
            Join WhatsApp Channel
          </Button>
          {showSkipOption && (
            <Button variant="outline" onClick={handleSkip} className="w-full sm:w-auto bg-transparent">
              Maybe Later
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
