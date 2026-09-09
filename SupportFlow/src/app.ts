import type { User } from "./types/users";
import type { Ticket } from "./types/tickets";
import type { Comment } from "./types/comments";
import type { Audit } from "./types/audit";

// services
import {
  createTicket,
  getTicket,
  getAllTickets,
} from "./services/ticketService";

// console.log(
//   createTicket({
//     customerId: 2,
//     title: "this is test ticket three from customer id",
//     description: "this is test description",
//     agentId: 3,
//     priority: "medium",
//   }),
// );

console.log(getTicket(2));
console.log(getAllTickets());
