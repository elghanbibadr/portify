
export type UserRole = "FREELANCER" | "CLIENT"


export type RegisterFormData = {
  first_name: string
  last_name: string
  email: string
  company: string
  role: UserRole 
  password: string
}
