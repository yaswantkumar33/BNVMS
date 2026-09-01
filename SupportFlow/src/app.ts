import type { User } from "./types/users";
import type { Ticket } from "./types/tickets";
import type { Comment } from "./types/comments";

let userOne: User = {
  id: 1,
  firstName: "Yash",
  lastName: "Dev",
  email: "test@email.com",
  role: "admin",
};
console.log(userOne);

let ticketOne: Ticket = {
  id: 101,
  title: "Ticket One",
  description: "this is the description of the ticket",
  customer: "yash",
  status: "in_progress",
  priority: "medium",
};
console.log(ticketOne);

let commentOne: Comment = {
  id: 1002,
  ticketRelationship: "no idea here",
  author: "yash",
  content: "this is the content of the string type cotent of the comment",
  creationTime: new Date(),
};
console.log(commentOne);
