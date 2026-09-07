import type { Ticket, Status, Priority } from "../types/tickets";
import { users } from "./userService";

const ticketArr: Ticket[] = [];
const Users = users;

interface CreateTicketReq {
  customerId: number;
  title: string;
  description: string;
  agentId: number | null;
  priority: Priority;
}

const createTicket = (v: CreateTicketReq): { message: string } => {
  let usereData = Users.filter((u) => u.id === v.customerId);
  let agentData = Users.filter((u) => u.id === v.agentId);

  if (usereData.length < 1) return { message: "Customer Not found" };
  if (agentData.length < 1) return { message: "Agent Not found" };

  if (usereData[0].role !== "customer") return { message: "Invalid customer" };
  if (agentData[0].role !== "agent") return { message: "Invalid Agent data" };

  
  if (v.agentId) {
    let agentData = Users.filter((u) => u.id === v.agentId);
    if (!agentData || agentData[0].role !== "agent")
      return { message: "AgentId Mismatch" };
  }
  let ticketnode: Ticket = {
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
  console.log(ticketArr);

  return {
    message: "Ticket Added scuessfully",
  };
};

export { ticketArr, createTicket };
