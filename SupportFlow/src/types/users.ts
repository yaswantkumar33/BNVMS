type Roles = "admin" | "agent" | "customer";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Roles;
  description?: string;
}

export { User, Roles };
