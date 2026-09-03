export interface Comment {
  id: number;
  ticketId: number; 
  authorId: number; 
  content: string;
  createdAt: Date;
}
