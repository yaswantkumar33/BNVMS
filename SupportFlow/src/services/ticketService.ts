import type {
  Ticket,
  CreateTicketInput,
  CreateTicketResponse,
  GetTicketInput,
  GetTicketResponse,
  assignTicketInput,
} from "../types/tickets";
import { users } from "./userService";

const ticketArr: Ticket[] = [
  {
    id: 1,
    customerId: 2,
    title: "this is test ticket from customer id",
    description: "this is test description",
    agentId: 3,
    priority: "medium",
    status: "open",
    createdAt: "9/9/2026, 10:30:50 PM",
    updatedAt: "9/9/2026, 10:30:50 PM",
  },
  {
    id: 2,
    customerId: 2,
    title: "this is test ticket two from customer id",
    description: "this is test description",
    agentId: 3,
    priority: "medium",
    status: "open",
    createdAt: "9/9/2026, 10:30:50 PM",
    updatedAt: "9/9/2026, 10:30:50 PM",
  },
];

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
  const now = new Date().toLocaleString();

  const ticketnode: Ticket = {
    id: ticketArr[ticketArr.length - 1].id + 1,
    customerId: v.customerId,
    title: v.title,
    description: v.description,
    agentId: v.agentId,
    priority: v.priority,
    status: "open",
    createdAt: now,
    updatedAt: now,
  };
  ticketArr.push(ticketnode);
  return {
    message: "Ticket Added scuessfully",
    data: ticketnode,
  };
};

const getTicket = (
  v: GetTicketInput,
): { message: string; data?: GetTicketResponse } => {
  if (!v) return { message: "Id Not Prrovided" };
  let ticketResult = ticketArr.find((t) => t.id === v);
  if (ticketResult) return { message: "Ticket Found", data: ticketResult };

  return { message: "Ticket not found" };
};
const getAllTickets = () => {
  return [...ticketArr];
};
const assignTicket = (at: assignTicketInput) => {};
export { ticketArr, createTicket, getTicket,getAllTickets };
