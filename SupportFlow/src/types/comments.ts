export interface Comment {
  id: number;
  ticketRelationship: string; //ticket id should come here i beleive;
  author: string; // need to link the user here also
  content: string;
  creationTime: Date;
}
