export interface Ticket {
  id: number;
  title: string;
  description: string;
  customer: string; //we need to somwhow link the user type here ;
  optionalAssignedAgent?: string; //we need to somwhow link the user type here;
  status: "in_progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high" | "insane";
}
