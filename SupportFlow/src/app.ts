import type { User } from "./types/users";
import type { Ticket } from "./types/tickets";
import type { Comment } from "./types/comments";
import type { Audit } from "./types/audit";

// services
import { createTicket } from "./services/ticketService";

// let users: User[] = [
//   {
//     id: 1,
//     firstName: "YashAdmin",
//     lastName: "Dev",
//     email: "test@email.com",
//     role: "admin",
//   },
//   {
//     id: 2,
//     firstName: "YashCustomer",
//     lastName: "Dev",
//     email: "test@email.com",
//     role: "customer",
//   },
//   {
//     id: 3,
//     firstName: "YashAgent",
//     lastName: "Dev",
//     email: "test@email.com",
//     role: "agent",
//   },
// ];

// let tickets: Ticket[] = [
//   {
//     id: 101,
//     title: "Ticket One",
//     description: "this is the description of the ticket",
//     customerId: 2,
//     status: "open",
//     priority: "medium",
//     createdAt: new Date(),
//     agentId: null,
//     updatedAt: new Date(),
//   },
//   {
//     id: 102,
//     title: "Ticket Two",
//     description: "this is the description of the ticket",
//     customerId: 2,
//     status: "in_progress",
//     priority: "medium",
//     agentId: 3,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
// ];

// let comments: Comment[] = [
//   {
//     id: 201,
//     ticketId: 102,
//     authorId: 3,
//     content: "this is the test comment created by the agent  user",
//     createdAt: new Date(),
//   },
// ];

// let aduitLogs: Audit[] = [
//   {
//     id: 400,
//     ticketId: 102,
//     actorId: 3,
//     action: "Added a comment to the ticket",
//     createdAt: new Date(),
//   },
// ];
// console.log(users, tickets, comments, aduitLogs);
createTicket();
