
export type UserRole = "freelancer" | "client"


export type RegisterFormData = {
  first_name: string
  last_name: string
  email: string
  company: string
  role: UserRole | ""
  password: string
}
