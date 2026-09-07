import type { User } from "./types/users";
import type { Ticket } from "./types/tickets";
import type { Comment } from "./types/comments";
import type { Audit } from "./types/audit";

// services
import { createTicket } from "./services/ticketService";

console.log(
  createTicket({
    customerId: 2,
    title: "this is test ticket from customer id",
    description: "this is test description",
    agentId: 3,
    priority: "medium",
  }),
);
