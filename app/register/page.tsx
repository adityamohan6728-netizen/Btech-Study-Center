// app/register/page.tsx
import OnboardingForm from "@/components/onboarding-form";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground"> {/* Changed bg-white dark:bg-gray-900 to bg-background text-foreground */}
      <OnboardingForm />
    </div>
  );
}
