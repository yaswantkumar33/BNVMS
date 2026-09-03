export interface Audit {
  id: number;
  ticketId: number;
  actorId: number;
  action: string;
  createdAt: Date;
}
