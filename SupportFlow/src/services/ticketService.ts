import type { Ticket, Status, Priority } from "../types/tickets";
import { users } from "./userService";

const ticketArr: Ticket[] = [];
const Users = users;

// const createTicket = (val: Ticket): { message: string; status: number } => {
//   if (val) ticketArr.push(val);
//   return {
//     message: val
//       ? "Ticket Has been added sucessfully"
//       : "No value has been received",
//     status: val ? 200 : 400,
//   };
// };

const createTicket = (
  customerId: number,
  title: string,
  description: string,
  agentId: number | null,
  priority: Priority,
): { message: string } => {
  if (!(customerId && Users.some((u) => u.id == customerId)))
    return { message: "User Not Found Enter a valid user" };

  let ticketnode: Ticket = {
    id: 10,
    customerId: customerId,
    title: title,
    description: description,
    agentId: agentId,
    priority: priority,
    status: "open",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  ticketArr.push(ticketnode);
  return {
    message: "Ticket Added scuessfully",
  };
};

export { ticketArr, createTicket };
