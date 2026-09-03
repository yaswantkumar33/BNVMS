export type Status = "open" | "in_progress" | "resolved" | "closed";
export type Priority = "low" | "medium" | "high" | "urgent";
export interface Ticket {
  id: number;
  title: string;
  description: string;
  customerId: number;
  agentId: number | null;
  priority: Priority;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}
