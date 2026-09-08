import type {
  Ticket,
  CreateTicketInput,
  CreateTicketResponse,
} from "../types/tickets";
import { users } from "./userService";

const ticketArr: Ticket[] = [];

const createTicket = (
  v: CreateTicketInput,
): { message: string; data?: CreateTicketResponse } => {
  const customer = users.find((u) => u.id === v.customerId);

  if (!customer) return { message: "Customer not found" };
  if (customer.role !== "customer")
    return { message: "Only Customers can raise ticket" };
  if (v.agentId !== null) {
    const agent = users.find((u) => u.id === v.agentId && u.role === "agent");
    if (!agent) return { message: "Invalid Agent" };
  }
  const ticketnode: Ticket = {
    id: ticketArr.length + 1,
    customerId: v.customerId,
    title: v.title,
    description: v.description,
    agentId: v.agentId,
    priority: v.priority,
    status: "open",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  ticketArr.push(ticketnode);
  return {
    message: "Ticket Added scuessfully",
    data: ticketnode,
  };
};

export { ticketArr, createTicket };
