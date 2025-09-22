"use client"

import { AuthLayout } from "@/components/auth/auth-layout"
import { AuthForm } from "@/components/auth/auth-form"

export default function HomePage() {
  const handleSubmit = (data: { email: string; userType: "candidate" | "recruiter" }) => {
    console.log("Sign up data:", data)
    // Handle sign up logic here
  }

  const handleSocialLogin = (provider: string) => {
    console.log("Social login with:", provider)
    // Handle social login logic here
  }

  return (
   <AuthLayout
  studentImage="/images/student-desk.png"
  backgroundImage="/images/background-pattern.png"
  logoImage="\images\Logo.png" 
>
      <AuthForm title="Sign Up" type="signup" onSubmit={handleSubmit} onSocialLogin={handleSocialLogin} />
    </AuthLayout>
  )
}
